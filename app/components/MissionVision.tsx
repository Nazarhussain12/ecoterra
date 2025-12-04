"use client";

import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart, FiCheckCircle } from "react-icons/fi";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#8EC341] to-[#3C8B3C] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FiTarget className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95">
              Our mission is to lead the quest to change the world as the
              trusted sustainability partner creating valued, single-sourced,
              efficient energy solutions delivered with passion, expertise,
              teamwork and a relentless focus on customer satisfaction.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#2E5580] to-[#175773] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FiEye className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95">
              Our vision is to be a trusted partner in sustainability by creating
              innovative, efficient, and accessible energy solutions. We are
              driven by passion, teamwork, and expertise, with a strong
              commitment to customer satisfaction. At ECO Terra Pvt. Ltd., we
              aim to make a lasting impact by leading the shift towards a
              cleaner and more sustainable future.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#131B49] to-[#2E5580] rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FiHeart className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Sustainability - Creating a cleaner, greener future through solar and GIS solutions",
                "Integrity - Honesty, transparency, and fairness in everything we do",
                "Innovation - Excellence in delivering reliable and efficient services",
                "Collaboration - Working together with clients, communities, and partners for positive impact",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <FiCheckCircle className="w-6 h-6 text-[#8EC341] flex-shrink-0 mt-1" />
                  <p className="text-white/95 leading-relaxed">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

