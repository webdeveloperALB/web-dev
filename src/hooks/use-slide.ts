'use client';

import { useScroll, useTransform, useSpring } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useProjectSlider(element: any) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
    smooth: 1.5, // Increased smoothness for better mobile performance
  });

  // Use spring physics for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    mass: 0.5,
  });

  // Optimize transforms with rounded values and limited precision
  const transformX1 = useTransform(smoothProgress, [0, 1], [0, -250], {
    clamp: true,
  });
  
  const transformX2 = useTransform(smoothProgress, [0, 1], [-250, 0], {
    clamp: true,
  });

  // Use percentage-based values for better responsive performance
  const transformY = useTransform(smoothProgress, [0, 0.9], ['100%', '0%'], {
    clamp: false,
  });

  return { transformX1, transformX2, transformY };
}