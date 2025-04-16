"use client";

import Icon_accordion from "../icons/icon-accordion";
import "./section-faq.scss";
import { useState } from "react";

type ItemProps = {
  heading: string;
  text: string;
};

function SectionFaqItem({ heading, text }: ItemProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      onClick={() => setIsOpened((curr) => !curr)}
      className={isOpened ? "section-faq__item active" : "section-faq__item"}
    >
      <h3 className="section-faq__item-heading">{heading}</h3>
      <span className="section-faq__item-button">
        <Icon_accordion type={isOpened ? "close" : "open"} />
      </span>
      <div className="section-faq__spoiler-wrapper">
        <p className="section-faq__item-text">{text}</p>
      </div>
    </li>
  );
}

const LIST: ItemProps[] = [
  {
    heading: "What services do you offer as a full-stack agency?",
    text: "We provide end-to-end solutions including front-end and back-end development, UI/UX design, database architecture, API development, deployment, and ongoing support.",
  },
  {
    heading: "What technologies do you specialize in?",
    text: "Our stack includes React, Next.js, Node.js, Express, MySQL, MongoDB, Firebase, Tailwind CSS, and more — allowing us to deliver scalable, high-performance applications.",
  },
  {
    heading: "Can you build custom websites and platforms?",
    text: "Yes. We specialize in custom web applications tailored to your unique business goals — whether it’s an e-commerce store, booking system, SaaS, or portfolio website.",
  },
  {
    heading: "Do you offer maintenance and post-launch support?",
    text: "Absolutely. We provide reliable maintenance packages, bug fixes, updates, and performance optimization to keep your project running smoothly.",
  },
  {
    heading: "How long does a typical full-stack project take?",
    text: "Depending on the complexity, most projects are completed within 4 to 10 weeks. We always set clear timelines and communicate every step.",
  },
  {
    heading: "Can you improve or upgrade my existing website?",
    text: "Yes. We can audit, redesign, and refactor your current site for better speed, responsiveness, SEO, and user experience.",
  },
];


export default function SectionFaqList() {
  return (
    <ul className="section-faq__list bg-primary">
      {LIST.map((el, i) => (
        <SectionFaqItem key={i} heading={el.heading} text={el.text} />
      ))}
    </ul>
  );
}
