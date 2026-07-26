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
export const gray50Bg900 = "bg-gray-50 dark:bg-gray-900";
export const gradientGray50White =
  "bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900";
export const gradientSlateTeal =
  "bg-gradient-to-br from-white via-slate-50 to-teal-50";

// ===============================
// Hero
// ===============================
export const heroLayout = "flex items-center";
export const heroSpacing = "py-12 sm:py-32";
export const heroBackground =
  "dark:from-slate-950 dark:via-slate-900 dark:to-teal-950";

// ===============================
// Typography
// ===============================
export const eyebrow =
  "text-sm font-medium tracking-wide text-teal-600 sm:text-base dark:text-teal-400";
export const heroTitle =
  "mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100";
export const heroSubtitle =
  "mt-4 text-3xl font-semibold text-slate-700 dark:text-slate-300 sm:text-4xl lg:text-5xl";
export const heroDescription =
  "mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg";

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
