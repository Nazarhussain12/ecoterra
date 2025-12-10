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
        {/* Main Navbar - Pill Shaped with Enhanced Gradient and 3D Glow Effect */}
        <div
          className={`relative bg-gradient-to-r from-[#2E5580] via-[#175773] via-[#8EC341] to-[#131B49] rounded-full px-6 py-4 transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_8px_40px_rgba(46,85,128,0.6),0_0_60px_rgba(142,195,65,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
              : "shadow-[0_4px_30px_rgba(46,85,128,0.5),0_0_40px_rgba(142,195,65,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]"
          }`}
          style={{
            boxShadow: isScrolled
              ? "0 8px 40px rgba(46, 85, 128, 0.6), 0 0 60px rgba(142, 195, 65, 0.3), 0 0 80px rgba(23, 87, 115, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              : "0 4px 30px rgba(46, 85, 128, 0.5), 0 0 40px rgba(142, 195, 65, 0.2), 0 0 60px rgba(23, 87, 115, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Glow Effect Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
          
          <div className="relative flex items-center justify-between">
            {/* Logo - Circular */}
            <Link href="#home" className="flex items-center z-10">
              <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/logo.jpg"
                  alt="ECO Terra Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1.5"
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
                  className="text-white font-medium hover:text-[#8EC341] transition-colors duration-300 text-sm relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8EC341] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Email CTA - Rounded Rectangle */}
            <div className="hidden md:block z-10">
              <a
                href="mailto:khanmustafa493@gmail.com"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 border border-white/30 shadow-lg hover:shadow-xl"
              >
                <FiMail className="w-4 h-4" />
                <span>khanmustafa493@gmail.com</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 z-10"
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
              className="md:hidden mt-4 bg-gradient-to-r from-[#2E5580] via-[#175773] via-[#8EC341] to-[#131B49] rounded-3xl shadow-[0_8px_40px_rgba(46,85,128,0.6),0_0_60px_rgba(142,195,65,0.3)] overflow-hidden backdrop-blur-xl border border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white font-medium hover:text-[#8EC341] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="mailto:khanmustafa493@gmail.com"
                  className="flex items-center justify-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full mt-4 hover:bg-white/30 transition-colors font-medium border border-white/30"
                >
                  <FiMail className="w-4 h-4" />
                  <span className="text-sm">khanmustafa493@gmail.com</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
