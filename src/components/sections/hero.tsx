import Image from "next/image";
import React from "react";
import Overflow from "../overflow";
import { ParallaxReveal } from "@/app/providers/reveal";

const Hero = () => {
  const phrase =
    "We build custom digital solutions that combine elegant design with powerful performance, helping your business thrive online.";
  return (
    <div className="max-w-7xl mx-auto text-white w-full p-4">
      <div className="flex gap-4 my-8 items-center">
        <div className="w-10 h-0.5 bg-primary" />
        <h4>Era Defining Website Development</h4>
      </div>
      <div>
        <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl capitalize">
          Where Innovation meets
        </h1>
        <h1
          className="font-medium text-5xl md:text-6xl lg:text-8xl capitalize text-primary"
          suppressHydrationWarning // Add this to suppress the specific warning
          {...(typeof window !== 'undefined' ? {
            'data-aos': "zoom-in-left",
            'data-aos-duration': 1800
          } : {})}
        >
          Code & Creativity
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="flex gap-y-2 flex-wrap">
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Full-Stack Development
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Custom Web Applications
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            API Integration & Development
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Database Design & Management
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Performance Optimization
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            CMS & Admin Dashboards
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            SEO-Optimized Websites
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            E-commerce Solutions
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Firebase & Cloud Functions
          </span>
        </div>
        <div className="max-[500px]:hidden">
          <ParallaxReveal paragraph={phrase} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-9 max-[500px]:hidden"> {/* Added hiding class */}
          <Image
            src="/logofinal.svg"
            alt="HERO-IMAGE"
            width={600}
            height={320}
            className="w-full h-80 rounded-xl object-cover filter-none !filter-none"
          />
        </div>
        <div className="bg-primary/50 p-4 capitalize flex flex-col gap-8 justify-between items-center rounded-xl md:col-span-3">
          <Image
            src="/qrcode.png"
            alt="herobarcode"
            width={300}
            height={300}
            className="filter-none !filter-none animate-pulse mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
