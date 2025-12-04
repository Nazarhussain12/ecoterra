"use client";

import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B49] mb-4">
            Get In <span className="text-[#8EC341]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your renewable energy journey? Contact us today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#131B49] mb-6">
                Contact Information
              </h3>
            </div>

            {/* CEO Contact */}
            <div className="bg-gradient-to-br from-[#8EC341] to-[#3C8B3C] rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-4">Company & Legal</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FiUser className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">M. Mustafa Khan</p>
                    <p className="text-white/90">CEO, ECO Terra (Pvt.) Ltd.</p>
                  </div>
                </div>
                <a
                  href="tel:03070461610"
                  className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>0307-0461610</span>
                </a>
                <a
                  href="mailto:khanmustafa493@gmail.com"
                  className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  <span>khanmustafa493@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Project Contacts */}
            <div className="bg-gradient-to-br from-[#2E5580] to-[#175773] rounded-2xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-4">Project Contacts</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Qaiser Khan</p>
                  <a
                    href="tel:03108901234"
                    className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    <span>0310-8901234</span>
                  </a>
                </div>
                <div>
                  <p className="font-medium mb-2">M. Zeeshan</p>
                  <a
                    href="tel:03011465680"
                    className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    <span>0301-1465680</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-[#131B49] mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8EC341] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8EC341] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8EC341] focus:border-transparent outline-none transition-all"
                    placeholder="0300-1234567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#8EC341] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <FiSend className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

