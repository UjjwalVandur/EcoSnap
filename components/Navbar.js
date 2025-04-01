import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black h-12 flex text-white items-center">
      <div className="logo m-1 p-4 font-bold hover:cursor-pointer text-emerald-400 text-xl">EcoSnap</div>
      <ul className="flex space-x-4 ml-auto mr-4 items-center">
        <li><label className="toggle text-base-content bg-white">
  <input type="checkbox" value="dark" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label></li>
        <Link href="/" className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent">Home</Link>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent ">About</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent ">Services</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent ">Contact</li>
        <li className="hover:text-black-400 cursor-pointer btn btn-dash btn-accent">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
