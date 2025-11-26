'use client';

import { useEffect, useState } from 'react';

const softSkills = [
  'Leadership',
  'Communication',
  'Innovation',
  'Teamwork',
  'Problem Solving',
];

const certGroups = [
  {
    org: 'Harvard University',
    items: [
      'Cybersecurity: Managing Risk in the Information Age',
      'CS50: Computer Science for Game Development (edX)',
    ],
  },
  {
    org: 'Mind Luster, London, UK',
    items: [
      'Machine Learning & AI with Python',
      'Java GUI',
      'Python Programming',
    ],
  },
  {
    org: 'Coursera',
    items: [
      'Build Your First GUI App with Java',
      'Object-Oriented Programming with Java',
      'Object-Oriented Java: Inheritance and Encapsulation',
      'Michigan State University: Game Design and Development with Unity 2020 Specialization',
    ],
  },
  {
    org: 'Other',
    items: [
      'IELTS UKVI Certified',
      'Ethical Hacking & Cybersecurity Diploma',
    ],
  },
];

export default function SkillsCerts() {
  // Trigger entrance animation after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="skills-certifications" className="py-20 border-t dark:border-neutral-800 border-neutral-300">
      <div className="max-w-6xl mx-auto px-5">
        <h3 className="section-title text-center">Soft Skills & Certifications</h3>

        {/* Decorative background */}
        <div className="relative">
          <div className="decor-orbs" aria-hidden="true" />

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Soft Skills panel */}
            <div className={`panel group ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-2'}`}>
              <div className="panel-header">
                <span className="panel-dot" />
                <h4 className="panel-title">Soft Skills</h4>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="pill hover:scale-[1.03] transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="panel-glow" />
            </div>

            {/* Certifications column: split across two panels for rhythm */}
            <div className="flex flex-col gap-10 lg:col-span-2">
              {certGroups.map((group, idx) => (
                <div
                  key={group.org}
                  className={`panel group ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-2'}`}
                  style={{ animationDelay: `${0.08 * (idx + 1)}s` }}
                >
                  <div className="panel-header">
                    <span className="panel-dot" />
                    <h4 className="panel-title">{group.org}</h4>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="cert-item"
                      >
                        <span className="cert-bullet" />
                        <span className="cert-text">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="panel-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}