import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Pause,
} from "lucide-react";
import { useMotionEnvironment } from "@/hooks/use-motion-environment";

export interface CoverflowProject {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  href: string;
  accentColor: string;
}

export const COVERFLOW_PROJECTS: CoverflowProject[] = [
  {
    id: "odido",
    title: "Odido Mobile & Telecom",
    category: "Mobile Architecture",
    tag: "Cloud Native",
    description: "High-throughput mobile application architecture and edge streaming services.",
    href: "/werk/odido",
    accentColor: "#0070f3",
  },
  {
    id: "fatboy",
    title: "Fatboy Global E-Commerce",
    category: "Shopify & Web",
    tag: "Headless Commerce",
    description: "Interactive modular e-commerce experience with sub-second page transitions.",
    href: "/werk/fatboy",
    accentColor: "#e63946",
  },
  {
    id: "pvdniet",
    title: "P. van der Niet Enterprise",
    category: "Web Architecture",
    tag: "Full Stack",
    description: "Scalable enterprise web application and distributed cloud workflow engines.",
    href: "/werk/p-van-der-niet",
    accentColor: "#2563eb",
  },
  {
    id: "veilig-thuis",
    title: "Veilig Thuis Cloud Systems",
    category: "Cloud & DevOps",
    tag: "Zero-Trust",
    description: "Mission-critical, fault-tolerant infrastructure built for maximum uptime and security.",
    href: "/werk/veilig-thuis",
    accentColor: "#10b981",
  },
  {
    id: "willem-ii",
    title: "Willem II Sports Intelligence",
    category: "AI & Data Engineering",
    tag: "Predictive AI",
    description: "Real-time athletic performance analytics and predictive machine learning models.",
    href: "/werk/willem-ii",
    accentColor: "#d90429",
  },
  {
    id: "floryn",
    title: "Floryn FinTech Engine",
    category: "FinTech Platform",
    tag: "Real-Time Ledger",
    description: "Low-latency automated business lending pipeline and secure credit ledger systems.",
    href: "/werk/floryn",
    accentColor: "#7928ca",
  },
  {
    id: "vvaa",
    title: "VvAA Medical Portal",
    category: "Enterprise Security",
    tag: "Secure Vault",
    description: "Compliant digital member experience and encrypted insurance data processing.",
    href: "/werk/vvaa",
    accentColor: "#f59e0b",
  },
];

export interface CoverflowGalleryProps {
  projects?: CoverflowProject[];
  className?: string;
  initialIndex?: number;
  autoScrollIntervalMs?: number;
}

export function CoverflowGallery({
  projects = COVERFLOW_PROJECTS,
  className = "",
  initialIndex = 3, // Starts with image #4 (0-indexed 3: "04 / 07")
  autoScrollIntervalMs = 2000, // Exactly 2 seconds auto-scroll timing
}: CoverflowGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progressKey, setProgressKey] = useState<number>(0);

  const motionEnv = useMotionEnvironment();
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef<boolean>(false);

  const total = projects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
    setProgressKey((k) => k + 1);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
    setProgressKey((k) => k + 1);
  }, [total]);

  const handleSelectIndex = useCallback((index: number) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1);
  }, []);

  // Automatic scrolling timer running strictly every 2 seconds
  useEffect(() => {
    if (!isPlaying || motionEnv.prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, autoScrollIntervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, motionEnv.prefersReducedMotion, autoScrollIntervalMs, handleNext, progressKey]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Mouse wheel manual scrolling effect with debounce
  const handleWheel = (e: React.WheelEvent) => {
    if (wheelLockRef.current) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 28) {
      wheelLockRef.current = true;
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    }
  };

  const activeProject = projects[activeIndex];

  // Dynamic spring curve optimized for 2s cycle transitions
  const springTransition = motionEnv.prefersReducedMotion
    ? { duration: 0.1 }
    : {
        type: "spring" as const,
        stiffness: 280,
        damping: 26,
        mass: 0.75,
      };

  return (
    <section
      id="coverflow-showcase"
      className={`relative w-full overflow-hidden bg-neutral-950 py-24 text-white select-none ${className}`}
      aria-label="Interactive 3D Coverflow Project Gallery"
      ref={containerRef}
      onWheel={handleWheel}
    >
      {/* Background Ambient Lighting & Specular Flare */}
      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-700 ease-out"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 30%, ${activeProject.accentColor}25 0%, rgba(10, 10, 15, 0.96) 75%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Engineered Systems in{" "}
            <span
              className="bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, #ffffff 30%, ${activeProject.accentColor} 100%)`,
              }}
            >
              Motion
            </span>
          </h2>

          {/* Autoplay 2-Second Timer Progress Bar */}
          {isPlaying && !motionEnv.prefersReducedMotion && (
            <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                key={progressKey}
                className="h-full rounded-full"
                style={{ backgroundColor: activeProject.accentColor }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: autoScrollIntervalMs / 1000,
                  ease: "linear",
                }}
              />
            </div>
          )}
        </div>

        {/* 3D Coverflow Stage - Clean direct-click architecture (no drag-and-hold overlay) */}
        <div
          className="relative mx-auto flex h-[500px] w-full max-w-5xl items-center justify-center sm:h-[580px]"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cards List with Direct Click-to-Scroll */}
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);

            // Responsive spacing
            const cardSpacing = 190;
            const translateX = offset * cardSpacing;

            // Inward 3D Rotation for classic Coverflow effect
            const rotateY =
              offset < 0
                ? motionEnv.prefersReducedMotion
                  ? 0
                  : 42
                : offset > 0
                  ? motionEnv.prefersReducedMotion
                    ? 0
                    : -42
                  : 0;

            // Depth displacement in Z space
            const translateZ =
              offset === 0
                ? 60
                : motionEnv.prefersReducedMotion
                  ? 0
                  : -absOffset * 125;

            // Scaling
            const scale =
              offset === 0
                ? 1
                : Math.max(0.74, 1 - absOffset * 0.12);

            // Opacity & Stacking
            const isVisible = absOffset <= 3;
            const opacity = isVisible ? Math.max(0.2, 1 - absOffset * 0.26) : 0;
            const zIndex = total - absOffset;
            const isCurrent = offset === 0;

            return (
              <motion.div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-roledescription="slide"
                aria-label={`${project.title} (${index + 1} of ${total}). Click to scroll.`}
                aria-current={isCurrent ? "true" : undefined}
                className="absolute w-[280px] sm:w-[340px] h-[390px] sm:h-[470px] select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-3xl"
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={springTransition}
                onClick={() => {
                  handleSelectIndex(index);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectIndex(index);
                  }
                }}
              >
                {/* Main Card Surface */}
                <div
                  className={`group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isCurrent
                      ? "border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_25px_60px_-15px_rgba(0,0,0,0.8),0_12px_24px_-8px_rgba(0,0,0,0.6)]"
                      : "border-white/10 hover:border-white/35 hover:scale-[1.02] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
                  }`}
                  style={{
                    backgroundColor: "#111118",
                  }}
                >
                  {/* Clean Typography Background Surface (Zero Images) */}
                  <div className="absolute inset-0 overflow-hidden bg-neutral-900/90">
                    {/* Architectural Large Monospace Watermark Number */}
                    <div className="absolute right-4 top-1/4 select-none font-mono text-8xl font-black text-white/[0.04] pointer-events-none">
                      0{index + 1}
                    </div>

                    {/* Multi-layered Optical Depth & Gradient Ambient Lighting */}
                    <div
                      className="absolute inset-0 opacity-20 mix-blend-screen transition-opacity duration-500 group-hover:opacity-35 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 75% 25%, ${project.accentColor}, transparent 65%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />
                  </div>

                  {/* Top Bar: Category Pill & Counter */}
                  <div className="relative z-10 flex items-center justify-between p-5 pointer-events-none">
                    <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase text-neutral-200 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      0{index + 1} <span className="opacity-40">/</span> 0{total}
                    </span>
                  </div>

                  {/* Bottom Bar: Content & CTA Link */}
                  <div className="relative z-10 flex flex-col gap-3 p-6 pt-0">
                    <div className="flex items-center gap-2 pointer-events-none">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: project.accentColor }}
                      />
                      <span className="text-[11px] font-medium tracking-wide uppercase text-neutral-400">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl pointer-events-none">
                      {project.title}
                    </h3>

                    <p className="line-clamp-2 text-xs text-neutral-300 leading-relaxed pointer-events-none">
                      {project.description}
                    </p>

                    {/* Action link */}
                    <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        to={project.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm"
                        onClick={(e) => {
                          if (!isCurrent) {
                            e.preventDefault();
                            handleSelectIndex(index);
                          }
                        }}
                      >
                        <span>{isCurrent ? "Explore Architecture" : "Click to View"}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <span
                        className="h-1.5 w-8 rounded-full transition-all duration-300 pointer-events-none"
                        style={{
                          backgroundColor: isCurrent ? project.accentColor : "rgba(255,255,255,0.2)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* 3D Ambient Floor Glow Reflection (Zero Images) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 right-4 top-[102%] h-[60px] rounded-full blur-xl opacity-30 transition-colors duration-500"
                  style={{
                    background: isCurrent ? project.accentColor : "transparent",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Controls: Autoplay Toggle, Prev/Next Arrows & Interactive Pagination Pills */}
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between">
          {/* Active Status & Autoplay Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-neutral-300 backdrop-blur-md transition-all hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={isPlaying ? "Pause automatic scrolling" : "Resume automatic scrolling"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-amber-400" />
                  <span>Auto-scroll (2s) ON</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Auto-scroll PAUSED</span>
                </>
              )}
            </button>
          </div>

          {/* Pagination Indicators (Clickable scrolling effect) */}
          <div
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md"
            role="tablist"
            aria-label="Coverflow pagination"
          >
            {projects.map((proj, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
                  onClick={() => handleSelectIndex(idx)}
                  className="relative flex h-8 items-center justify-center rounded-full px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {isActive && (
                    <motion.div
                      layoutId="coverflow-active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: proj.accentColor,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 font-mono transition-colors ${
                      isActive ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons (Manual clicking scrolling effect) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/15 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoverflowGallery;
