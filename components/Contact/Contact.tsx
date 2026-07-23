"use client";
import { motion, useReducedMotion } from "motion/react";
//import { Mail } from "lucide-react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white 
      py-12 sm:py-16 dark:bg-gray-950 "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="
            max-w-3xl
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            p-8
            shadow-md
            transition-shadow
            duration-300
            hover:shadow-lg
            dark:border-gray-800
            dark:bg-gray-900
            sm:p-10
        "
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2
            id="contact-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Get In Touch
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-blue-500" />

          <p
            className="mt-6 
                max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            I&apos;m always interested in discussing new opportunities,
            interesting projects, and ways to create meaningful digital
            experiences.
          </p>

          {/* Contact Links - Email, LinkedIn, Github */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:naheed.virk@gmail.com"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                bg-teal-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-teal-700
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:focus:ring-offset-gray-950
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
                "
            >
              <FaEnvelope className="mr-2 h-4 w-4" />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/naheed-virk/"
              target="_blank"
              rel="noopener noreferrer"
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
              <FaLinkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>

            {/* Github */}
            <a
              href="https://github.com/naheedkvirk/"
              target="_blank"
              rel="noopener noreferrer"
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
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
