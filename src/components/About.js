import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
          About Me
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          A brief introduction to my background, expertise, and passion for
          building robust software.
        </p>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          <div className="md:col-span-2">
            <motion.div variants={textVariants}>
              <p className="text-gray-700 text-lg leading-relaxed">
                I am a Software Engineer with practical experience building
                enterprise-grade applications. My focus areas include backend
                architecture, system reliability, and performance optimization.
                I am passionate about building clean, efficient, and scalable
                software and enjoy mentoring junior engineers and taking ownership
                of product features end-to-end.
              </p>
              
              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Built a Spring Boot application managing groups & investors, processing 20k+ requests/day.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Implemented Kafka-based document generation to decouple and scale reporting workloads.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Deployed full-stack apps on AWS using S3, Elastic Beanstalk and DynamoDB.
                </li>
              </ul>
              
              <div className="mt-10 flex gap-4">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
                  href="#contact"
                >
                  Hire Me
                </a>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-bold shadow-sm hover:bg-gray-100 transition transform hover:scale-105"
                  href="#projects"
                >
                  See Projects
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={cardVariants} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">Quick Facts</h3>
            <dl className="mt-6 text-base text-gray-700 space-y-4">
              <div>
                <dt className="text-gray-400 font-semibold">Location</dt>
                <dd>Hyderabad, India</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-semibold">Experience</dt>
                <dd>3 years</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-semibold">Current</dt>
                <dd>Yahoo — Software Engineer</dd>
              </div>
              <div>
                <dt className="text-gray-400 font-semibold">Open to</dt>
                <dd>SDE II / Backend</dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}