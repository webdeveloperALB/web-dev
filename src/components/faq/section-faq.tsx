import "./section-faq.scss";
import Image from "next/image";
import SectionFaqList from "./section-faq-list";

export default function SectionFaq() {
  return (
    <section className="section-faq">
      <div className="container section-faq__container">
        <div className="section-faq__heading-wrapper">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-10 h-0.5 bg-primary" />
            <small className="section-faq__top-caption text-2xl">FAQ</small>
          </div>
        </div>
        <SectionFaqList />
        <div className="section-faq__image-wrapper">
          <Image
            src="/faq.jpeg"
            alt="Frequently asked questions about web development services"
            fill={true}
            sizes="30vw"
          />
        </div>
      </div>
    </section>
  );
}