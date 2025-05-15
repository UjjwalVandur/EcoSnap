"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Steps from "@/components/home/Steps";
import FAQ from "@/components/home/FAQ";

const fullText =
  "Your one-stop solution for waste management. Join us in making the world a cleaner place.";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);
  return (
    <>
      <section className="id:home flex justify-center items-center flex-col lg:min-h-[95vh] lg:flex-row sm:min-h-[95vh] sm:flex-row md:min-h-[95vh] md:flex-row min-h-[95vh] bg-white [background:var(--background-start)]">
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold text-emerald-400 p-2">EcoSnap</h1>
            <p className="py-6 text-md font-mono  text-base-content">
            <motion.span
              key={displayedText}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {displayedText}
            </motion.span>
            <span className="animate-pulse">|</span>
          </p>

            <Link href="/">
              <button className="relative cursor-pointer z-1 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
        <motion.img
          src="/68.svg"
          alt="EcoSnap Floating Logo"
          className="sm:size-1/2 md:size-1/2 lg:size-1/2 size-96 "
          animate={{ x: [0, 15, 0, -15, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </section>
      <About />
      <Steps/>
      <FAQ/>
      <Contact />
    </> 
  );
}
