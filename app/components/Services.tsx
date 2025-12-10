"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiHome,
  FiBriefcase,
  FiZap,
  FiDatabase,
  FiCode,
  FiMap,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      icon: FiHome,
      title: "Residential Solar",
      gradientText: "SOLAR POWER",
      image: "/images/ResidentialSolar.jpeg",
    },
    {
      icon: FiBriefcase,
      title: "Commercial Solar",
      gradientText: "ENERGY SOLUTIONS",
      image: "/images/CommercialSolar.jpeg",
    },
    {
      icon: FiZap,
      title: "Hybrid Systems",
      gradientText: "GRID CONNECT",
      image: "/images/HybridSystems.png",
    },
    {
      icon: FiDatabase,
      title: "Data Management",
      gradientText: "ANALYZE",
      image: "/images/DataManagement.jpg",
    },
    {
      icon: FiCode,
      title: "Application Development",
      gradientText: "CUSTOM APPS",
      image: "/images/ApplicationDevelopment.png",
    },
    {
      icon: FiMap,
      title: "Mapping & Visualization",
      gradientText: "DIGITAL MAPS",
      image: "/images/Mapping & Visualization.jpeg",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-[#131B49] mb-6 tracking-tight">
            Our <span className="text-[#8EC341]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive renewable energy and GIS solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Container - Modern white card with shadow */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 h-full flex flex-col">
                {/* Image Section - Smaller height */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <service.icon className="w-4 h-4 text-[#8EC341]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#8EC341] font-bold text-xs uppercase tracking-wide mt-auto">
                    {service.gradientText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
