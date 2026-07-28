"use client";

import { motion, useReducedMotion } from "motion/react";
import { footer } from "@/content/content";
import { footerBg, pageContainer, sectionAccent } from "@/lib/styles";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion ?? false;

  return (
    <footer className={footerBg}>
      <div className={`${pageContainer} py-12 sm:py-16`}>
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {footer.title}
          </h2>

          <div className="mx-auto mt-6 w-16">
            <div className={sectionAccent} />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            {footer.description}
          </p>

          <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            {footer.copyright}
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {footer.builtWith}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
