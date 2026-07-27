// src/lib/styles.ts

// ===============================
// Layout
// ===============================
export const pageContainer = "mx-auto max-w-7xl px-6";
export const contentContainer = "mx-auto max-w-3xl";
export const textCenter = "text-center";
export const centeredFlex = "flex justify-center";
export const ctaGroup =
  "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row";

// ===============================
// Sections
// ===============================
export const section = "scroll-mt-24";
export const sectionSpacing = "py-12 sm:py-16";
export const sectionSpacingLarge = "py-16 sm:py-20";

// Section Backgrounds
export const whiteBgGray950 = "bg-white dark:bg-gray-950";
export const whiteBgGray900 = "bg-white dark:bg-gray-900";
export const gray50BgGray900 = "bg-gray-50 dark:bg-gray-900";
export const gradientGray50White =
  "bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900";
export const gradientSlateTeal =
  "bg-gradient-to-br from-white via-slate-50 to-teal-50";

// ===============================
// Hero
// ===============================
export const heroLayout = "flex items-center";
export const heroSpacing = "py-12 sm:py-32";
export const heroDarkBackground =
  "dark:from-slate-950 dark:via-slate-900 dark:to-teal-950";

// ===============================
// Typography
// ===============================
export const eyebrow =
  "text-sm font-medium tracking-wide text-teal-600 sm:text-base dark:text-teal-400";
export const heroTitle =
  "mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl";
export const heroSubtitle =
  "mt-4 text-3xl font-semibold text-slate-700 dark:text-slate-300 sm:text-4xl lg:text-5xl";
export const heroDescription =
  "mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg";

export const sectionTitle =
  "text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl";

// ===============================
// Badge
// ===============================
export const badgeBase =
  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium";
export const tealBadge =
  "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300";

// ===============================
// Buttons
// ===============================
export const buttonBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
export const buttonPrimary = "bg-teal-600 text-white hover:bg-teal-700";
export const buttonSecondary =
  "border border-slate-300 font-semibold text-slate-700 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400";

// ===============================
// About
// ===============================
export const bodyTextGray = "text-gray-600 dark:text-gray-300";

export const skillItem = "flex items-center gap-3 text-base";

export const profileImage =
  "object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none";

export const profileImageCard =
  "group relative h-64 w-64 overflow-hidden rounded-2xl border border-gray-200 shadow-xl transition-all duration-300 hover:border-teal-300 hover:shadow-2xl md:h-72 md:w-72 dark:border-gray-800 dark:hover:border-teal-700";

export const skillDot = "h-2 w-2 rounded-full bg-teal-500";

export const subsectionTitle =
  "text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100";

export const mutedText = "text-sm leading-6 text-gray-500 dark:text-gray-400";

// ===============================
// Components
// ===============================
export const sectionAccent = "mt-3 h-1 w-20 rounded-full bg-teal-500";

// ===============================
// Project Card
// ===============================
export const cardImageWrapper = "relative h-64 overflow-hidden";
export const projectCard =
  "group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800";

export const featuredCard = "border-teal-500 dark:border-teal-400";

export const defaultCard = "border-gray-200 dark:border-gray-700";
export const cardImage =
  "object-cover transition-transform duration-500 group-hover:scale-110";
export const cardImageOverlay =
  "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100";
export const featuredBadge =
  "absolute left-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-md";
export const technologyBadge =
  "rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300";

export const cardButtonBase =
  "rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800";

export const cardButtonPrimary = "bg-teal-600 text-white hover:bg-teal-700";

export const cardButtonSecondary =
  "border border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-400";
export const textLink =
  "inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700";

// ===============================
// Project Case Study
// ===============================

export const caseStudyContainer = "mt-8 space-y-6";

export const caseStudyTitle =
  "text-xl font-semibold text-gray-900 dark:text-white";

export const caseStudyText = "mt-2 text-gray-600 dark:text-gray-300";

export const sectionHeader = "max-w-3xl";

// ===============================
// Experience
// ===============================

export const experienceCard =
  "relative rounded-xl pl-8 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl dark:hover:bg-gray-800/60 sm:pl-10";

export const timelineLine =
  "absolute left-[7px] top-6 bottom-0 z-0 w-px bg-gray-300 dark:bg-gray-700";

export const timelineDot =
  "absolute left-0 top-2 z-10 h-3 w-3 rounded-full bg-teal-600 ring-4 ring-gray-50 dark:ring-gray-900";

export const currentRoleBadge =
  "mt-3 inline-flex rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/40 dark:text-teal-300";

export const experienceRole =
  "text-2xl font-semibold text-gray-900 dark:text-white";

export const experienceCompany =
  "mt-1 text-lg font-semibold text-teal-600 dark:text-teal-400";

export const experienceMeta = "mt-1 text-sm text-gray-500 dark:text-gray-400";

export const experienceText = "text-gray-600 dark:text-gray-300";

export const achievementItem = "flex items-start gap-3";

export const achievementDot = "mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500";

// ===============================
// Contact
// ===============================

export const contactCard =
  "mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:p-10";

export const contactText =
  "mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300";

export const contactLinkGroup =
  "mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap";

export const secondaryButton =
  "border border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-400 dark:hover:text-teal-400";

export const contactMeta = "text-sm text-gray-500 dark:text-gray-400";

// ===============================
// Header
// ===============================

export const header =
  "sticky top-0 z-50 w-full border-b bg-white dark:bg-black";

export const navContainer =
  "mx-auto flex max-w-6xl items-center justify-between px-6 py-4";

export const brandLink =
  "text-xl font-semibold text-gray-900 transition-colors hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400";

export const desktopNav = "hidden lg:flex lg:justify-center lg:gap-6";

export const desktopNavLink =
  "text-sm font-medium text-gray-900 transition-colors hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400";

export const desktopResumeWrapper = "hidden lg:flex lg:justify-end";

export const menuButton =
  "lg:hidden text-gray-900 transition-colors hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 dark:text-gray-100 dark:hover:text-teal-400 dark:focus:ring-offset-black";

export const mobileMenu =
  "border-t bg-white px-6 py-4 dark:border-gray-800 dark:bg-black lg:hidden";

export const mobileNavLink =
  "text-sm font-medium text-gray-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400";

export const mobileResumeButton =
  "inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700";
