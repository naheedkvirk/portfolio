"use client";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "./experienceData";
import { motion, useReducedMotion, type Variants } from "motion/react";

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
      className="scroll-mt-24 bg-gray-50 py-12 sm:py-16 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="experience-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Experience
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Over 15 years of experience designing and developing accessible,
            responsive, and scalable web applications across healthcare,
            finance, automotive, manufacturing, and digital publishing.
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
