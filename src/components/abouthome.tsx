import { ParallaxReveal } from "@/app/providers/reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Abouthome = () => {
  const phrase =
    "We build powerful web solutions that drive growth and streamline your business online. Our mission is to craft high-performing websites and apps with modern design, clean code, and seamless user experience. From frontend to backend, we deliver scalable, secure, and fully custom solutions built to perform.";
  return (
    <div className="max-w-7xl mx-auto p-4 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="w-full">
          <Image
            src={"/aboutus.jpg"}
            alt="about"
            width={500}
            height={300}
            className="w-full max-w-5xl h-40 md:h-[400px] object-cover rounded-3xl"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
            We&apos;re{" "}
            <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
              a results-driven Full-Stack
            </span>
            <br />
            Development Team
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
              <p>Modern UI/UX Design</p>
            </div>
            <div className="flex gap-4 items-center capitalize">
              <TbRosetteDiscountCheckFilled
                size={30}
                className="text-primary"
              />
              <p>Reliable Back-End Infrastructure</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Link href={"/about"} className="w-fit">
              <button className="button bg-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouthome;