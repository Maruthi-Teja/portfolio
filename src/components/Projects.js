import React, { useState } from "react";
import { jsPDF } from "jspdf";

const projectData = {
  p1: {
    title: "Event-Driven Document Generator",
    body: (
      <>
        <p className="text-gray-700">
          Designed an asynchronous pipeline using Kafka to reliably generate
          and store documents. Implemented retry/backoff, idempotency keys, and
          monitoring alerts to reduce failures by 40%.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Tech: Java, Spring Boot, Kafka, MongoDB
        </p>
      </>
    ),
  },
  p2: {
    title: "AWS Investment Management App",
    body: (
      <>
        <p className="text-gray-700">
          Full-stack application with Spring Boot backend, Angular frontend,
          and DynamoDB persistence. Automated deployments using Elastic
          Beanstalk and hosted frontend on S3.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Tech: Spring Boot, Angular, DynamoDB, S3, Elastic Beanstalk
        </p>
      </>
    ),
  },
  p3: {
    title: "JWT Role-Based Authentication",
    body: (
      <>
        <p className="text-gray-700">
          Built a role-based auth system using JWT to secure APIs and restrict
          access by role and scopes. Added refresh-token flow and security
          hardening.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Tech: Spring Security, JWT, OAuth2 concepts
        </p>
      </>
    ),
  },
};

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-indigo-600">Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          onClick={() =>
            openModal(
              <>
                <h3 className="text-xl font-semibold text-indigo-600">
                  {projectData.p1.title}
                </h3>
                {projectData.p1.body}
              </>
            )
          }
        >
          <div className="font-semibold">{projectData.p1.title}</div>
          <p className="mt-2 text-sm text-gray-600">
            Asynchronous document processing using Kafka to decouple workloads
            and improve throughput.
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Tech: Java, Kafka, Spring Boot, MongoDB
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          onClick={() =>
            openModal(
              <>
                <h3 className="text-xl font-semibold text-indigo-600">
                  {projectData.p2.title}
                </h3>
                {projectData.p2.body}
              </>
            )
          }
        >
          <div className="font-semibold">{projectData.p2.title}</div>
          <p className="mt-2 text-sm text-gray-600">
            Full-stack app with Spring Boot backend, Angular frontend and
            DynamoDB for storage.
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Tech: Spring Boot, DynamoDB, S3, Elastic Beanstalk
          </div>
        </div>

        <div
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          onClick={() =>
            openModal(
              <>
                <h3 className="text-xl font-semibold text-indigo-600">
                  {projectData.p3.title}
                </h3>
                {projectData.p3.body}
              </>
            )
          }
        >
          <div className="font-semibold">{projectData.p3.title}</div>
          <p className="mt-2 text-sm text-gray-600">
            Implemented secure role-based APIs with JWT and fine-grained access
            controls.
          </p>
          <div className="mt-4 text-xs text-gray-500">
            Tech: Java, Spring Security, JWT
          </div>
        </div>
      </div>

      <button
        onClick={downloadResume}
        className="mt-8 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:scale-[1.02] transition"
      >
        Download Resume
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-500"
            >
              ✕
            </button>
            <div>{modalContent}</div>
          </div>
        </div>
      )}
    </section>
  );
}
