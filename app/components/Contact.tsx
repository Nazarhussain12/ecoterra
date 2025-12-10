"use client";

import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

export default function Contact() {
  const contactCards = [
    {
      icon: FiMapPin,
      title: "OUR MAIN OFFICE",
      details: "Islmabad",
      color: "text-red-500",
    },
    {
      icon: FiPhone,
      title: "PHONE NUMBER",
      details: "0307-0461610 ",
      color: "text-red-500",
    },
    
    {
      icon: FiMail,
      title: "EMAIL",
      details: "khanmustafa493@gmail.com",
      color: "text-red-500",
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "#" },
    { icon: FiTwitter, href: "#" },
    { icon: FiLinkedin, href: "#" },
  ];

  return (
    <section id="contact" className="pt-20 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Contact Information Cards (Half Width) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              <div className={`${card.color} mb-4`}>
                <card.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Full Width Gradient Background with Reduced Padding */}
      <div className="w-full bg-gradient-to-r from-[#2E5580] via-[#175773] to-[#131B49] py-20">
        <div className="max-w-[95%] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form (Bigger) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <form className="space-y-6">
                {/* Email Field with Icon */}
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-5 rounded-xl border border-gray-300 bg-white focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-500 shadow-sm text-base"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Name Field with Icon */}
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-5 rounded-xl border border-gray-300 bg-white focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-500 shadow-sm text-base"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Message Field with Icon */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-5 text-gray-600 w-5 h-5" />
                  <textarea
                    rows={6}
                    className="w-full pl-12 pr-4 py-5 rounded-xl border border-gray-300 bg-white focus:bg-white focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none placeholder:text-gray-500 shadow-sm text-base"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-gray-900 py-5 rounded-xl font-bold text-base uppercase tracking-wide hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Get in Touch Details (Bigger) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
                Get in touch
              </h2>
              
              <p className="text-white/90 text-xl leading-relaxed mb-6">
                We can ensure reliability. Our core focus and most important, your safety and comfort in mind.
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <social.icon className="w-7 h-7 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
