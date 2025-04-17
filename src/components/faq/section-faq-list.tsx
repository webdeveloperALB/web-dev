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
    heading: "Can you transform my outdated website into a high-performing web app?",
    text: "Absolutely. We specialize in revamping legacy websites into fast, modern web applications using the latest full-stack technologies for better UX, SEO, and speed.",
  },
  {
    heading: "Do you create tailored dashboards or internal tools for businesses?",
    text: "Yes. We build custom admin panels, analytics dashboards, and automation tools to streamline your business operations and decision-making.",
  },
  {
    heading: "Can you optimize my site for conversions and user behavior?",
    text: "Definitely. We combine smart UI/UX, performance tuning, and behavioral analytics to increase conversions and keep your users engaged.",
  },
  {
    heading: "Can you build systems that connect with multiple services (APIs, CRMs, automation)?",
    text: "Yes. We design systems that integrate seamlessly with third-party APIs, CRMs, payment platforms, and even custom automations for your workflow.",
  },
  {
    heading: "How do you ensure the long-term scalability of the projects you build?",
    text: "We use modular architecture, clean code, and scalable databases — so your app can grow without needing to rebuild everything from scratch.",
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