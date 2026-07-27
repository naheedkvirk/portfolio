"use client";
import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import {
  brandLink,
  buttonBase,
  buttonPrimary,
  desktopNav,
  desktopNavLink,
  desktopResumeWrapper,
  header,
  menuButton,
  mobileMenu,
  mobileNavLink,
  mobileResumeButton,
  navContainer,
} from "@/lib/styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={header}>
      <nav className={navContainer}>
        {/* Brand */}
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className={brandLink}
        >
          Naheed Virk
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={desktopNav}>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={desktopNavLink}>
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
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className={menuButton}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6 transition-transform duration-200" />
          ) : (
            <FaBars className="h-6 w-6 transition-transform duration-200" />
          )}
        </button>

        {/* Desktop Resume */}
        <div className={desktopResumeWrapper}>
          <a
            href="/resume/NaheedVirk-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} ${buttonPrimary} gap-2`}
          >
            <FaFileAlt className="h-4 w-4" />
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-navigation" className={mobileMenu}>
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={mobileNavLink}
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
                onClick={() => setIsOpen(false)}
                className={mobileResumeButton}
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
