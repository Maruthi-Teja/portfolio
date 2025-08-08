import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Yahoo",
    role: "Software Engineer (HGT-1)",
    period: "Nov 2024 — Present",
    logo: "Y",
    highlights: [
      "Worked on cross-team features and backend reliability improvements.",
      "Mentored new joiners and improved CI/CD pipelines."
    ]
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    period: "2021 — 2023",
    logo: "C",
    highlights: [
      "Built a wealth management backend handling 5–6M MongoDB records and event-driven pipelines using Kafka.",
      "Implemented role-based security and optimized queries with indexing strategies."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 py-16 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400">Experience</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                  {exp.logo}
                </div>
                <div>
                  <div className="font-semibold">{exp.company} — {exp.role}</div>
                  <div className="text-xs text-gray-300">{exp.period}</div>
                </div>
              </div>
              <ul className="mt-3 text-gray-200 list-disc pl-5">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
