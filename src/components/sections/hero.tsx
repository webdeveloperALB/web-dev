import Image from "next/image";
import React from "react";
import Overflow from "../overflow";
import { ParallaxReveal } from "@/app/providers/reveal";

// Add the prop type definition
interface HeroProps {
  hasMainHeading?: boolean;
}

const Hero: React.FC<HeroProps> = ({ hasMainHeading = false }) => {
  const phrase =
    "We build custom digital solutions that combine elegant design with powerful performance, helping your business thrive online.";
  return (
    <div className="max-w-7xl mx-auto text-white w-full p-4">
      <div className="flex gap-4 my-8 items-center">
        <div className="w-10 h-0.5 bg-primary" />
        <h4>Era Defining Website Development</h4>
      </div>
      <div>
        {/* Conditional rendering based on hasMainHeading prop */}
        {hasMainHeading ? (
          <>
            <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl capitalize">
              Where Innovation meets
              <span className="font-medium text-5xl md:text-6xl lg:text-8xl capitalize text-primary block"
                suppressHydrationWarning
                {...(typeof window !== 'undefined' ? {
                  'data-aos': "zoom-in-left",
                  'data-aos-duration': 1800
                } : {})}
              >
                Code & Creativity
              </span>
            </h1>
          </>
        ) : (
          <>
            <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl capitalize">
              Where Innovation meets
            </h2>
            <h2
              className="font-medium text-5xl md:text-6xl lg:text-8xl capitalize text-primary"
              suppressHydrationWarning
              {...(typeof window !== 'undefined' ? {
                'data-aos': "zoom-in-left",
                'data-aos-duration': 1800
              } : {})}
            >
              Code & Creativity
            </h2>
          </>
        )}
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
            API & Database Integration
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            CMS & E-commerce Platforms
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            SEO & Performance Optimization
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
      </div>
    </div>
  );
};

export default Hero;