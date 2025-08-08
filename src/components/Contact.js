import React from "react";
import { jsPDF } from "jspdf";

export default function Contact() {
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

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-indigo-600">Contact</h2>
      <p className="mt-3 text-gray-600">Interested in working together? Reach out via email or LinkedIn.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-gray-600">Email me at <a href="mailto:maruthi@example.com" className="text-indigo-600">maruthi@example.com</a> or message on <a href="#" className="text-indigo-600">LinkedIn</a>.</p>

          <div className="mt-4">
            <form onSubmit={(e) => { e.preventDefault(); alert("This is a placeholder. Replace with your email handling."); }}>
              <div className="flex flex-col gap-3">
                <input required className="border rounded-lg px-3 py-2" placeholder="Your name" />
                <input required className="border rounded-lg px-3 py-2" placeholder="Your email" />
                <textarea required className="border rounded-lg px-3 py-2" rows="4" placeholder="Message"></textarea>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Send message</button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={generatePdf}>Download Resume (PDF)</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Find me</h3>
          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li>LinkedIn: <a href="#" className="text-indigo-600">linkedin.com/in/maruthi</a></li>
            <li>GitHub: <a href="#" className="text-indigo-600">github.com/maruthi</a></li>
            <li>Location: Hyderabad, India</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
