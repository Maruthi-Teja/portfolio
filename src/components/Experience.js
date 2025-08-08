import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-indigo-600">Experience</h2>
        <div className="mt-8 space-y-6">
          <article className="bg-white p-6 rounded-xl shadow flex gap-6">
            <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">Y</div>
            <div>
              <div className="font-semibold">Yahoo — Software Engineer (HGT-1)</div>
              <div className="text-xs text-gray-400">Nov 2024 — Present</div>
              <ul className="mt-3 text-gray-700 list-disc pl-5">
                <li>Worked on cross-team features and backend reliability improvements.</li>
                <li>Mentored new joiners and improved CI/CD pipelines.</li>
              </ul>
            </div>
          </article>

          <article className="bg-white p-6 rounded-xl shadow flex gap-6">
            <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">I</div>
            <div>
              <div className="font-semibold">Infosys — Senior Systems Engineer</div>
              <div className="text-xs text-gray-400">2023 — 2024</div>
              <ul className="mt-3 text-gray-700 list-disc pl-5">
                <li>Developed Spring Boot services with AWS DynamoDB and Elastic Beanstalk deployments.</li>
                <li>Led performance tuning and reduced cold-starts for server-side components.</li>
              </ul>
            </div>
          </article>

          <article className="bg-white p-6 rounded-xl shadow flex gap-6">
            <div className="w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">C</div>
            <div>
              <div className="font-semibold">Cognizant — Programmer Analyst</div>
              <div className="text-xs text-gray-400">2021 — 2023</div>
              <ul className="mt-3 text-gray-700 list-disc pl-5">
                <li>Built a wealth management backend handling 5–6M MongoDB records and event-driven pipelines using Kafka.</li>
                <li>Implemented role-based security and optimized queries with indexing strategies.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
