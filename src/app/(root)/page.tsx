// page.tsx (Home page)
import { Suspense } from "react";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

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

export const metadata = {
  title: "Expert Full-Stack Web Development Services",
  description: "Custom React web applications and responsive websites built with modern technologies. Get a free consultation today!",
};

export default async function Home() {
  const projects = await fetchProjects();
  
  return (
    <>
      {/* Hero section with the ONLY H1 on the page */}
      <section id="hero" className="w-full">
        <Hero />
      </section>
      
      <section id="services" className="py-12" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <TextSLider1 />
        <SectionSolutionsList />
      </section>
      
      <section id="about" className="py-12" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-3xl font-bold text-center mb-8">About Us</h2>
        <Abouthome />
      </section>
      
      <section id="offers" className="py-12" aria-labelledby="offers-heading">
        <h2 id="offers-heading" className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <SectionOffer />
      </section>
      
      <TextSLider1 />
      
      <section id="quote" className="py-12" aria-labelledby="quote-heading">
        <h2 id="quote-heading" className="text-3xl font-bold text-center mb-8">Get a Quote</h2>
        <SectionQuote />
      </section>
      
      <section id="testimonials" className="py-12" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
        <Review />
      </section>
      
      <TextSLider1 />
      
      <section id="faq" className="py-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <SectionFaq />
      </section>
      
      <section id="contact" className="py-12" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <Contact />
      </section>
    </>
  );
}