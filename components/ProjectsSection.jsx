'use client';

import ProjectCard from './ProjectCard.jsx';
import projects from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-transparent transition-colors"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id || p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
