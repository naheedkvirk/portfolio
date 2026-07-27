"use client";
import { motion, useReducedMotion } from "motion/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  buttonBase,
  buttonPrimary,
  buttonSecondary,
  contactCard,
  contactLinkGroup,
  contactMeta,
  contactText,
  pageContainer,
  section,
  sectionSpacing,
  sectionTitle,
  sectionAccent,
  whiteBgGray950,
} from "@/lib/styles";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`${section} ${sectionSpacing} ${whiteBgGray950}`}
    >
      <div className={pageContainer}>
        {/* Section Header */}
        <motion.div
          className={contactCard}
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
          <h2 id="contact-heading" className={sectionTitle}>
            Get In Touch
          </h2>

          <div className={sectionAccent} />

          <p className={contactText}>
            I&apos;m currently open to Senior Front-End, UI Engineering, and
            Design System opportunities. Whether you&apos;re hiring, building a
            product, or just want to connect, I&apos;d love to hear from you.
          </p>

          {/* Contact Links: Email, LinkedIn, Github */}
          <div className={contactLinkGroup}>
            <a
              href="mailto:naheed.virk@gmail.com?subject=Portfolio Inquiry"
              className={`${buttonBase} ${buttonPrimary}`}
            >
              <FaEnvelope className="mr-2 h-4 w-4" />
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/naheed-virk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Naheed Virk LinkedIn profile"
              className={`${buttonBase} ${buttonSecondary}`}
            >
              <FaLinkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>

            {/* Github */}
            <a
              href="https://github.com/naheedkvirk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Naheed Virk GitHub profile"
              className={`${buttonBase} ${buttonSecondary}`}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </div>
          <p className={`mt-6 ${contactMeta}`}>
            I typically respond within 24–48 hours.
          </p>
          <p className={`mt-2 ${contactMeta}`}>
            Based in Michigan, USA • Open to remote and hybrid opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
