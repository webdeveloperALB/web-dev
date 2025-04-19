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

export default async function Home() {
  const projects = await fetchProjects();
  
  return (
    <div className="home-container">
      <h1 className="sr-only">Web Development - Professional Full-Stack Web Solutions</h1>
      
      <Hero />
      
      <section id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Our Services</h2>
        <TextSLider1 />
        <SectionSolutionsList />
      </section>
      
      <section id="about" aria-labelledby="about-heading">
        <h2 id="about-heading" className="sr-only">About Us</h2>
        <Abouthome />
      </section>
      
      <section id="offers" aria-labelledby="offers-heading">
        <h2 id="offers-heading" className="sr-only">What We Offer</h2>
        <SectionOffer />
      </section>
      
      <TextSLider1 />
      
      <section id="quote" aria-labelledby="quote-heading">
        <h2 id="quote-heading" className="sr-only">Get a Quote</h2>
        <SectionQuote />
      </section>
      
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
        <Review />
      </section>
      
      <TextSLider1 />
      
      <section id="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
        <SectionFaq />
      </section>
      
      <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Us</h2>
        <Contact />
      </section>
    </div>
  );
}