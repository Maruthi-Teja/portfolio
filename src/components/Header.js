import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed w-full z-40 top-4 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between transition-all duration-300">
          <a href="#" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl ring-2 ring-white/50 transform transition-transform hover:scale-110">M</div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">Maruthi Teja</div>
              <div className="text-xs text-gray-500 transition-colors duration-300">Java Backend Engineer</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 bg-white/70 px-6 py-2 rounded-full shadow-lg backdrop-blur-lg border border-white/30">
            <a className="text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600" href="#about">About</a>
            <a className="text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600" href="#experience">Experience</a>
            <a className="text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600" href="#projects">Projects</a>
            <a className="text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600" href="#skills">Skills</a>
            <a className="text-sm font-semibold text-gray-700 transition-colors duration-300 hover:text-indigo-600" href="#contact">Contact</a>
            <a className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-sm font-bold shadow-md transform transition-transform hover:scale-105 hover:shadow-lg" href="#contact">
              Let's Talk
            </a>
          </nav>

          <div className="md:hidden">
            <button id="mobile-btn" onClick={toggleMobile} className="p-2 bg-white/70 rounded-full shadow-lg backdrop-blur-lg">
              <span className="text-gray-800">☰</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile menu with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="fixed inset-0 z-40"
          >
            <div className="absolute inset-0 bg-black/40" onClick={toggleMobile} />
            <div className="absolute right-4 top-20 bg-white rounded-xl p-4 shadow-xl w-56 transform transition-transform duration-300">
              <a className="block py-2 font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200" href="#about" onClick={toggleMobile}>About</a>
              <a className="block py-2 font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200" href="#experience" onClick={toggleMobile}>Experience</a>
              <a className="block py-2 font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200" href="#projects" onClick={toggleMobile}>Projects</a>
              <a className="block py-2 font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200" href="#skills" onClick={toggleMobile}>Skills</a>
              <a className="block py-2 font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200" href="#contact" onClick={toggleMobile}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}