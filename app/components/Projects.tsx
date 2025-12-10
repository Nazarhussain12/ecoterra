"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiZap, FiStar, FiCalendar } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "10kv Hybrid Solar System Installation",
      location: "Park View City Islamabad",
      image: "/images/project-picture.jpg",
      siteImage: "/images/project-site-picture.jpg",
      capacity: "10kW",
      days: "45",
      rating: "4.9",
      description: "Professional hybrid solar system installation with advanced battery backup, ensuring uninterrupted power supply and maximum energy efficiency.",
      price: "PKR 2.5M",
    },
    {
      title: "Solar System Project",
      location: "Multiple Locations",
      image: "/images/project-picture-2.jpg",
      siteImage: "/images/project-site-picture-2.jpg",
      capacity: "Custom",
      days: "60",
      rating: "4.8",
      description: "Comprehensive solar solutions deployed across multiple locations, delivering sustainable energy and significant cost savings.",
      price: "Custom",
    },
    {
      title: "Commercial Solar Installation",
      location: "Various Sites",
      image: "/images/project-picture-3.jpg",
      siteImage: "/images/project-site-picture-3.jpg",
      capacity: "Custom",
      days: "90",
      rating: "5.0",
      description: "Large-scale commercial solar installations designed for maximum ROI and long-term sustainability.",
      price: "Custom",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8EC341] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2E5580] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-[#131B49] mb-6 tracking-tight">
            Our <span className="text-[#8EC341]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing our successful solar installations across Pakistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
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
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <FiZap className="w-4 h-4 text-[#8EC341]" />
                    <span className="font-semibold text-sm text-gray-900">{project.capacity}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title and Location */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Stats Section */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                        <FiCalendar className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Days</p>
                        <p className="text-lg font-bold text-gray-900">{project.days}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                        <FiStar className="w-5 h-5 text-[#8EC341]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Rating</p>
                        <p className="text-lg font-bold text-gray-900">{project.rating}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
