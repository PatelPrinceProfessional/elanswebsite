import { gsap } from 'gsap';

export interface ServicesCarouselCleanup {
  (): void;
}

/**
 * Initializes the bidirectional infinite GSAP horizontal carousel for
 * the Services section ("Our services / What we Do").
 *
 * Capabilities:
 * - Bidirectional infinite seamless modulo wrapping (left-to-right AND right-to-left)
 * - Trackpad horizontal swipe (deltaX) & vertical mouse wheel deflection (deltaY / Shift+wheel)
 * - Pointer click-and-drag gesture physics with inertial throw momentum & friction
 * - Real-time kinetic card skew (skewX) coupled to scrolling velocity
 * - Interactive 3D tilt & dynamic specular lighting on card hover
 * - Ambient floating auto-drift when idle (subtle luxury motion, decelerates on hover)
 * - Arrow button step controls
 * - Full WCAG AAA reduced motion awareness
 */
export function initServicesCarousel(root: HTMLElement = document.body): ServicesCarouselCleanup {
  const container = root.querySelector<HTMLElement>('[data-services-carousel]');
  if (!container) return () => {};

  const track = container.querySelector<HTMLElement>('[data-services-track]');
  if (!track) return () => {};

  const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-carousel-item]'));
  if (cards.length < 6) return () => {};

  const prevBtn = container.querySelector<HTMLElement>('[data-carousel-prev]');
  const nextBtn = container.querySelector<HTMLElement>('[data-carousel-next]');

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Measure single cycle width (distance between card 0 and card 6)
  let setDistance = 0;
  const updateMetrics = () => {
    const card0 = cards[0];
    const card6 = cards[6];
    if (card0 && card6) {
      const rect0 = card0.getBoundingClientRect();
      const rect6 = card6.getBoundingClientRect();
      const dist = Math.abs(rect6.left - rect0.left);
      if (dist > 100) {
        setDistance = dist;
        return;
      }
    }
    // Fallback: estimate from total scrollWidth / 3 sets
    setDistance = Math.max(1, track.scrollWidth / 3);
  };

  updateMetrics();

  // Position state: start in the middle set so both left and right directions have full headroom
  let currentX = -setDistance;
  let targetX = -setDistance;
  let prevCurrentX = -setDistance;
  let velocity = 0;
  let currentSkew = 0;

  // Gesture state
  let isDragging = false;
  let hasDraggedFar = false;
  let isHovered = false;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let lastPointerX = 0;
  let lastPointerTime = 0;
  let activePointerId: number | null = null;

  // Ambient drift parameters
  const ambientSpeed = prefersReduced ? 0 : 0.75;
  let ambientDirection = -1; // -1 for leftward drift, 1 for rightward drift

  // Friction and easing parameters
  const friction = 0.92;
  const lerpFactor = prefersReduced ? 0.35 : 0.12;

  // --- RAF / Ticker Animation Loop ---
  const onTick = (_time: number, deltaTime: number) => {
    if (setDistance <= 0) return;

    // Normalize deltaTime to standard 60 FPS frame (16.66ms)
    const deltaRatio = Math.min(Math.max((deltaTime || 16.66) / 16.66, 0.4), 2.5);

    if (!isDragging) {
      // Apply inertial throw velocity damping
      if (Math.abs(velocity) > 0.05) {
        velocity *= Math.pow(friction, deltaRatio);
        targetX += velocity * deltaRatio;
      } else {
        velocity = 0;
        // Ambient continuous drift when idle
        if (ambientSpeed > 0) {
          const speedFactor = isHovered ? 0.2 : 1.0;
          targetX += ambientSpeed * ambientDirection * speedFactor * deltaRatio;
        }
      }
    }

    // Smooth position interpolation towards target
    currentX += (targetX - currentX) * Math.min(lerpFactor * deltaRatio, 1);

    // Mathematical Seamless Modulo Wrap in both directions:
    // When moving leftwards and passing the cycle boundary:
    while (currentX <= -setDistance * 2) {
      currentX += setDistance;
      targetX += setDistance;
    }
    // When moving rightwards and passing the cycle boundary:
    while (currentX >= -setDistance * 0.2) {
      currentX -= setDistance;
      targetX -= setDistance;
    }

    // Calculate instantaneous velocity for kinetic card skew
    const frameSpeed = currentX - prevCurrentX;
    prevCurrentX = currentX;

    if (!prefersReduced) {
      const targetSkew = Math.max(-6, Math.min(6, frameSpeed * 0.4));
      currentSkew += (targetSkew - currentSkew) * 0.18;
      track.style.setProperty('--carousel-skew', `${currentSkew.toFixed(2)}deg`);
    } else {
      track.style.setProperty('--carousel-skew', '0deg');
    }

    // GPU-accelerated 3D translation
    track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
  };

  gsap.ticker.add(onTick);

  // --- Pointer Gestures (Mouse & Touch Drag) ---
  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return; // only primary button
    activePointerId = e.pointerId;
    isDragging = true;
    hasDraggedFar = false;
    velocity = 0;
    pointerStartX = e.clientX;
    pointerStartY = e.clientY;
    lastPointerX = e.clientX;
    lastPointerTime = performance.now();

    container.classList.add('is-dragging');
    try {
      container.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if setPointerCapture fails on certain touch agents
    }
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!isDragging || (activePointerId !== null && e.pointerId !== activePointerId)) return;

    const dx = e.clientX - lastPointerX;
    const totalDistX = Math.abs(e.clientX - pointerStartX);
    const totalDistY = Math.abs(e.clientY - pointerStartY);

    if (totalDistX > 6 || totalDistY > 6) {
      hasDraggedFar = true;
    }

    targetX += dx * 1.15;

    const now = performance.now();
    const dt = Math.max(now - lastPointerTime, 8);
    // Instantaneous velocity normalized to frame time
    velocity = (dx / dt) * 16.66;
    if (Math.abs(dx) > 1) {
      ambientDirection = dx > 0 ? 1 : -1;
    }

    lastPointerX = e.clientX;
    lastPointerTime = now;
  };

  const onPointerUp = (e: PointerEvent) => {
    if (!isDragging || (activePointerId !== null && e.pointerId !== activePointerId)) return;

    isDragging = false;
    activePointerId = null;
    container.classList.remove('is-dragging');

    try {
      container.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    // Clamp throw velocity to realistic dynamic range
    velocity = Math.max(-35, Math.min(35, velocity));
  };

  const onPointerCancel = (e: PointerEvent) => {
    if (!isDragging) return;
    onPointerUp(e);
  };

  // Prevent link click when user dragged
  const onClickCapture = (e: MouseEvent) => {
    if (hasDraggedFar) {
      e.preventDefault();
      e.stopPropagation();
      hasDraggedFar = false;
    }
  };

  container.addEventListener('pointerdown', onPointerDown, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerup', onPointerUp, { passive: true });
  window.addEventListener('pointercancel', onPointerCancel, { passive: true });
  container.addEventListener('click', onClickCapture, { capture: true });

  // --- Wheel Event (Trackpad horizontal swipe & mouse wheel deflection) ---
  const onWheel = (e: WheelEvent) => {
    const isHorizontalSwipe = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    if (isHorizontalSwipe) {
      // Prevent horizontal browser back/forward history navigation gesture
      e.preventDefault();
      targetX -= e.deltaX * 1.1;
      velocity = -e.deltaX * 0.35;
      ambientDirection = e.deltaX > 0 ? -1 : 1;
    } else if (e.shiftKey) {
      // Standard Shift+Scroll horizontal control
      e.preventDefault();
      targetX -= e.deltaY * 1.1;
      velocity = -e.deltaY * 0.35;
      ambientDirection = e.deltaY > 0 ? -1 : 1;
    } else if (Math.abs(e.deltaY) > 0) {
      // Vertical mouse wheel deflects carousel smoothly
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView && isHovered) {
        targetX -= e.deltaY * 0.75;
        velocity = -e.deltaY * 0.25;
        ambientDirection = e.deltaY > 0 ? -1 : 1;
      }
    }
  };

  container.addEventListener('wheel', onWheel, { passive: false });

  // --- Hover State & 3D Interactive Card Tilt ---
  const onContainerEnter = () => {
    isHovered = true;
  };

  const onContainerLeave = () => {
    isHovered = false;
  };

  container.addEventListener('mouseenter', onContainerEnter);
  container.addEventListener('mouseleave', onContainerLeave);

  const cardCleanupList: Array<() => void> = [];

  cards.forEach((card) => {
    const cardInner = card.querySelector<HTMLElement>('.services-card_inner');
    const cardWrap = card.querySelector<HTMLElement>('.services-card_wrap');
    const video = card.querySelector<HTMLVideoElement>('video');

    if (!cardInner) return;

    let moveRaf: number | null = null;

    const onCardEnter = () => {
      card.setAttribute('data-card-hovered', 'true');
      if (video) {
        try {
          video.play().catch(() => {});
        } catch {
          // ignore autoplay restrictions
        }
      }
    };

    const onCardMove = (e: MouseEvent) => {
      if (prefersReduced || isDragging) return;
      if (moveRaf !== null) cancelAnimationFrame(moveRaf);

      moveRaf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        const tiltX = -py * 12;
        const tiltY = px * 12;

        cardInner.style.transform = `perspective(800px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(8px)`;

        if (cardWrap) {
          const glowX = ((px + 0.5) * 100).toFixed(1);
          const glowY = ((py + 0.5) * 100).toFixed(1);
          cardWrap.style.setProperty('--glow-x', `${glowX}%`);
          cardWrap.style.setProperty('--glow-y', `${glowY}%`);
        }
      });
    };

    const onCardLeave = () => {
      card.removeAttribute('data-card-hovered');
      if (moveRaf !== null) cancelAnimationFrame(moveRaf);

      cardInner.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      cardInner.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';

      setTimeout(() => {
        cardInner.style.transition = '';
      }, 450);

      if (video) {
        try {
          video.pause();
          video.currentTime = 0;
        } catch {
          // ignore
        }
      }
    };

    card.addEventListener('mouseenter', onCardEnter);
    card.addEventListener('mousemove', onCardMove);
    card.addEventListener('mouseleave', onCardLeave);

    cardCleanupList.push(() => {
      card.removeEventListener('mouseenter', onCardEnter);
      card.removeEventListener('mousemove', onCardMove);
      card.removeEventListener('mouseleave', onCardLeave);
      if (moveRaf !== null) cancelAnimationFrame(moveRaf);
    });
  });

  // --- Step Arrow Controls ---
  const cardStep = () => {
    const firstCard = cards[0];
    return firstCard ? firstCard.getBoundingClientRect().width + 24 : 360;
  };

  const onPrevClick = (e: MouseEvent) => {
    e.preventDefault();
    const step = cardStep();
    targetX += step;
    velocity = 12;
    ambientDirection = 1;
  };

  const onNextClick = (e: MouseEvent) => {
    e.preventDefault();
    const step = cardStep();
    targetX -= step;
    velocity = -12;
    ambientDirection = -1;
  };

  prevBtn?.addEventListener('click', onPrevClick);
  nextBtn?.addEventListener('click', onNextClick);

  // --- Window Resize Listener ---
  const onResize = () => {
    updateMetrics();
  };

  window.addEventListener('resize', onResize, { passive: true });

  // --- Teardown & Cleanup Function ---
  return () => {
    gsap.ticker.remove(onTick);

    container.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerCancel);
    container.removeEventListener('click', onClickCapture, { capture: true });
    container.removeEventListener('wheel', onWheel);
    container.removeEventListener('mouseenter', onContainerEnter);
    container.removeEventListener('mouseleave', onContainerLeave);

    prevBtn?.removeEventListener('click', onPrevClick);
    nextBtn?.removeEventListener('click', onNextClick);

    window.removeEventListener('resize', onResize);

    cardCleanupList.forEach((cleanup) => cleanup());
  };
}
