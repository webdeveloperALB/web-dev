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
    title: "Full-Stack Web Development",
    content:
      "We build powerful, scalable full-stack apps that drive results.",
    skills: [
      "React.js / Next.js",
      "Node.js / Express.js",
      "MongoDB / MySQL",
      "REST APIs / GraphQL",
    ],
  },
  {
    title: "Custom Web Applications",
    content:
      "From concept to launch, we craft custom solutions that solve real problems",
    skills: [
      "Authentication Systems",
      "Admin Dashboards",
      "Real-time Features",
      "Role-based Access Control",
    ],
  },
  {
    title: "UI / UX Design",
    content:
      "Beautiful, intuitive designs that users love and remember.",
    skills: [
      "Wireframing & Prototyping",
      "User Journeys",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    title: "Database Architecture",
    content:
      "Smart, scalable databases built for speed, growth, and security",
    skills: [
      "Relational & NoSQL Databases",
      "Database Design & Indexing",
      "Data Modeling",
      "Optimization & Scaling",
    ],
  },
  {
    title: "API Development & Integration",
    content:
      "We optimize, secure, and launch apps built to perform at scale",
    skills: [
      "RESTful API Design",
      "Third-party Integrations",
      "Payment Gateways",
      "OAuth / JWT Authentication",
    ],
  },
  {
    title: "Performance & Deployment",
    content:
      "We ensure your application is fast, secure, and production-ready. From code optimization to cloud deployment, we cover all technical aspects post-development.",
    skills: [
      "CI/CD Pipelines",
      "VPS & Cloud Deployment",
      "Performance Tuning",
      "Security Best Practices",
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
              className="bg-white accord border border-black text-black rounded-3xl text-base md:text-m px-4 py-2"
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
              className="bg-white accord border border-black text-black rounded-3xl text-base md:text-lg px-4 py-2 font-medium"
              key={idx}
            >
              {skill}
            </div>
          ))}
        </div>{" "}
        <br />
        <p className="section-solutions__item-text text-2xl md:text-xl font-normal">{text}</p>
      </div>
    </li>
  );
}

export default function SectionSolutionsList() {
  return (
    <div className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto p-4 w-full ">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Services</h4>
        </div>

        <div className="grid grid-cols-1 g md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Discover Our <br />
              Digital Solutions
            </h4>
          </div>
          <div className="border-l-2 px-4 border-l-primary h-fit">
            <ParallaxReveal
              paragraph={
                "We offer a comprehensive suite of services designed to elevate your online presence and drive your business growth."
              }
            />
          </div>
        </div>
        <ul className="section-solutions__list mt-8 pr-4 overflow-x-hidden">
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