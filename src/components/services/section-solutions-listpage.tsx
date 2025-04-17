"use client";

import { ParallaxReveal } from "@/app/providers/reveal";
import Icon_accordion from "../icons/icon-accordion";
import "./section-solutions.scss";
import { useState } from "react";

type ItemProps = {
  caption: string;
  heading: string;
  text: string;
  item: any;
};

const items = [
  {
    title: "Full Stack Development",
    content:
      "Our full-stack development services offer comprehensive solutions for building dynamic websites and applications. We integrate the latest technologies to deliver scalable, secure, and user-friendly platforms that drive business success.",
    skills: [
      "ReactJS Development",
      "Node.js Development",
      "Express.js Development",
      "MongoDB & MySQL",
      "API Development",
    ],
  },
  {
    title: "E-Commerce Development",
    content:
      "We specialize in creating powerful e-commerce platforms tailored to your business needs. Our solutions are designed for seamless transactions, secure payment integrations, and a user-friendly shopping experience.",
    skills: [
      "Shopify Development",
      "WooCommerce Integration",
      "Custom E-commerce Solutions",
      "Payment Gateway Integration",
      "Product Management",
    ],
  },
  {
    title: "Web Design & User Experience",
    content:
      "Our web design services focus on creating visually appealing and functional websites. We prioritize user experience (UX) to ensure smooth navigation and design that enhances user satisfaction.",
    skills: [
      "Responsive Web Design",
      "UX/UI Design",
      "Prototyping",
      "Wireframing",
      "Interactive Design",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    content:
      "Our SEO and digital marketing strategies ensure that your website ranks high in search engines, driving organic traffic. We also create tailored marketing campaigns to boost online visibility and business growth.",
    skills: [
      "Search Engine Optimization",
      "PPC Advertising",
      "Content Marketing",
      "Social Media Campaigns",
      "Email Marketing",
    ],
  },
  {
    title: "API Integration & Development",
    content:
      "We provide seamless API integration and development, enabling your website or application to interact with third-party services, enhancing functionality and providing smoother user experiences.",
    skills: [
      "RESTful API Development",
      "GraphQL API Integration",
      "Payment APIs",
      "Social Media Integration",
      "Third-Party Service Integration",
    ],
  },
  {
    title: "Maintenance & Support",
    content:
      "Our team offers continuous website maintenance and support to ensure optimal performance. We handle everything from bug fixes to updates, so you can focus on growing your business.",
    skills: [
      "Bug Fixes & Troubleshooting",
      "Website Performance Optimization",
      "Security Updates & Patches",
      "Database Maintenance",
      "Backup & Recovery Solutions",
    ],
  },
];

function SectionSolutionsItem({ caption, heading, text, item }: ItemProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      onClick={() => setIsOpened((curr) => !curr)}
      className={
        isOpened
          ? "section-solutions__item active"
          : "section-solutions__item group"
      }
    >
      <small className="section-solutions__item-caption">{caption}</small>
      <div>
        <h3 className="section-solutions__item-heading">{heading}</h3>
        <br />
        <div className="hidden md:flex gap-4 flex-wrap mt-4 mx-auto w-full">
          {item.skills.map((skill: any, idx: number) => (
            <div
              className="bg-white accord border border-black text-black rounded-3xl text-xs md:text-sm px-4 py-2"
              key={idx}
            >
              {skill}
            </div>
          ))}
        </div>{" "}
      </div>
      <span className="section-solutions__item-button">
        <Icon_accordion type={isOpened ? "close" : "open"} />
      </span>
      <div className="section-solutions__item-spoiler">
        <div className="md:hidden flex gap-4 flex-wrap mt-4 mx-auto w-full">
          {item.skills.map((skill: any, idx: number) => (
            <div
              className="bg-white accord border border-black text-black rounded-3xl text-xs md:text-sm px-4 py-2"
              key={idx}
            >
              {skill}
            </div>
          ))}
        </div>{" "}
        <br />
        <p className="section-solutions__item-text">{text}</p>
      </div>
    </li>
  );
}

export default function SectionSolutionsList() {
  return (
    <div className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto p-4 w-full ">
        <div className="flex gap-4 items-center justify-center">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Services</h4>
        </div>

        <div className="flex justify-center flex-col items-center gap-4 mt-4">
          <div>
            <h4 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Discover Our <br />
              Web Development Solutions
            </h4>
          </div>
          <div className="border-l-2 px-4 border-l-primary h-fit">
            <ParallaxReveal
              paragraph={
                "At our agency, we specialize in full-stack web development, offering end-to-end services to build high-performing, secure, and scalable websites. From custom web apps to SEO-optimized content, our solutions are designed to elevate your business online."
              }
            />
          </div>
        </div>
        <ul className="section-solutions__list mt-8">
          {items.map((el, i) => (
            <SectionSolutionsItem
              key={i}
              caption={`0${i + 1}`}
              heading={el.title}
              text={el.content}
              item={el}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
