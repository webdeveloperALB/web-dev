"use client";

import { Mail, X, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { TbHexagonLetterWFilled } from "react-icons/tb";

const Footer = () => {
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [email, setEmail] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const emailOptionsRef = useRef<HTMLDivElement>(null);
  const supportEmail = "support@webdev-al.com";
  const subject = "Website Inquiry";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${supportEmail}&su=${encodeURIComponent(subject)}`;

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle the newsletter subscription
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-gray-50/5 backdrop-blur-sm border-t border-gray-800/30 overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-primary transform scale-110">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,234.7C672,235,768,213,864,181.3C960,149,1056,107,1152,80C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-primary transform scale-110 rotate-180">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,234.7C672,235,768,213,864,181.3C960,149,1056,107,1152,80C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto p-4 py-20 w-full relative z-10">
        {/* Header Section with CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 mb-16">
          <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl flex flex-wrap items-center gap-3 transition-all">
            Let&apos;s{" "}
            <span className="font-medium text-3xl md:text-4xl lg:text-5xl text-primary relative group">
              Connect
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            there
          </h2>
          <div className="w-full md:w-auto">
            <Link href="/contact" className="w-full md:w-fit block">
              <button
                className="button w-full md:w-auto bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg py-4 px-8 font-medium text-xl relative overflow-hidden group transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                </span>
                <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-left group-hover:scale-x-100 scale-x-0"></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="my-12 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 h-px w-16 bg-primary animate-pulse"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
          {/* Company Info */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative">
            <div className="flex gap-3 text-2xl items-center group">
              <TbHexagonLetterWFilled className="h-10 w-10 text-primary transition-transform group-hover:rotate-12 duration-300" />
              <span className="font-semibold">WebDevelopment</span>
            </div>
            <p className="text-2xl text-gray-300 leading-relaxed">
              At WebDevelopment, we build fast, modern websites — full-stack solutions tailored to your goals from design to deployment.
            </p>

            {/* Social Media Icons with enhanced hover effects */}
            <div className="flex gap-8 pt-6">
              <a href="#" className="group relative" aria-label="Facebook">
                <div className="p-3 rounded-full bg-gray-800/30 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <FaFacebook className="w-7 h-7 text-gray-300 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
                </div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Facebook</span>
              </a>
              <a href="https://www.instagram.com/webdevelopment.al?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="group relative" aria-label="Instagram">
                <div className="p-3 rounded-full bg-gray-800/30 group-hover:bg-pink-600/20 transition-colors duration-300">
                  <FaInstagram className="w-7 h-7 text-gray-300 group-hover:text-pink-600 transition-all duration-300 group-hover:scale-110" />
                </div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Instagram</span>
              </a>
              <a href="#" className="group relative" aria-label="LinkedIn">
                <div className="p-3 rounded-full bg-gray-800/30 group-hover:bg-blue-700/20 transition-colors duration-300">
                  <FaLinkedin className="w-7 h-7 text-gray-300 group-hover:text-blue-700 transition-all duration-300 group-hover:scale-110" />
                </div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col lg:col-span-2 gap-6">
            <h3 className="text-primary font-medium text-2xl pb-3 border-b border-primary/30 relative flex items-center">
              Navigation
              <span className="absolute bottom-0 left-0 h-0.5 w-16 bg-primary"></span>
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link className="text-xl md:text-2xl relative inline-block group" href="/about">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link className="text-xl md:text-2xl relative inline-block group" href="/services">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link className="text-xl md:text-2xl relative inline-block group" href="/contact">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/70 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:col-span-5 gap-6">
            <h3 className="text-primary font-medium text-2xl pb-3 border-b border-primary/30 relative flex items-center">
              Contact Us
              <span className="absolute bottom-0 left-0 h-0.5 w-16 bg-primary"></span>
            </h3>
            <ul className="flex flex-col gap-6">
              
              <li className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-gray-800/50 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform" />
                </div>
                <a href={`mailto:${supportEmail}`} className="text-gray-300 group-hover:text-primary transition-colors text-xl md:text-2xl">{supportEmail}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="my-12 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 h-px w-16 bg-primary animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Copyright with improved layout */}
        <div className="flex justify-between w-full flex-col md:flex-row gap-6 items-center py-6">
          <div>
            <p className="text-center md:text-left text-gray-400 text-xl">
              Copyright &copy; 2025{" "}
              <span className="text-primary font-semibold">Web Development.</span>
              All Rights Reserved.
            </p>
          </div>
          <div className="text-xl text-gray-400 flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p>Crafted with passion by WebDevelopment team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;