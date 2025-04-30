"use client";

import { Mail, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa6";
import { TbHexagonLetterWFilled } from "react-icons/tb";

const Footer = () => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const emailOptionsRef = useRef<HTMLDivElement>(null);
  const email = "support@webdev-al.com";
  const subject = "Website Inquiry";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;

  // Close email options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emailOptionsRef.current && !emailOptionsRef.current.contains(event.target as Node)) {
        setShowEmailOptions(false);
      }
    };
    
    if (showEmailOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmailOptions]);

  return (
    <footer>
      <div className="max-w-7xl mx-auto p-4 py-16 w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
            Let&apos;s{" "}
            <span className="font-medium text-3xl md:text-4xl lg:text-5xl text-primary">
              Connect
            </span>{" "}
            there
          </h2>
          <div>
            <Link href={"/contact"} className="w-fit">
              <button className="button hover:animate-pulse transition-all bg-primary focus:outline-none focus:ring-4 focus:ring-primary/50 rounded">
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
              At WebDevelopment, we build fast, modern websites — full-stack solutions tailored to your goals from design to deployment.
            </p>
          </div>
          <div className="flex flex-col md:col-span-2 gap-3">
            <h3 className="text-primary font-medium text-2xl md:text-2xl">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-lg" href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="text-lg" href={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-lg" href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:col-span-2 gap-3">
            <h3 className="text-primary font-medium text-lg md:text-xl">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+355688172927">+355688172927</a>
              </li>
              <li>
                <a href="tel:+355685692096">+355685692096</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3"></div>
        </div>
        <div className="my-8 bg-white h-[1px] opacity-50 w-full" />
        <div className="flex justify-center w-full flex-col md:flex-row gap-2 text-center items-center px-4 py-3">
          <div>
            <p className="inline-flex flex-wrap justify-center gap-1 text-xl">
              Copyright &copy; 2025{" "}
              <span className="text-primary font-semibold">Web Development.</span>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
