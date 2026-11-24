import { useEffect, useState } from "react";

export interface MotionEnvironment {
  prefersReducedMotion: boolean;
  isLowEndHardware: boolean;
  targetFPS: number;
}

/**
 * Detects system capabilities to gracefully scale or disable kinetic animations.
 * Complies with Antigravity Standard Rule 9.2.
 */
export function useMotionEnvironment(): MotionEnvironment {
  const [env, setEnv] = useState<MotionEnvironment>({
    prefersReducedMotion: false,
    isLowEndHardware: false,
    targetFPS: 60,
  });

  useEffect(() => {
    // 1. Check Accessibility Preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduced = mediaQuery.matches;

    // 2. Hardware Concurrency & Memory Heuristics
    const logicalProcessors = window.navigator.hardwareConcurrency || 4;
    const deviceMemory =
      (window.navigator as unknown as { deviceMemory?: number }).deviceMemory || 4;
    const isLowEnd = logicalProcessors <= 4 || deviceMemory <= 4;

    // 3. Refresh Rate & Data Saver Detection
    let targetFPS = 60;
    if (
      "connection" in navigator &&
      (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData
    ) {
      targetFPS = 30;
    } else if (!isLowEnd && !prefersReduced) {
      const screenAny = window.screen as unknown as { refreshRate?: number };
      targetFPS = screenAny?.refreshRate ? screenAny.refreshRate : 120;
    }

    setEnv({
      prefersReducedMotion: prefersReduced,
      isLowEndHardware: isLowEnd,
      targetFPS: prefersReduced ? 0 : targetFPS,
    });

    const handleChange = (e: MediaQueryListEvent) => {
      setEnv((prev) => ({
        ...prev,
        prefersReducedMotion: e.matches,
        targetFPS: e.matches ? 0 : prev.targetFPS,
      }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return env;
}

