import Image from 'next/image';
import Tag from './Tag.jsx';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [error, setError] = useState(false);

  return (
    <div className="card card-hover flex flex-col gap-3">
      <div className="lift aspect-video w-full rounded-md bg-neutral-800 overflow-hidden relative">
        {project.image && !error ? (
          <Image
            src={project.image}
            alt={project.alt || project.title}
            width={800}
            height={450}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setError(true)}
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full p-4 text-center text-neutral-500 text-xs md:text-sm">
            {project.alt || 'Image unavailable'}
          </div>
        )}
        {/* Optional subtle overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-600 mix-blend-overlay" />
      </div>

      <h4 className="lift text-lg font-semibold transition-colors group-hover:text-cyan-400">
        {project.title}
      </h4>

      <p className="lift text-sm text-neutral-300 light:text-neutral-700">
        {project.summary}
      </p>

      {project.achievements?.length && (
        <ul className="lift text-xs text-cyan-300 light:text-indigo-600 list-disc ml-4 space-y-1 animate-floatUp">
          {project.achievements.map(a => <li key={a}>{a}</li>)}
        </ul>
      )}

      <div className="lift flex flex-wrap gap-2 pt-2">
        {project.technologies.map(t => <Tag key={t}>{t}</Tag>)}
      </div>

      <div className="lift flex gap-3 pt-3 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 underline decoration-neutral-600"
          >
            Repo
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 underline decoration-neutral-600"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
