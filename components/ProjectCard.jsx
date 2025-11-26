import Tag from './Tag.jsx';

export default function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="aspect-video w-full rounded-md bg-neutral-800 flex items-center justify-center text-neutral-600 text-xs md:text-sm">
        {project.image ? project.title : 'Image Coming'}
      </div>
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="text-sm text-neutral-300">{project.summary}</p>
      {project.achievements?.length && (
        <ul className="text-xs text-cyan-300 list-disc ml-4">
          {project.achievements.map(a => <li key={a}>{a}</li>)}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="flex gap-3 pt-3 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 underline decoration-neutral-600"
          >Repo</a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 underline decoration-neutral-600"
          >Live</a>
        )}
      </div>
    </div>
  );
}