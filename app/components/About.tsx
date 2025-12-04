"use client";

import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward } from "react-icons/fi";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#131B49] mb-4">
              About <span className="text-[#8EC341]">ECO Terra</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading Pakistan's renewable energy revolution
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-gray-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ECO Terra Pvt. Ltd. is one of Pakistan's fast-growing companies
              in the renewable energy sector founded by energy engineering
              students from NUST. We design and install solar solutions for both
              homes and businesses, helping clients cut costs and move towards
              energy independence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each system we provide is customized to meet the specific needs of
              our customers, ensuring maximum savings and long-term value.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FiUsers,
                number: "100+",
                label: "Happy Clients",
                color: "from-[#8EC341] to-[#3C8B3C]",
              },
              {
                icon: FiTarget,
                number: "50+",
                label: "Projects Completed",
                color: "from-[#2E5580] to-[#175773]",
              },
              {
                icon: FiAward,
                number: "5+",
                label: "Years Experience",
                color: "from-[#131B49] to-[#2E5580]",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[#131B49] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

