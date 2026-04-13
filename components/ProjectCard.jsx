'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ project, index = 0 }) {
  const techs = Array.isArray(project?.technologies) ? project.technologies : [];
  const achievements = Array.isArray(project?.achievements) ? project?.achievements : [];
  const cardRef = useRef(null);

  // Mouse-tracking tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="group relative rounded-xl flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Card shell — handles background, border, shadow via CSS class in globals */}
      <div className="project-card-shell absolute inset-0 rounded-xl pointer-events-none" />

      {/* Glow layer that appears on hover */}
      <div className="project-card-glow absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image area */}
      <div className="aspect-video overflow-hidden relative rounded-t-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt || project.title}
            width={960}
            height={540}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            priority={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-neutral-400 px-4 bg-neutral-900">
            {project.alt || 'No image'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-3">
        <h4 className="text-lg font-bold project-card-title">{project.title}</h4>

        <p className="text-sm leading-relaxed project-card-body">
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
               aria-label="GitHub repository" title="GitHub repository" className="icon-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.43.37.81 1.11.81 2.25 0 1.63-.02 2.95-.02 3.35 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
               aria-label="Live site" title="Live site" className="icon-btn">
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
