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
      {/* Keep only one H1 for the entire page */}
      <h1 className="text-4xl font-bold text-center my-8 lg:my-12">
        Expert Full-Stack Web Development Services
      </h1>
      
      <Hero />
      
      {/* Remove section headings from the page component */}
      <section id="services" className="py-12">
        <TextSLider1 />
        <SectionSolutionsList />
      </section>
      
      <section id="about" className="py-12">
        <Abouthome />
      </section>
      
      <section id="offers" className="py-12">
        <SectionOffer />
      </section>
      
      <TextSLider1 />
      
      <section id="quote" className="py-12">
        <SectionQuote />
      </section>
      
      <section id="testimonials" className="py-12">
        <Review />
      </section>
      
      <TextSLider1 />
      
      <section id="faq" className="py-12">
        <SectionFaq />
      </section>
      
      <section id="contact" className="py-12">
        <Contact />
      </section>
    </div>
  );
}