'use client';
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { GiFastArrow } from "react-icons/gi";

import Project1 from "@/assets/images/autorental.jpg";
import Project4 from "@/assets/images/9Dots.svg";
import Project3 from "@/assets/images/acecut.jpg";
import Project2 from "@/assets/images/gohealth.jpg";

const projects = [
  {
    title: "Auto Rental Platform",
    category: "Full-Stack Web Application",
    image: Project1,
    externalUrl: "https://auto-rental-alpha.vercel.app/"
  },
  {
    title: "9Dots Agency Website",
    category: "Full-Stack Web Development",
    image: Project4,
    externalUrl: "https://www.9dotsagency.com/"
  },

  {
    title: "Ace Cut Barbershop Website",
    category: "Web Design & Booking System",
    image: Project3,
    externalUrl: "https://ace-cut.vercel.app/"
  },
  {
    title: "Go Health Albania Landing Page",
    category: "Web Design & Lead Generation",
    image: Project2,
    externalUrl: "https://lp.gohealthalbania.com/"
  }
];

const PortfolioShowcase = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = 3;
  const sectionRef = useRef<HTMLElement>(null);

  const handleShowMore = () => {
    const newState = !showAll;
    setShowAll(newState);

    if (!newState && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-lg font-semibold text-gray-600">
              Featured Work
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Creative Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Explore our latest projects that showcase innovation and excellence in digital solutions
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .slice(0, showAll ? projects.length : initialProjects)
            .map((project, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all
                          duration-300 animate-fade-in"
              >
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                  </div>


                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white">
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                    </div>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full bg-white text-primary hover:bg-gray-100 shadow-lg"
                    >
                      View Project
                    </Button>
                  </div>
                </a>
              </article>
            ))}
        </div>

        {/* Show More Button */}
        {projects.length > initialProjects && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleShowMore}
              className="group rounded-full bg-primary text-white hover:bg-primary-dark px-8 py-6 text-lg
                        transition-all duration-300 hover:scale-105"
            >
              {showAll ? "Show Less" : "Show More"}
              <GiFastArrow
                className={`ml-2 w-5 h-5 transition-transform ${showAll ? "rotate-180" : ""
                  } group-hover:animate-bounce`}
              />
            </Button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioShowcase;