'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  const techs = Array.isArray(project?.technologies) ? project.technologies : [];
  const achievements = Array.isArray(project?.achievements) ? project?.achievements : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      style={{ willChange: 'transform' }}
      className="group relative rounded-2xl flex flex-col overflow-hidden"
    >
      {/* Base card layer */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300"
        style={{
          background: 'var(--pc-bg)',
          border: '1px solid var(--pc-border)',
          boxShadow: 'var(--pc-shadow)',
        }}
      />

      {/* Glow bloom — fades in on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: 'var(--pc-hover-shadow)',
          border: '1px solid var(--pc-hover-border)',
        }}
      />

      {/* Soft top glow bloom */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(6,182,212,0.12), transparent 80%)',
        }}
      />

      {/* Image */}
      <div className="aspect-video overflow-hidden relative rounded-t-2xl z-10">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt || project.title}
            width={960}
            height={540}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div
            className="flex items-center justify-center h-full text-sm px-4"
            style={{ background: 'var(--pc-img-fallback)', color: '#9ca3af' }}
          >
            {project.alt || 'No image'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-3">
        <h4
          className="text-lg font-bold transition-colors duration-200"
          style={{ color: 'var(--pc-title)' }}
        >
          {project.title}
        </h4>

        <p className="text-sm leading-relaxed" style={{ color: 'var(--pc-body)' }}>
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
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
               aria-label="GitHub repository" className="icon-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.43.37.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
               aria-label="Live site" className="icon-btn">
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
