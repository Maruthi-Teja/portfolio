// src/components/Loader.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [logLines, setLogLines] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const logMessages = [
    "Initializing secure connection...",
    "Verifying dependencies... Done.",
    "Compiling modules: [auth], [data-service], [logging]...",
    "Optimizing assets (images, fonts, CSS)...",
    "Loading configuration from environment variables...",
    "Establishing database connection... Connected.",
    "Checking for updates... No updates found.",
    "Preparing application state...",
    "Launching core services...",
    "Application ready."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < logMessages.length) {
        setLogLines(prev => [...prev, logMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setShowProgress(true); // Show final "Loading..." message after logs
      }
    }, 250); // Time to display each log line

    // Set a total duration for the loader to ensure it's visible long enough
    // This should match the total time in App.js minus the exit animation time
    const totalLoaderDisplayTime = (logMessages.length * 250) + 1000; // Time for logs + 1 sec for final message
    const hideLoaderTimer = setTimeout(() => {
      // This timeout will be handled by App.js's useEffect
      // We just ensure all logs are displayed before App.js hides it.
    }, totalLoaderDisplayTime); 

    return () => {
      clearInterval(interval);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  const lineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 text-green-400 font-mono text-sm md:text-base z-50 p-6 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }} // Exit animation for loader
    >
      <div className="flex flex-col items-start justify-center h-full max-w-2xl w-full">
        {logLines.map((line, index) => (
          <motion.p
            key={index}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="whitespace-pre-wrap leading-relaxed"
          >
            <span className="text-gray-600 mr-2">[{index + 1}]</span> {line}
          </motion.p>
        ))}
        <AnimatePresence>
          {showProgress && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-white text-lg font-bold"
            >
              Loading Portfolio<motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >...</motion.span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}