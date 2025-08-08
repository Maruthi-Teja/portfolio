import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-indigo-600">About Me</h2>
          <p className="mt-4 text-gray-600">I am a Software Engineer with practical experience building enterprise-grade applications. My focus areas include backend architecture, system reliability, and performance optimisation. I enjoy mentoring junior engineers and taking ownership of product features end-to-end.</p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Built a Spring Boot application managing groups & investors processing 20k+ requests/day.</li>
            <li>• Implemented Kafka-based document generation to decouple and scale reporting workloads.</li>
            <li>• Deployed full-stack apps on AWS using S3, Elastic Beanstalk and DynamoDB.</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg" href="#contact">Hire Me</a>
            <a className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg" href="#projects">See Projects</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Quick Facts</h3>
          <dl className="mt-4 text-sm text-gray-700 space-y-3">
            <div><dt className="text-gray-400">Location</dt><dd>Hyderabad, India</dd></div>
            <div><dt className="text-gray-400">Experience</dt><dd>3 years</dd></div>
            <div><dt className="text-gray-400">Current</dt><dd>Yahoo — Software Engineer</dd></div>
            <div><dt className="text-gray-400">Open to</dt><dd>SDE II / Backend</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
