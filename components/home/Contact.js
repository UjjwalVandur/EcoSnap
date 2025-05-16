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

const Contact = () => {
  return (
    <main id="contact" className="  [background:var(--background-end)] text-white  py-10 px-6 md:px-20 flex flex-col items-center justify-center lg:min-h-[95vh] lg:flex-row sm:min-h-[95vh] sm:flex-row md:min-h-[95vh] md:flex-row min-h-[95vh]">
      

      {/* Contact Us */}
      <motion.section
        className="text-center bg-gray-900 p-8 rounded-2xl h-full w-full max-w-2xl shadow-lg "
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

export default Contact;
