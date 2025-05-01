"use client";

import { Mail, X, Phone, MapPin, ExternalLink } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-transparent to-gray-50/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto p-4 py-16 w-full">
        {/* Header Section with CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl flex items-center gap-3 transition-all">
            Let&apos;s{" "}
            <span className="font-medium text-3xl md:text-4xl lg:text-5xl text-primary relative group">
              Connect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            there
          </h2>
          <div className="w-full md:w-auto">
            <Link href={"/contact"} className="w-full md:w-fit block">
              <button className="button w-full md:w-auto hover:shadow-lg hover:shadow-primary/20 transition-all bg-primary focus:outline-none focus:ring-4 focus:ring-primary/50 rounded py-3 px-6 font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 bg-white/10 h-[1px] w-full" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-12">
          {/* Company Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex gap-2 text-lg items-center group">
              <TbHexagonLetterWFilled className="h-8 w-8 text-primary transition-transform group-hover:rotate-12 duration-300" /> 
              <span className="font-semibold">WebDevelopment</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              At WebDevelopment, we build fast, modern websites — full-stack solutions tailored to your goals from design to deployment.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Google">
                <FaGoogle className="w-5 h-5 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col lg:col-span-2 gap-4">
            <h3 className="text-primary font-medium text-xl pb-2 border-b border-primary/30">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-lg relative inline-block group" href={"/about"}>
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link className="text-lg relative inline-block group" href={"/services"}>
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link className="text-lg relative inline-block group" href={"/contact"}>
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:col-span-3 gap-4">
            <h3 className="text-primary font-medium text-xl pb-2 border-b border-primary/30">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <a href="tel:+355688172927" className="hover:text-primary transition-colors">+355 688 172 927</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <a href="tel:+355685692096" className="hover:text-primary transition-colors">+355 685 692 096</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-primary font-medium text-xl pb-2 border-b border-primary/30">
              Newsletter
            </h3>
            <p className="text-sm text-gray-300">Subscribe to receive updates on our latest services and offers.</p>
            <div className="mt-2 relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 bg-white/10 h-[1px] w-full" />

        {/* Copyright */}
        <div className="flex justify-between w-full flex-col md:flex-row gap-4 items-center px-4 py-3">
          <div>
            <p className="text-center md:text-left text-gray-400 text-sm">
              Copyright &copy; 2025{" "}
              <span className="text-primary font-semibold">Web Development.</span>
              All Rights Reserved.
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p>Crafted with passion by WebDevelopment team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;