"use client";
import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { FaFileAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left Column - Name */}
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-semibold text-gray-900 dark:text-gray-100"
        >
          Naheed Virk
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:justify-center lg:gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-900 dark:text-gray-100"
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Resume */}
        <div className="hidden lg:flex lg:justify-end">
          <a
            href="/resume/NaheedVirk-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex items-center gap-2 whitespace-nowrap 
            rounded-md bg-teal-600 px-6 py-3 text-white
            transition-colors duration-200
            hover:bg-teal-700
            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
            dark:focus:ring-offset-slate-950
            motion-reduce:transition-none"
          >
            <FaFileAlt className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Menu*/}
      {isOpen && (
        <div className="border-t bg-white px-6 py-4 dark:border-gray-800 dark:bg-black lg:hidden">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-900 hover:text-teal-600 dark:text-gray-100 dark:hover:text-teal-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/resume/NaheedVirk-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
              >
                <FaFileAlt className="h-4 w-4" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
