import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
}

let globalLenisInstance: Lenis | null = null;

export const getLenis = (): Lenis | null => globalLenisInstance;

export const scrollToElement = (
  target: string | HTMLElement,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
    onComplete?: () => void;
  }
) => {
  if (globalLenisInstance) {
    globalLenisInstance.scrollTo(target, {
      offset: options?.offset ?? -30,
      duration: options?.duration ?? 1.2,
      immediate: options?.immediate ?? false,
      onComplete: options?.onComplete,
    });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with cinematic inertial easing
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: options.smoothWheel ?? true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    globalLenisInstance = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Sync scroll event listeners if needed
    const handleScroll = () => {
      // Lenis emits scroll events
    };
    lenis.on('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      if (globalLenisInstance === lenis) {
        globalLenisInstance = null;
      }
    };
  }, [options.duration, options.easing, options.smoothWheel]);

  return {
    lenis: lenisRef.current,
    scrollTo: scrollToElement,
  };
};
