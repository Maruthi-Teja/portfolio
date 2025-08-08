import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-8 md:mb-0 md:mr-12"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHiCi1UplAgcw/profile-displayphoto-shrink_800_800/B56Zg6aI0RHkAc-/0/1753326588449?e=1757548800&v=beta&t=H43k1pGjbMHWWXevVqQpDmm5rJTSQKF6Z_TQNLXIguM"
            alt="Maruthi Teja"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight">
            Hi, I’m <span className="text-yellow-300">Maruthi</span>
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Software Engineer — Backend Specialist in Java, Spring Boot, AWS, MongoDB, Kafka
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
