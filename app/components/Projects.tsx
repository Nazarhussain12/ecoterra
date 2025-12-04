"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiZap } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "10kv Hybrid Solar System Installation",
      location: "Park View City Islamabad",
      image: "/images/project-picture.jpg",
      siteImage: "/images/project-site-picture.jpg",
      capacity: "10kW",
    },
    {
      title: "Solar System Project",
      location: "Multiple Locations",
      image: "/images/project-picture-2.jpg",
      siteImage: "/images/project-site-picture-2.jpg",
      capacity: "Custom",
    },
    {
      title: "Commercial Solar Installation",
      location: "Various Sites",
      image: "/images/project-picture-3.jpg",
      siteImage: "/images/project-site-picture-3.jpg",
      capacity: "Custom",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#131B49] via-[#2E5580] to-[#175773] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8EC341] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3C8B3C] rounded-full blur-3xl"></div>
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
            Our <span className="text-[#8EC341]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8EC341] to-[#3C8B3C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Showcasing our successful solar installations across Pakistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Project Images */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white mb-2">
                    <FiZap className="w-5 h-5 text-[#8EC341]" />
                    <span className="font-semibold">{project.capacity}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-white/90">
                    <FiMapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Site Image */}
              <div className="p-6">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.siteImage}
                    alt={`${project.title} - Site View`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-200 text-sm">
                  Professional installation with quality components and expert
                  engineering
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

