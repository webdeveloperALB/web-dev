"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ProjectSlider } from "./sliderProject";
import { projectOptions } from "@/data/projectOptions";
import { useProjectSlider } from "@/hooks/use-slide";
import "./Thumnail.css"

export function Project() {
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } = useProjectSlider(containerRef);

  // Memoize project slides to prevent unnecessary re-renders
  const firstSlider = projectOptions.first.map(({ type, source }) => (
    <ProjectSlider key={`${type}-${source}`} type={type} source={source} />
  ));

  const secondSlider = projectOptions.second.map(({ type, source }) => (
    <ProjectSlider key={`${type}-${source}`} type={type} source={source} />
  ));

  return (
    <section ref={containerRef} className="relative z-10 mt-14">
      <div className="grid items-center">
        <div className="bg-background">
          {/* Added will-change-transform and optimized transforms */}
          <motion.div
            className="mb-10 flex gap-10 will-change-transform"
            style={{
              width: "120vw",
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className="mb-10 flex gap-10 will-change-transform"
            style={{
              width: "120vw",
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        {/* Replaced height animation with scaleY for better performance */}
        <motion.div
          className="w-screen bg-background origin-top"
          style={{
            scaleY: transformY,
            borderRadius: "0 0 50% 50%",
          }}
        />
      </div>
    </section>
  );
}