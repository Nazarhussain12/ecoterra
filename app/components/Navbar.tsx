"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar - Professional White to Blue Gradient */}
        <div
          className={`relative bg-gradient-to-r from-white via-blue-50 to-blue-100 rounded-full px-6 py-4 transition-all duration-300 border border-blue-200/50 ${
            isScrolled
              ? "shadow-[0_8px_30px_rgba(46,85,128,0.15)]"
              : "shadow-[0_4px_20px_rgba(46,85,128,0.1)]"
          }`}
        >
          <div className="relative flex items-center justify-between">
            {/* Logo - No Cover */}
            <Link href="#home" className="flex items-center z-10">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.jpg"
                  alt="ECO Terra Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#2E5580] font-medium hover:text-[#8EC341] transition-colors duration-300 text-sm relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8EC341] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Email Icon - Just Icon */}
            <div className="hidden md:block z-10">
              <a
                href="mailto:khanmustafa493@gmail.com"
                className="bg-[#2E5580] hover:bg-[#175773] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Email us"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#2E5580] p-2 z-10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-gradient-to-r from-white via-blue-50 to-blue-100 rounded-3xl shadow-[0_8px_30px_rgba(46,85,128,0.15)] overflow-hidden border border-blue-200/50"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#2E5580] font-medium hover:text-[#8EC341] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="mailto:khanmustafa493@gmail.com"
                  className="flex items-center justify-center bg-[#2E5580] text-white w-12 h-12 rounded-full mt-4 hover:bg-[#175773] transition-colors shadow-md"
                  aria-label="Email us"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
