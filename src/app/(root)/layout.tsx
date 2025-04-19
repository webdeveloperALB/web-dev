import AOS from "aos";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import "@/app/styles/globals.scss";
import "@/app/styles/button.css";
import Navbar from "@/components/common/nav-bar";
import Footer from "@/components/common/footer";
import Navigation from "@/components/navigation/navigation";
import SmoothScrolling from "@/utils/smooth-scrolling";
import Preloader from "@/components/preloader";
import TextSLider1 from "@/components/textslide";
import { BalancerProvider } from "../providers/provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Full-Stack Web Development",
    default: "Full-Stack Web Development", 
  },
  description:
    "Your trusted partner for Full-Stack Web Development services, specializing in custom solutions for businesses of all sizes. We offer front-end, back-end, and database development, tailored to meet your needs.",
  keywords: [
    "Kevin's Web Development",
    "full-stack web development",
    "custom web solutions",
    "Node.js development",
    "React development",
    "Express.js development",
    "MySQL database",
    "web development services",
    "front-end development",
    "back-end development",
    "full-stack development",
    "web applications",
    "e-commerce solutions",
    "API development",
    "UI/UX design",
    "responsive web design",
    "mobile-friendly websites",
    "website redesign",
    "business websites",
    "SEO-friendly web development",
    "digital solutions",
    "web design company",
    "professional web development",
    "cloud-based solutions",
    "JavaScript frameworks",
    "technical support for websites",
    "website maintenance",
    "web development consulting",
    "agile web development",
    "database management",
    "front-end and back-end integration",
    "online presence",
  ],
  metadataBase: new URL("https://www.webdev-al.com/"), // Replace with your business URL
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES", // Adding Spanish as an alternative language
    },
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  generator: "Next.js", // Use your web framework generator (e.g., Next.js, if applicable)
};


export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}

        <BalancerProvider>
          <SmoothScrolling>
            <Navigation />
            <main className="pt-24">{children}</main>
            <TextSLider1 />
            <Footer />
          </SmoothScrolling>
        </BalancerProvider>
      </body>
    </html>
  );
}
