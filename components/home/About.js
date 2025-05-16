"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <section id="about" className="   [background:var(--background-end)] text-white  py-10 px-6 md:px-20 lg:min-h-[95vh] lg:flex-row sm:min-h-[95vh] sm:flex-row md:min-h-[95vh] md:flex-row min-h-[95vh] ">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
          Welcome to EcoSnap
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Revolutionizing waste management with AI-powered solutions. We help you identify, classify, and responsibly manage waste for a cleaner planet.
        </p>
      </motion.section>

      {/* Our Services */}
      <motion.section
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.2}
      >
        <h2 className="text-3xl text-emerald-400 font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Waste Classification",
              desc: "Upload an image of waste and let our model detect whether it’s biodegradable, recyclable, or hazardous.",
            },
            {
              title: "Weight Prediction",
              desc: "Get accurate waste weight estimations using our trained ML model, helping in logistics and collection planning.",
            },
            {
              title: "Data Analytics",
              desc: "View analytics on waste trends, most common items, and user insights to optimize environmental impact.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
              variants={fadeIn}
              custom={0.3 + index * 0.2}
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    
    </section>
  );
};

export default About;
