import React, { useEffect, useRef } from "react";

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".skill-bar").forEach((el) => {
            const w = el.getAttribute("data-w");
            el.style.width = w + "%";
          });
        }
      });
    }, { threshold: 0.3 });

    if (containerRef.current) {
      containerRef.current.querySelectorAll(".skill-item").forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-indigo-600">Skills</h2>
        <p className="mt-3 text-gray-600">Tech skills with relative strength — useful to recruiters scanning for fit.</p>

        <div ref={containerRef} className="mt-6 space-y-4">
          {[
            { name: "Java", level: "Expert", w: 95 },
            { name: "Spring Boot", level: "Advanced", w: 88 },
            { name: "AWS (DynamoDB, S3)", level: "Advanced", w: 82 },
            { name: "Kafka & Event-Driven", level: "Proficient", w: 78 }
          ].map((s, i) => (
            <div key={i} className="skill-item">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">{s.name}</div>
                <div className="text-xs text-gray-500">{s.level}</div>
              </div>
              <div className="w-full bg-white rounded-full h-3 mt-2 shadow-sm">
                <div data-w={s.w} className="skill-bar h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500" style={{width: 0}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
