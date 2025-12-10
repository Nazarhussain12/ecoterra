"use client";

import { motion } from "framer-motion";
import {
  FiShield,
  FiSettings,
  FiStar,
} from "react-icons/fi";

export default function WhyUs() {
  const features = [
    {
      icon: FiShield,
      title: "You Can Trust",
      description:
        "With over 5 years of experience, our team of energy experts has successfully completed numerous projects across Pakistan, delivering reliable and efficient solar solutions.",
      iconBg: "bg-orange-500",
      number: "01",
    },
    {
      icon: FiSettings,
      title: "Tailored for You",
      description:
        "We believe in the power of personalized solutions. Your energy system should reflect your unique needs and requirements, ensuring maximum efficiency and savings.",
      iconBg: "bg-[#2E5580]",
      number: "02",
    },
    {
      icon: FiStar,
      title: "Safety and Quality",
      description:
        "Your well-being is at the heart of everything we do. We adhere to the highest safety and quality standards, ensuring reliable and long-lasting energy solutions.",
      iconBg: "bg-[#8EC341]",
      number: "03",
    },
  ];

  return (
    <section id="why-us" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Sub-heading with letter spacing */}
          <p className="text-orange-500 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
            W h y C h o o s e U s
          </p>
          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl font-bold text-[#131B49] tracking-tight">
            Why Choose Us
          </h2>
        </motion.div>

        {/* Feature Cards - Three Cards Horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 relative"
            >
              {/* Icon and Title Section */}
              <div className="flex items-start gap-4 mb-4">
                {/* Colored Square Icon */}
                <div
                  className={`${feature.iconBg} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#131B49] mb-2">
                    {feature.title}
                  </h3>
                </div>

                {/* Large Number - Positioned to the right */}
                <div className="absolute top-8 right-8">
                  <span className="text-6xl font-bold text-gray-200 leading-none">
                    {feature.number}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm mt-6">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
