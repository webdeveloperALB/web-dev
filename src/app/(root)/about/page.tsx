import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Abouthome from "./components/heroabout";
import TextSLider1 from "@/components/textslide";
import SectionOffer from "@/components/offers/offers";
import { Project } from "@/components/project/Thumnail";
import { Metadata } from "next";

// Add metadata to improve SEO for the About page
export const metadata: Metadata = {
  title: "About Our Full-Stack Development Services",
  description: "Learn about our expertise in custom web applications, modern UI/UX design, and reliable back-end development. We're your full-stack partner for digital success.",
  keywords: [
    "full-stack development",
    "web development agency",
    "custom web applications",
    "UI/UX design",
    "back-end development",
    "API integration"
  ],
  alternates: {
    canonical: "https://www.webdev-al.com/about"
  }
};

const AboutPage = () => {
  return (
    <div>
      <div className="h-60 flex justify-center items-center">
        <Breadcrumb aria-label="Breadcrumb navigation">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-lg" aria-label="Go to Home page">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/about" className="text-primary text-xl" aria-label="Current page: About Us">
                About Us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Main content section with semantic heading structure */}
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="sr-only">About Our Full-Stack Development Agency</h1>
        <Abouthome />
      </section>
      
      <TextSLider1 />
      
      <TextSLider1 />
      
      <section aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Our Full-Stack Development Services</h2>
        <SectionOffer />
      </section>
    </div>
  );
};

export default AboutPage;