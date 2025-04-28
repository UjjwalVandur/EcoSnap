"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const text =
  "Your one-stop solution for waste management. Join us in making the world a cleaner place.";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center flex-col lg:min-h-[85vh] lg:flex-row sm:min-h-[90vh] sm:flex-row md:min-h-[90vh] md:flex-row min-h-[90vh] bg-white [background:radial-gradient(115%_115%_at_50%_10%,var(--background-start)_40%,var(--background-end)_100%)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold text-emerald-400 p-2">EcoSnap</h1>
            <p className=" py-6 text-lg">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }} // 80ms delay between each letter
                  className="font-mono font-bold"
                >
                  {char}
                </motion.span>
              ))}
            </p>

            <Link href="/about">
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
      </div>
    </>
  );
}
