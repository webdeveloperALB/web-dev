import { Suspense } from "react";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import TextSLider1 from "@/components/textslide";
import SectionSolutionsList from "@/components/services/section-solutions-list";
import Abouthome from "@/components/abouthome";
import SectionOffer from "@/components/offers/offers";
import SectionQuote from "@/components/quote/section-quote";
import Review from "@/components/review/review";
import SectionFaq from "@/components/faq/section-faq";
import Contact from "@/components/contact/contact";

// Improved query with proper types
const query = groq`
  *[_type=="project"] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    categories[]->{name, slug},
    "mainImage": mainImage.asset->url,
    "authorName": author->name,
    "authorImage": author->image.asset->url
  } 
`;

// Optimized data fetching with proper error handling
const fetchProjects = async () => {
  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Enhanced metadata with improved SEO attributes including H1 keywords
export const metadata: Metadata = {
  title: "Innovative Code & Creative Full-Stack Development Services",
  description: "Expert web development combining innovation, clean code, and creativity for responsive, high-performance websites.",
  keywords: [
    "innovative web development",
    "creative coding solutions",
    "full-stack web development",
    "custom web applications",
    "responsive websites",
    "business web solutions",
    "UI/UX design",
    "API integration"
  ],
  alternates: {
    canonical: "https://www.webdev-al.com"
  }
};

export default async function Home() {
  const projects = await fetchProjects();
  return (
    <main>
      {/* Hero section with proper H1 */}
      <section id="hero" className="w-full">
        <Hero hasMainHeading={true} />
      </section>
      
      <section id="services" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>Our Innovative Services</h2>
        </div>
        <TextSLider1 />
        <SectionSolutionsList />
      </section>
      
      <section id="about" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>About Our Creative Approach</h2>
        </div>
        <Abouthome />
      </section>
      
      <section id="offers" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>What Our Code Can Do For You</h2>
        </div>
        <SectionOffer />
      </section>
      
      <TextSLider1 />
      
      <section id="quote" className="py-0">
        <div className="sr-only" aria-hidden="true">
          <h2>Innovation Through Client Words</h2>
        </div>
        <SectionQuote />
      </section>
      
      <section id="testimonials" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>Client Testimonials on Our Creative Solutions</h2>
        </div>
        <Review />
      </section>
      
      <TextSLider1 />
      
      <section id="faq" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>Frequently Asked Questions About Our Code</h2>
        </div>
        <SectionFaq />
      </section>
      
      <section id="contact" className="py-12">
        <div className="sr-only" aria-hidden="true">
          <h2>Contact Us for Innovative Solutions</h2>
        </div>
        <Contact />
      </section>
    </main>
  );
}