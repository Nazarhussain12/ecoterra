"use client";

import { motion } from "framer-motion";
import {
  FiHome,
  FiBriefcase,
  FiSettings,
  FiZap,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: FiHome,
      title: "Residential Solar Solutions",
      description:
        "Customized solar systems for homes, helping families achieve energy independence and reduce electricity bills.",
      color: "from-[#8EC341] to-[#3C8B3C]",
    },
    {
      icon: FiBriefcase,
      title: "Commercial Solar Systems",
      description:
        "Large-scale solar installations for businesses, reducing operational costs and carbon footprint.",
      color: "from-[#2E5580] to-[#175773]",
    },
    {
      icon: FiSettings,
      title: "System Design & Installation",
      description:
        "Expert design and professional installation services tailored to your specific energy needs.",
      color: "from-[#131B49] to-[#2E5580]",
    },
    {
      icon: FiZap,
      title: "Hybrid Solar Systems",
      description:
        "Advanced hybrid solutions combining solar power with grid connectivity for maximum efficiency.",
      color: "from-[#175773] to-[#8EC341]",
    },
    {
      icon: FiTool,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and support services to ensure your solar system operates at peak performance.",
      color: "from-[#3C8B3C] to-[#2E5580]",
    },
    {
      icon: FiCheckCircle,
      title: "Custom Solutions",
      description:
        "Bespoke energy solutions designed to meet unique requirements and maximize savings.",
      color: "from-[#8EC341] to-[#175773]",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#131B49] mb-4">
            Our <span className="text-[#8EC341]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions for homes and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#131B49] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

