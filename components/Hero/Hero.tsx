"use client";
import { motion, type Variants } from "motion/react";
import { FaBriefcase } from "react-icons/fa";
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
              15+ Years Experience
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className={eyebrow}>
            Hi, my name is
          </motion.p>

          <motion.h1 variants={itemVariants} className={heroTitle}>
            Naheed Virk
          </motion.h1>

          <motion.h2 variants={itemVariants} className={heroSubtitle}>
            Senior UI/UX Front-End Developer
          </motion.h2>

          <motion.p variants={itemVariants} className={heroDescription}>
            I design and build accessible, scalable, and high-performance
            enterprise web applications using React, Next.js, TypeScript, and
            modern front-end technologies. With over 15 years of experience, I
            specialize in design systems, reusable component libraries, and
            creating intuitive user experiences across enterprise platforms.
          </motion.p>

          <motion.div variants={itemVariants} className={ctaGroup}>
            {/* Primary CTA */}
            <a href="#projects" className={`${buttonBase} ${buttonPrimary}`}>
              View My Work
            </a>

            {/* Secondary CTA */}
            <a href="#contact" className={`${buttonBase} ${buttonSecondary}`}>
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
