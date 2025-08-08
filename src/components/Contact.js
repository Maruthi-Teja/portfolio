import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const generatePdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const left = 40;
    let y = 60;
    doc.setFontSize(18);
    doc.setTextColor("#4f46e5");
    doc.text("Maruthi Teja", left, y);
    y += 26;
    doc.setFontSize(12);
    doc.setTextColor("#111827");
    doc.text("Java Backend Engineer", left, y);
    y += 30;

    doc.setFontSize(14);
    doc.setTextColor("#4f46e5");
    doc.text("Experience", left, y);
    y += 18;
    doc.setFontSize(11);
    doc.setTextColor("#111827");
    doc.text("Yahoo — Software Engineer (Nov 2024 - Present)", left, y);
    y += 14;
    doc.text("Infosys — Senior Systems Engineer (2023 - 2024)", left, y);
    y += 14;
    doc.text("Cognizant — Programmer Analyst (2021 - 2023)", left, y);
    y += 24;

    doc.setFontSize(14);
    doc.setTextColor("#4f46e5");
    doc.text("Skills", left, y);
    y += 18;
    doc.setFontSize(11);
    doc.setTextColor("#111827");
    doc.text("Java, Spring Boot, AWS (DynamoDB, S3), Kafka, MongoDB, REST APIs", left, y);

    doc.save("Maruthi_Teja_Resume.pdf");
  };

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

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          I'm currently seeking new opportunities. Feel free to reach out to me
          for collaborations, projects, or just to say hi!
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 grid md:grid-cols-2 gap-12"
        >
          {/* Left Side: Contact Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Contact Information
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                You can find me on these platforms or reach out via email.
              </p>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <a href="mailto:maruthi@example.com" className="hover:text-indigo-600 transition">
                    maruthi@example.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16 4a2 2 0 00-2-2h-4v4h-4a2 2 0 00-2 2v4h4a2 2 0 002 2h4a2 2 0 002-2V6a2 2 0 00-2-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <a href="#" className="hover:text-indigo-600 transition">
                    linkedin.com/in/maruthi
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.638 1.488l-2.484 2.87a1 1 0 11-1.353-1.564l2.484-2.87a1 1 0 011.488-.638zM8.293 6.94a1 1 0 011.414 0l4.316 4.316a1 1 0 010 1.414l-4.316 4.316a1 1 0 01-1.414 0L3.977 12.71a1 1 0 010-1.414l4.316-4.316zM6.16 8.364a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L6.16 9.778a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <a href="#" className="hover:text-indigo-600 transition">
                    github.com/maruthi
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 md:mt-0">
              <button
                className="w-full px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
                onClick={generatePdf}
              >
                Download My Resume
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Send me a message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "This is a placeholder. Replace with your email handling."
                );
              }}
              className="mt-6 flex flex-col gap-5"
            >
              <input
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                placeholder="Your name"
              />
              <input
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                placeholder="Your email"
              />
              <textarea
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
                rows="5"
                placeholder="Message"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-bold text-lg shadow-md hover:bg-indigo-700 transition"
              >
                Send message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}