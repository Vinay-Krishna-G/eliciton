import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export function initScrollSystem() {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Disable ScrollTrigger animations globally or run them as instant fades
    ScrollTrigger.config({ limitCallbacks: true });
    return null;
  }

  // Initialize Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing curve: ease-out-expo
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  // Connect Lenis scroll events to GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Synchronize GSAP ticker with Lenis raf loop
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable GSAP's lag smoothing to keep scrolling synchronized
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export { gsap, ScrollTrigger };
