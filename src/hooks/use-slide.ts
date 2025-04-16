'use client';

import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useProjectSlider(element: any) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Set initial value
      setIsMobile(window.innerWidth < 768);
      
      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  // Optimize spring for mobile devices with lighter physics
  const springConfig = isMobile 
    ? { damping: 60, stiffness: 300, mass: 0.1 } 
    : { damping: 30, stiffness: 200, mass: 0.5 };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Reduce transform distances on mobile for better performance
  const range = isMobile ? 100 : 250;
  
  const transformX1 = useTransform(smoothProgress, [0, 1], [0, -range]);
  const transformX2 = useTransform(smoothProgress, [0, 1], [-range, 0]);

  // Use simpler animation for height on mobile
  const transformY = useTransform(
    smoothProgress,
    [0, 0.9],
    isMobile ? ['50vh', '0vh'] : ['100vh', '0vh'],
    { clamp: true }
  );

  return { transformX1, transformX2, transformY };
}