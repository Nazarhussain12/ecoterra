"use client";

import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

export default function MissionVision() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-white">
          {/* Top-Left: Our Mission - Dark Red/Maroon Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#8B0000] p-8 sm:p-12 text-white min-h-[400px] flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 tracking-wide">
              OUR MISSION
            </h2>
            <p className="text-white/90 leading-relaxed mb-4 text-base sm:text-lg">
              Our mission is to lead the quest to change the world as the
              trusted sustainability partner creating valued, single-sourced,
              efficient energy solutions delivered with passion, expertise,
              teamwork and a relentless focus on customer satisfaction.
            </p>
            <p className="text-white/90 leading-relaxed text-base sm:text-lg">
              We are committed to making energy independence a reality for
              everyone through innovative solar and GIS solutions that are
              reliable, affordable, and environmentally sustainable.
            </p>
          </motion.div>

          {/* Top-Right: Vision Icon - White Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 sm:p-12 min-h-[400px] flex items-center justify-center border-l-2 border-white"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <FiTarget className="w-24 h-24 text-gray-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Our Vision</h3>
            </div>
          </motion.div>

          {/* Bottom-Left: Growth/Sustainability Icon - White Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 sm:p-12 min-h-[400px] flex items-center justify-center border-t-2 border-white"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <FiHeart className="w-24 h-24 text-gray-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">Growth & Care</h3>
            </div>
          </motion.div>

          {/* Bottom-Right: Our Values - Teal/Blue-Green Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-teal-600 p-8 sm:p-12 text-white min-h-[400px] flex flex-col justify-center border-l-2 border-t-2 border-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 tracking-wide">
              OUR VALUES
            </h2>
            <p className="text-white/90 leading-relaxed mb-4 text-base sm:text-lg">
              Sustainability - Creating a cleaner, greener future through solar
              and GIS solutions. Integrity - Honesty, transparency, and fairness
              in everything we do.
            </p>
            <p className="text-white/90 leading-relaxed text-base sm:text-lg">
              Innovation - Excellence in delivering reliable and efficient
              services. Collaboration - Working together with clients,
              communities, and partners for positive impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
