import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const quotes = [
    "Software is like a a box of chocolates. You never know what you're gonna get...",
    "The best code is no code.",
    "Making the simple, awesomely simple is hard to do.",
    "Code is like humor. When you have to explain it, it's bad."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 50); // Increased interval to match 5-second loading time

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-50 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="text-center"
        variants={quoteVariants}
      >
        <p className="text-xl md:text-2xl font-light italic text-gray-400 max-w-lg">
          "{quote}"
        </p>
        <div className="mt-8 relative w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="absolute h-full bg-indigo-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">{progress}% Loaded</p>
      </motion.div>
    </motion.div>
  );
}