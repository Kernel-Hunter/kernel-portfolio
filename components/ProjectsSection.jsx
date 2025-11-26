import projects from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h3 className="section-title">Projects</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}