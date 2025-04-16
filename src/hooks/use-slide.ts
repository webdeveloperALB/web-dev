'use client';

import { useScroll, useTransform, useSpring } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useProjectSlider(element: any) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
    // smooth: 1.5 (remove this as it's not a valid property)
  });

  // Use spring physics with mobile-friendly parameters
  const smoothProgress = useSpring(scrollYProgress, {
    damping: typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 30,
    stiffness: typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 200,
    mass: 0.5,
  });

  // Optimized transforms with mobile consideration
  const transformX1 = useTransform(smoothProgress, [0, 1], [0, -250], {
    clamp: true,
  });
  
  const transformX2 = useTransform(smoothProgress, [0, 1], [-250, 0], {
    clamp: true,
  });

  // Smoother percentage-based transform for mobile
  const transformY = useTransform(
    smoothProgress,
    [0, 0.9],
    ['100vh', '0vh'], // Use viewport units for better mobile behavior
    { clamp: true }
  );

  return { transformX1, transformX2, transformY };
}