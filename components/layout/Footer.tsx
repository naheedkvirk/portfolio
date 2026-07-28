"use client";

import { motion, useReducedMotion } from "motion/react";
import { footer } from "@/content/content";
import {
  footerBg,
  pageContainer,
  sectionAccent,
  footerContainer,
  footerContent,
  footerTitle,
  footerDescription,
  footerMeta,
  footerBuiltWith,
} from "@/lib/styles";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion ?? false;

  return (
    <footer className={footerBg}>
      <div className={`${pageContainer} ${footerContainer}`}>
        <motion.div
          className={footerContent}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2 className={footerTitle}>{footer.title}</h2>

          <div className="mx-auto mt-5 w-16">
            <div className={sectionAccent} />
          </div>

          <p className={footerDescription}>{footer.description}</p>

          <p className={footerMeta}>{footer.copyright}</p>

          <p className={footerBuiltWith}>{footer.builtWith}</p>
        </motion.div>
      </div>
    </footer>
  );
}
