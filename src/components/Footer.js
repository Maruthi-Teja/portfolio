import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      variants={footerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-slate-900 text-slate-300 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="text-lg font-bold text-white">Maruthi Teja</p>
        <p className="mt-2 text-sm">Java Backend Engineer</p>
        <p className="mt-6 text-xs text-gray-500 tracking-wide">
          &copy; {new Date().getFullYear()} Maruthi Teja. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}