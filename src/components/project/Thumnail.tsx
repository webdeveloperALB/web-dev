"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectSlider } from "./sliderProject";
import { projectOptions } from "@/data/projectOptions";
import { useProjectSlider } from "@/hooks/use-slide";
import "./Thumnail.css";

export function Project() {
{/*const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } = useProjectSlider(containerRef);

  // Memoize project slides to prevent unnecessary re-renders
  const firstSlider = useMemo(() => 
    projectOptions.first.map(({ type, source }) => (
      <ProjectSlider key={`${type}-${source}`} type={type} source={source} />
    )),
    []
  );

  const secondSlider = useMemo(() => 
    projectOptions.second.map(({ type, source }) => (
      <ProjectSlider key={`${type}-${source}`} type={type} source={source} />
    )),
    []
  );

  return (
    <section ref={containerRef} className="relative z-10 mt-14 overflow-hidden">
      <div className="grid items-center">
        <div className="bg-background">
          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX1,
              translateZ: 0, // Force GPU acceleration
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className="mb-10 flex gap-10"
            style={{
              width: "120vw",
              x: transformX2,
              translateZ: 0, // Force GPU acceleration
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className="w-screen bg-background"
          style={{
            height: transformY,
            borderRadius: "0 0 50% 50%",
            translateZ: 0, // Force GPU acceleration
          }}
        />
      </div>
    </section>
  ); */}
}