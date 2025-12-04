"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#131B49] via-[#2E5580] to-[#175773] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="ECO Terra Logo"
                  fill
                  sizes="48px"
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-bold">
                ECO <span className="text-[#8EC341]">TERRA</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading Pakistan's renewable energy revolution with innovative
              solar solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FiFacebook, href: "#" },
                { icon: FiTwitter, href: "#" },
                { icon: FiLinkedin, href: "#" },
                { icon: FiInstagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#8EC341] transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Why Us", href: "#why-us" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#8EC341] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Hybrid Systems",
                "System Design",
                "Installation",
                "Maintenance",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-[#8EC341] transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-[#8EC341] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">CEO</p>
                  <a
                    href="tel:03070461610"
                    className="text-gray-300 hover:text-[#8EC341] transition-colors"
                  >
                    0307-0461610
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-[#8EC341] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Projects</p>
                  <a
                    href="tel:03108901234"
                    className="text-gray-300 hover:text-[#8EC341] transition-colors"
                  >
                    0310-8901234
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-[#8EC341] flex-shrink-0 mt-1" />
                <a
                  href="mailto:khanmustafa493@gmail.com"
                  className="text-gray-300 hover:text-[#8EC341] transition-colors break-all"
                >
                  khanmustafa493@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} ECO Terra (Private) Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link
                href="#"
                className="hover:text-[#8EC341] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-[#8EC341] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

