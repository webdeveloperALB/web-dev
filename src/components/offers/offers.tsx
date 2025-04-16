"use client";
import "./section-innovation.scss";
import Icon_quality from "../icons/icon-quality";

import {
  Icon_rocket,
  Icon_dev,
  Iconstragegy,
  Icondraw,
  Icontest,
} from "../icons/icon-marketplace";

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function SectionOffer() {
  return (
    <div className="bg-white text-white">
      <section id="innovations" className="section-innovation">
        <div className="max-w-7xl w-full mx-auto section-innovation__container">
          <div className="section-innovation__header">
            <div className="section-innovation__heading-wrapper">
              <div className="flex gap-4 items-center text-black">
                <div className="w-10 h-0.5 bg-primary" />
                <h4 className="uppercase">the way we do things</h4>
              </div>
              <h2 className="section-innovation__heading text-3xl md:text-4xl lg:text-5xl">
                Our Working Process
              </h2>
            </div>
            {/* <p className="section-innovation__description-text">
              Our house has been designed with attention to every detail, both
              technically and visually.
            </p> */}
          </div>
          {/* <motion.div className="card" variants={item}> */}

          <motion.ul
            className="section-innovation__grid-list"
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: false }}
          >
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_quality />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Project Discovery
                </h3>
                <p className="section-innovation__description-text">
                  We dive deep into understanding your brand, goals, and users. This helps us
                  create tailored digital strategies with maximum impact and clarity.
                </p>
              </motion.div>
            </li>

            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Iconstragegy />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Technical Planning
                </h3>
                <p className="section-innovation__description-text">
                  We architect scalable full-stack solutions by selecting the right tech stack,
                  defining database structures, and setting smart project milestones.
                </p>
              </motion.div>
            </li>

            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icondraw />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  UI/UX & Prototyping
                </h3>
                <p className="section-innovation__description-text">
                  We design intuitive interfaces that convert. From low-fidelity wireframes
                  to interactive prototypes, our goal is to deliver beauty with usability.
                </p>
              </motion.div>
            </li>

            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_dev />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Full-Stack Development
                </h3>
                <p className="section-innovation__description-text">
                  From powerful front-end experiences to secure, high-performing back-end
                  systems, we bring your project to life with modern development practices.
                </p>
              </motion.div>
            </li>

            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icontest />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  QA & Optimization
                </h3>
                <p className="section-innovation__description-text">
                  Every line of code is tested. We focus on performance, usability, and
                  security to ensure a bug-free, optimized product across all devices.
                </p>
              </motion.div>
            </li>

            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_rocket />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Deployment & Support
                </h3>
                <p className="section-innovation__description-text">
                  We deploy your site to secure cloud hosting platforms and offer
                  continuous maintenance, updates, and monitoring to help your product grow.
                </p>
              </motion.div>
            </li>
          </motion.ul>

        </div>
      </section>
    </div>
  );
}
