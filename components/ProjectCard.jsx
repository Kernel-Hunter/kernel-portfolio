'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [error, setError] = useState(false);
  const techs = Array.isArray(project?.technologies) ? project.technologies : [];

  return (
    <div className="group card card-hover flex flex-col gap-3">
      <div className="lift aspect-video w-full rounded-md bg-neutral-800 light:bg-slate-200 overflow-hidden relative">
        {project.image && !error ? (
          <Image
            src={project.image}
            alt={project.alt || project.title}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            onError={() => setError(true)}
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full p-4 text-center dark:text-neutral-500 text-neutral-600 text-xs md:text-sm">
            {project.alt || 'Image unavailable'}
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-600 mix-blend-overlay" />
      </div>

      <h4 className="lift text-lg font-semibold transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400 dark:text-neutral-100 text-neutral-800">
        {project.title}
      </h4>

      <p className="lift text-sm dark:text-neutral-300 text-neutral-700">
        {project.summary}
      </p>

      {project.achievements?.length ? (
        <ul className="lift text-xs dark:text-cyan-300 text-indigo-600 list-disc ml-4 space-y-1">
          {project.achievements.map(a => <li key={a}>{a}</li>)}
        </ul>
      ) : null}

      {techs.length > 0 && (
        <div className="lift flex flex-wrap gap-2 pt-2">
          {techs.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      <div className="lift flex gap-3 pt-3 text-sm relative z-10">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository"
            title="Open GitHub repository"
            className="icon-btn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="fill-current">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.43.37.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live site"
            title="Open live site"
            className="icon-btn"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="fill-current">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
