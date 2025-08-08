// Skills.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    { name: "Java", type: "core", related: ["Spring Boot", "Kafka", "RESTful APIs"] },
    { name: "Spring Boot", type: "node", related: ["Java"] },
    { name: "Kafka", type: "node", related: ["Java"] },
    { name: "RESTful APIs", type: "node", related: ["Java"] },
    { name: "AWS", type: "core", related: ["DynamoDB", "S3"] },
    { name: "DynamoDB", type: "node", related: ["AWS"] },
    { name: "S3", type: "node", related: ["AWS"] },
    { name: "Tools", type: "core", related: ["Git", "CI/CD"] },
    { name: "Git", type: "node", related: ["Tools"] },
    { name: "CI/CD", type: "node", related: ["Tools"] },
  ];
  
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
    show: { opacity: 1, y: 0 },
  };

  const getBackgroundColor = (skillName) => {
    if (hoveredSkill && hoveredSkill === skillName) {
      return "bg-indigo-600 text-white";
    }
    if (hoveredSkill && skillsData.find(s => s.name === hoveredSkill)?.related.includes(skillName)) {
      return "bg-indigo-200 text-indigo-800";
    }
    if (hoveredSkill && skillsData.find(s => s.name === skillName)?.related.includes(hoveredSkill)) {
      return "bg-indigo-200 text-indigo-800";
    }
    return "bg-white text-gray-800";
  };

  const getShadow = (skillName) => {
    if (hoveredSkill && (hoveredSkill === skillName || skillsData.find(s => s.name === hoveredSkill)?.related.includes(skillName) || skillsData.find(s => s.name === skillName)?.related.includes(hoveredSkill))) {
      return "shadow-lg scale-105 transform";
    }
    return "shadow";
  };

  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
          My Skill Tree
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          A visual representation of my technical skills and how they connect.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`p-6 rounded-2xl border border-gray-200 transition-all duration-300 transform ${getBackgroundColor(skill.name)} ${getShadow(skill.name)}`}
            >
              <h3 className="text-lg font-bold">{skill.name}</h3>
              <p className="mt-2 text-sm">
                {skill.type === "core" ? "Core Expertise" : "Supporting Skill"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}