"use client";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "./experienceData";
import { motion, useReducedMotion, type Variants } from "motion/react";

import {
  bodyTextGray,
  gray50BgGray900,
  pageContainer,
  section,
  sectionAccent,
  sectionHeader,
  sectionSpacing,
  sectionTitle,
} from "@/lib/styles";
import { experienceContent } from "@/content/content";

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={`${section} ${sectionSpacing} ${gray50BgGray900}`}
    >
      <div className={pageContainer}>
        {/* Section Header */}
        <motion.div
          className={sectionHeader}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="experience-heading" className={sectionTitle}>
            {experienceContent.title}
          </h2>
          <div className={sectionAccent} />

          <p className={`mt-6 max-w-2xl text-lg leading-8 ${bodyTextGray}`}>
            {experienceContent.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          variants={timelineVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              shouldReduceMotion={shouldReduceMotion}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
