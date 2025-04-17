import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { TbHexagonLetterWFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto p-4 py-16 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-medium text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
            Let&apos;s{" "}
            <div className="font-medium text-3xl md:text-4xl lg:text-5xl text-primary">
              Connect
            </div>{" "}
            there
          </div>
          <div>
            <Link href={"/about"} className="w-fit">
              <button className="button hover:animate-pulse transition-all bg-primary">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="my-8 bg-white h-[1px] opacity-50 w-full" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex gap-2 text-lg items-center">
              <TbHexagonLetterWFilled className="h-8 w-8 text-primary" /> WebDevelopment
            </div>
            <p>
              At WebDevelopment, we don’t just build websites — we engineer complete digital solutions tailored to your goals. From design to deployment, we’re your full-stack partner for creating fast, modern, and scalable web experiences.
            </p>

            <div className="mt-4 flex gap-4 items-center">
              <span className="p-4 border border-white cursor-pointer rounded-md  hover:bg-primary hover:border-none text-white transition-all">
                <a href="mailto:kevikoltraka157@gmail.com">
                  <Mail color="white" className="text-white w-4 h-4" />
                </a>
              </span>
              <span className="p-4 border border-white cursor-pointer rounded-md hover:bg-primary hover:border-none  text-white bg- transition-all">
                <a
                  href="/"
                  target="_blank"
                >
                  <FaFacebook color="white" className="text-white" />
                </a>
              </span>
              <span className="p-4 border border-white cursor-pointer rounded-md  hover:bg-primary hover:border-none text-white bg- transition-all">
                <a href="https://www.instagram.com/webdevelopment.al?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram color="white" className="text-white" />
                </a>
              </span>

              <span className="p-4 border border-white cursor-pointer rounded-md hover:bg-primary hover:border-none  text-white transition-all">
                <a href="/">
                  <FaLinkedin color="white" className="text-white" />
                </a>
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-primary font-medium text-lg md:text-xl">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 ">
              <li>
                <Link className={cn()} href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className={cn()} href={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className={cn()} href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-primary font-medium text-lg md:text-xl">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 ">
              <li>
                <a href="tel:+2347035172208">+355688172927</a>
              </li>
              <li>
                <a href="tel:+2347035172208">+355685692096</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3"></div>
        </div>
        <div className="my-8 bg-white h-[1px] opacity-50 w-full" />
        <div className="flex justify-between w-full flex-col md:flex-row gap-4 items-center  cursor-wait ">
          <div>
            <p className="inline-flex gap-1">
              Copyright &copy; 2025{" "}
              <span className="text-primary">Web Development.</span>
              All Rights Reserved.
            </p>
          </div>
          <div>
            <p>Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
