import { ParallaxReveal } from "@/app/providers/reveal";
import Image from "next/image";
import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import Link from "next/link";

const Abouthome = () => {
  const phrase =
    "We specialize in building fast, scalable, and modern web applications. From responsive front-end interfaces to secure and efficient back-end systems, we offer end-to-end full-stack development tailored to your business needs. Whether you're launching a startup or upgrading your existing digital presence, we're here to turn your vision into a powerful web experience.";

  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto p-4 flex justify-center items-center flex-col min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src="/aboutus2.jpg"
              alt="Our full-stack development team working on web projects"
              width={500}
              height={300}
              className="w-full max-w-4xl h-80 md:h-[500px] object-cover rounded-3xl"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-base font-medium">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
              Your{" "}
              <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
                full-stack partner
              </span>
              <br />
              for digital success
            </h2>

            <div>
              <ParallaxReveal paragraph={phrase} />
            </div>

            <div className="space-y-2">
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>Custom Web Applications</p>
              </div>
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>Modern UI/UX & Front-End</p>
              </div>
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>Reliable Back-End & APIs</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <Link 
                href="/about" 
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
                aria-label="Read more about our full-stack development services"
              >
                Discover Our Full-Stack Expertise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;