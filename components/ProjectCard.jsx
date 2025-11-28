'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  const techs = Array.isArray(project?.technologies) ? project.technologies : [];
  const achievements = Array.isArray(project?.achievements) ? project.achievements : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="
        portfolio-project-card
        group relative overflow-hidden rounded-xl
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        flex flex-col
      "
    >
      {/* Dark by default, light when .light is present */}
      <style jsx>{`
        .portfolio-project-card {
          background: #0f0f12; /* dark panel */
          border: 1px solid rgba(80, 80, 80, 0.35);
        }
        :global(.light) .portfolio-project-card {
          background: #ffffff; /* light panel */
          border-color: #d1d5db; /* gray-300 */
        }
        .portfolio-project-card h4 {
          color: #f3f4f6; /* near-white title in dark */
        }
        :global(.light) .portfolio-project-card h4 {
          color: #0f1113; /* dark title in light */
        }
        .portfolio-project-card p {
          color: #d1d5db; /* body text in dark */
        }
        :global(.light) .portfolio-project-card p {
          color: #334155; /* slate-700 in light */
        }
      `}</style>

      {/* Image area */}
      <div className="aspect-video overflow-hidden relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt || project.title}
            width={960}
            height={540}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-neutral-400 px-4">
            {project.alt || 'No image'}
          </div>
        )}

        {/* Ahmed-style overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h4 className="text-lg font-bold">{project.title}</h4>

        <p className="text-sm leading-relaxed">
          {project.summary || project.description}
        </p>

        {achievements.length > 0 && (
          <ul className="text-xs text-indigo-400 list-disc ml-4 space-y-1">
            {achievements.map(a => <li key={a}>{a}</li>)}
          </ul>
        )}

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {techs.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              title="GitHub repository"
              className="icon-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.43.37.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              title="Live site"
              className="icon-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
