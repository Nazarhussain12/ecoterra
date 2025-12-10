"use client";

import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

export default function About() {
  const stats = [
    {
      number: "100+",
      label: "Completed Projects",
    },
    {
      number: "50+",
      label: "On Going Projects",
    },
    {
      number: "100+",
      label: "Happy Clients",
    },
    {
      number: "5+",
      label: "Years Experience",
    },
  ];

  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Us Description and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-[#131B49] mb-6 tracking-tight">
              ABOUT US
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              ECO Terra Pvt. Ltd. is one of Pakistan's fast-growing companies in
              the renewable energy sector founded by energy engineering students
              from NUST. We design and install solar solutions for both homes
              and businesses, helping clients cut costs and move towards energy
              independence. Each system we provide is customized to meet the
              specific needs of our customers, ensuring maximum savings and
              long-term value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#8EC341] text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
              >
                LEARN MORE
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-[#8EC341] text-[#8EC341] px-8 py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300"
              >
                <span>Watch Video</span>
                <FiPlay className="w-4 h-4" />
              </motion.button> */}
            </div>
          </motion.div>

          {/* Right Side - Statistical Overview Cards (2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 text-center"
              >
                <h3 className="text-4xl sm:text-5xl font-bold text-[#131B49] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
