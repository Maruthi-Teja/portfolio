import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "Event-Driven Document Generator",
    shortDesc: "Asynchronous document processing using Kafka to decouple workloads and improve throughput.",
    longDesc: "Designed an asynchronous pipeline using Kafka to reliably generate and store documents. Implemented retry/backoff, idempotency keys, and monitoring alerts to reduce failures by 40%.",
    tech: ["Java", "Spring Boot", "Kafka", "MongoDB"],
  },
  {
    title: "AWS Investment Management App",
    shortDesc: "Full-stack app with Spring Boot backend, Angular frontend and DynamoDB for storage.",
    longDesc: "Full-stack application with Spring Boot backend, Angular frontend, and DynamoDB persistence. Automated deployments using Elastic Beanstalk and hosted frontend on S3.",
    tech: ["Spring Boot", "Angular", "DynamoDB", "S3", "Elastic Beanstalk"],
  },
  {
    title: "JWT Role-Based Authentication",
    shortDesc: "Implemented secure role-based APIs with JWT and fine-grained access controls.",
    longDesc: "Built a role-based auth system using JWT to secure APIs and restrict access by role and scopes. Added refresh-token flow and security hardening.",
    tech: ["Spring Security", "JWT", "OAuth2"],
  },
];

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const downloadResume = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Maruthi Teja", 10, 10);
    doc.setFontSize(11);
    doc.text("Java Backend Engineer", 10, 20);
    doc.text("Experience:", 10, 35);
    doc.text("- Yahoo (Nov 2024 - Present)", 10, 45);
    doc.text("- Infosys (2023 - 2024)", 10, 55);
    doc.text("- Cognizant (2021 - 2023)", 10, 65);
    doc.text("Skills: Java, Spring Boot, AWS, MongoDB, Kafka", 10, 80);
    doc.save("Maruthi_Teja_Resume.pdf");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">Featured Projects</h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          A selection of projects that showcase my expertise in building robust, scalable backend systems.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => openModal(project)}
              className="bg-slate-50 p-8 rounded-2xl shadow-xl border border-slate-100 cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-3 text-gray-600">{project.shortDesc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-3xl font-extrabold text-indigo-700">{modalContent.title}</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">{modalContent.longDesc}</p>
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {modalContent.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}