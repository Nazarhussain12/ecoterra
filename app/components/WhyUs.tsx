"use client";

import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiHeart,
  FiCode,
} from "react-icons/fi";

export default function WhyUs() {
  const features = [
    {
      icon: FiHeart,
      title: "Client-Focused",
      description:
        "We understand your unique needs and provide practical, affordable, and reliable solutions tailored to you.",
      color: "from-[#8EC341] to-[#3C8B3C]",
    },
    {
      icon: FiTrendingUp,
      title: "R&D Backed",
      description:
        "Strong research and development allows us to quickly transform technical ideas into successful commercial projects.",
      color: "from-[#2E5580] to-[#175773]",
    },
    {
      icon: FiZap,
      title: "Timely Solutions",
      description:
        "We respond to changing customer demands while delivering timely and cost-effective energy solutions.",
      color: "from-[#131B49] to-[#2E5580]",
    },
    {
      icon: FiShield,
      title: "Reliable Service",
      description:
        "Committed to making energy independence a reality for everyone with dependable, long-term solutions.",
      color: "from-[#175773] to-[#8EC341]",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-[#131B49] via-[#2E5580] to-[#175773] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8EC341] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3C8B3C] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#8EC341]">ECO Terra</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We are committed to making energy independence a reality for
            everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

