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
    <section id="home" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          className="max-w-3exl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero content will be added in Task 5 */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-wide text-teal-400 sm:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Naheed Virk,
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-3xl font-semibold text-gray-500 sm:text-4xl lg:text-5xl dark:text-gray-400"
          >
            I build accessible, responsive web experiences.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300"
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
              className="rounded-md bg-black px-6 py-3 text-white transition-colors 
              duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-md border border-black px-6 py-3 text-black transition-colors duration-300 
              hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 
              focus:ring-offset-2 dark:border-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
