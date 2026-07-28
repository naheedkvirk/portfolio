"use client";
import { motion, useReducedMotion } from "motion/react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { contact } from "@/content/content";
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
            {contact.title}
          </h2>

          <div className={sectionAccent} />

          <p className={contactText}>{contact.description}</p>

          {/* Contact Links: Email, LinkedIn, Github */}
          <div className={contactLinkGroup}>
            <a
              href={contact.buttons.email.href}
              className={`${buttonBase} ${buttonPrimary}`}
            >
              <FaEnvelope className="mr-2 h-4 w-4" />
              {contact.buttons.email.label}
            </a>

            {/* LinkedIn */}
            <a
              href={contact.buttons.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Naheed Virk LinkedIn profile"
              className={`${buttonBase} ${buttonSecondary}`}
            >
              <FaLinkedin className="mr-2 h-4 w-4" />
              {contact.buttons.linkedin.label}
            </a>

            {/* Github */}
            <a
              href={contact.buttons.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Naheed Virk GitHub profile"
              className={`${buttonBase} ${buttonSecondary}`}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              {contact.buttons.github.label}
            </a>
          </div>
          <p className={`mt-6 ${contactMeta}`}>{contact.footer.responseTime}</p>
          <p className={`mt-2 ${contactMeta}`}>{contact.footer.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
