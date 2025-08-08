import React from "react";

export default function Hero() {
  return (
    <section className="hero-bg pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
<h1 className="text-5xl font-bold text-gray-900">  Hi — I’m <span className="text-yellow-300">Maruthi</span>
            <div className="text-indigo-700 text-lg mt-2 font-medium">Java Developer & Backend Engineer</div>
          </h1>
          <p className="mt-6 text-gray-600">I build scalable backend systems using Java and Spring Boot, optimise data flows in MongoDB, and design event-driven pipelines with Kafka. I enjoy turning complex problems into simple, reliable solutions.</p>

          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:scale-[1.02] transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition">Contact Me</a>
            <a href="#" id="download-resume" className="ml-2 text-sm text-indigo-600 hover:underline">Download Resume</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-600">
            <div className="p-3 bg-white rounded-lg shadow">
              <div className="text-xs text-gray-400">Experience</div>
              <div className="text-lg font-semibold">3+ yrs</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow">
              <div className="text-xs text-gray-400">Tech</div>
              <div className="text-lg font-semibold">Java • AWS</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow">
              <div className="text-xs text-gray-400">Open to</div>
              <div className="text-lg font-semibold">SDE II / Backend</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-72 h-72 rounded-2xl shadow-xl overflow-hidden">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQHiCi1UplAgcw/profile-displayphoto-shrink_800_800/B56Zg6aI0RHkAc-/0/1753326588449?e=1757548800&v=beta&t=H43k1pGjbMHWWXevVqQpDmm5rJTSQKF6Z_TQNLXIguM" alt="profile" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -right-8 -bottom-6 w-60 h-20 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white p-4 shadow-lg">
            <div className="font-semibold">Open to work</div>
            <div className="text-xs opacity-90 mt-1">Available for Backend & Full-stack roles — Hyderabad</div>
          </div>
        </div>
      </div>
    </section>
  );
}
