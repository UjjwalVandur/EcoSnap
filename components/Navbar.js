"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black h-12 flex text-white items-center w-auto">
      <Link
        href="/"
        className="logo m-1 p-4 font-bold hover:cursor-pointer text-emerald-400 text-xl"
      >
        EcoSnap
      </Link>
      <ul className="flex space-x-4 ml-auto mr-4 items-center ">
        <li>
          <label className="toggle text-base-content bg-white">
            <input type="checkbox" value="dark" className="theme-controller" />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </li>

        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto " id="navbar-default">


        <Link href="/" className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent m-1">Home</Link>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent m-1 rounded-sm hover:bg-gray-100 ">About</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent m-1  rounded-sm hover:bg-gray-100 ">Services</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent m-1  rounded-sm hover:bg-gray-100">Contact</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent m-1 rounded-sm hover:bg-gray-100">Login</li>
        </div> */}
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden p-2 text-gray-400 rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 ml-auto mr-4 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-black cursor-pointer btn btn-dash btn-accent "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-black cursor-pointer btn btn-dash btn-accent "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-black cursor-pointer btn btn-dash btn-accent "
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-black cursor-pointer btn btn-dash btn-accent  "
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:text-black cursor-pointer btn btn-dash btn-accent "
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-12 right-0 w-full bg-black text-white flex flex-col space-y-2 p-4 md:hidden z-1">
            <Link
              href="/"
              className="hover:text-emerald-400 "
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-emerald-400 "
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-emerald-400 "
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-emerald-400 "
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="hover:text-emerald-400 "
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
