"use client";
import { motion, type Variants } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
import { hero } from "@/content/content";
import {
  heroLayout,
  heroSpacing,
  gradientSlateTeal,
  heroDarkBackground,
  pageContainer,
  contentContainer,
  textCenter,
  badgeBase,
  tealBadge,
  centeredFlex,
  eyebrow,
  heroTitle,
  heroSubtitle,
  heroDescription,
  ctaGroup,
  buttonBase,
  buttonPrimary,
  buttonSecondary,
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
      className={`${heroLayout}${heroSpacing}  ${gradientSlateTeal} ${heroDarkBackground}`}
    >
      <div className={pageContainer}>
        <motion.div
          className={`${contentContainer} ${textCenter}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero content */}
          <motion.div
            variants={itemVariants}
            className={`${centeredFlex} mb-6`}
          >
            <div className={`${badgeBase} ${tealBadge}`}>
              <FaBriefcase className="h-3.5 w-3.5" />
              {hero.tealBadge}
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className={eyebrow}>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 variants={itemVariants} className={heroTitle}>
            {hero.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className={heroSubtitle}>
            {hero.title}
          </motion.h2>

          <motion.p variants={itemVariants} className={heroDescription}>
            {hero.description}
          </motion.p>

          <motion.div variants={itemVariants} className={ctaGroup}>
            {/* Primary CTA */}
            <a href="#projects" className={`${buttonBase} ${buttonPrimary}`}>
              {hero.primaryButton}
            </a>

            {/* Secondary CTA */}
            <a href="#contact" className={`${buttonBase} ${buttonSecondary}`}>
              {hero.secondaryButton}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
