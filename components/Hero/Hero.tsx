"use client";
import { motion, type Variants } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
import {
  heroLayout,
  heroSpacing,
  gradientSlateTeal,
  heroBackground,
} from "@/lib/styles";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className={`${heroLayout}${heroSpacing}  ${gradientSlateTeal} ${heroBackground}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero content */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-teal-50
              px-4
              py-1.5
              text-sm
              font-medium
              text-teal-700
              dark:bg-teal-900/30
              dark:text-teal-300
            "
            >
              <FaBriefcase className="h-3.5 w-3.5" />
              15+ Years Experience
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-wide text-teal-600 sm:text-base dark:text-teal-400"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100"
          >
            Naheed Virk
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl text-slate-700 dark:text-slate-300"
          >
            Senior UI/UX Front-End Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 mx-auto max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
          >
            Senior UI/UX Front-End Engineer with 15+ years of experience
            building enterprise web applications, design systems, and accessible
            user interfaces using React, Angular, TypeScript, and modern
            frontend technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-white
                transition-all duration-300
                hover:-translate-y-1 hover:bg-teal-700 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                dark:focus:ring-offset-slate-950
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0"
            >
              View My Work
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3
                font-semibold text-slate-700
                transition-all duration-300
                hover:-translate-y-1 hover:border-teal-600 hover:text-teal-600 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                dark:border-slate-700 dark:text-slate-300
                dark:hover:border-teal-400 dark:hover:text-teal-400
                dark:focus:ring-offset-slate-950
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
