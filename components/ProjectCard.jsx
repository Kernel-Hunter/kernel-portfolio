'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ProjectCard({ project }) {
  const [error, setError] = useState(false);

  // Base scale motion value
  const scale = useMotionValue(1);
  // Spring for smooth hover easing
  const smoothScale = useSpring(scale, {
    stiffness: 220,
    damping: 24,
    mass: 0.6
  });

  return (
    <motion.div
      style={{ scale: smoothScale }}
      onHoverStart={() => scale.set(1.035)}
      onHoverEnd={() => scale.set(1)}
      className="group card card-hover flex flex-col gap-3 will-change-transform"
    >
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

        {/* Overlay transition */}
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.22 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-600 mix-blend-overlay pointer-events-none"
        />
      </div>

      <motion.h4
        layout="position"
        className="lift text-lg font-semibold transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400 dark:text-neutral-100 text-neutral-800"
      >
        {project.title}
      </motion.h4>

      <motion.p
        layout="position"
        className="lift text-sm dark:text-neutral-300 text-neutral-700"
      >
        {project.summary}
      </motion.p>

      {project.achievements?.length && (
        <motion.ul
          initial={{ y: 4, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lift text-xs dark:text-cyan-300 text-indigo-600 list-disc ml-4 space-y-1"
        >
          {project.achievements.map(a => <li key={a}>{a}</li>)}
        </motion.ul>
      )}

      <motion.div
        layout="position"
        className="lift flex flex-wrap gap-2 pt-2"
      >
        {project.technologies.map(t => <Tag key={t}>{t}</Tag>)}
      </motion.div>

      <motion.div
        layout="position"
        className="lift flex gap-3 pt-3 text-sm"
      >
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 underline decoration-neutral-400"
          >
            Repo
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 underline decoration-neutral-400"
          >
            Live
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
