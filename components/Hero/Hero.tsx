"use client";
import { motion, type Variants } from "motion/react";

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
      className="flex min-h-screen items-center bg-gradient-to-br from-white via-slate-50 to-teal-50 
      py-12 sm:py-16 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="max-w-3exl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero content will be added in Task 5 */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-wide sm:text-base text-teal-600 dark:text-teal-400"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100"
          >
            Naheed Virk,
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl text-slate-600 dark:text-slate-400"
          >
            I build accessible, responsive web experiences.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 sm:text-lg text-slate-600 dark:text-slate-300"
          >
            I&apos;m a Frontend UI Developer with 15+ years of experience
            building responsive, accessible, and scalable web applications. I
            specialize in React, Next.js, TypeScript, and modern design systems,
            creating intuitive user experiences with clean, maintainable code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-md bg-teal-600 px-6 py-3 text-white transition-all duration-300 
              hover:-translate-y-1 hover:bg-teal-700 hover:shadow-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
              dark:focus:ring-offset-slate-950 motion-reduce:transition-none 
              motion-reduce:hover:translate-y-0"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-gray-300
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal-600
                hover:text-teal-600
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:border-gray-700
                dark:text-gray-300
                dark:hover:border-teal-400
                dark:hover:text-teal-400
                dark:focus:ring-offset-gray-950
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
                "
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
