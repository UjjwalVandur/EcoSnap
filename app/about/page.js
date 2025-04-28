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
    <main className="  [background:radial-gradient(100%_100%_at_50%_10%,var(--background-start)_40%,var(--background-end)_100%)] text-white min-h-screen py-10 px-6 md:px-20">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
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

      {/* Contact Us */}
      <motion.section
        className="text-center bg-gray-900 p-8 rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.2}
      >
        <h2 className="text-3xl text-emerald-300 font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          Got questions, feedback, or want to collaborate? We’d love to hear from you.
        </p>
        <div className="space-y-2 text-gray-400">
          <p>Email: <a href="mailto:contact@ecosnap.ai" className="text-emerald-400 hover:underline">contact@ecosnap.ai</a></p>
          <p>Phone: <a href="tel:+911234567890" className="text-emerald-400 hover:underline">+91 12345 67890</a></p>
          <p>Location: EcoSnap HQ, GreenTech Park, Bengaluru, India</p>
        </div>
        <Link href="/contact">
          <button className="btn btn-accent mt-6">Send a Message</button>
        </Link>
      </motion.section>
    </main>
  );
};

export default About;
