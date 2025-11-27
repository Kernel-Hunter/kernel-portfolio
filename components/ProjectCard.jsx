'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { useRef, useState, useEffect } from 'react';

export default function ProjectCard({ project }) {
  const [error, setError] = useState(false);

  // Refs for tilt animation
  const tiltRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(0);
  const runningRef = useRef(false);
  const hoverRef = useRef(false);

  // Target/current transform state
  const target = useRef({ rx: 0, ry: 0, s: 1, gx: 50, gy: 50 });
  const current = useRef({ rx: 0, ry: 0, s: 1, gx: 50, gy: 50 });

  const PERSPECTIVE = 900;
  const MAX_ROT = 7;         // degrees (reduce for smoother feel)
  const SCALE_HOVER = 1.035; // slight pop
  const LERP = 0.12;         // smoothing factor

  const startLoop = () => {
    if (runningRef.current) return;
    runningRef.current = true;
    const loop = () => {
      // Lerp toward target
      const nx = current.current.rx + (target.current.rx - current.current.rx) * LERP;
      const ny = current.current.ry + (target.current.ry - current.current.ry) * LERP;
      const ns = current.current.s + (target.current.s - current.current.s) * LERP;
      const ngx = current.current.gx + (target.current.gx - current.current.gx) * LERP;
      const ngy = current.current.gy + (target.current.gy - current.current.gy) * LERP;

      current.current = { rx: nx, ry: ny, s: ns, gx: ngx, gy: ngy };

      if (tiltRef.current) {
        tiltRef.current.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${nx.toFixed(2)}deg) rotateY(${ny.toFixed(2)}deg) scale(${ns.toFixed(3)})`;
      }
      if (glareRef.current) {
        glareRef.current.style.opacity = hoverRef.current ? '0.20' : '0';
        glareRef.current.style.background = `radial-gradient(220px 140px at ${ngx.toFixed(1)}% ${ngy.toFixed(1)}%, rgba(255,255,255,0.25), transparent 60%)`;
      }

      const atRest =
        Math.abs(target.current.rx - nx) < 0.02 &&
        Math.abs(target.current.ry - ny) < 0.02 &&
        Math.abs(target.current.s - ns) < 0.001;

      if (!hoverRef.current && atRest) {
        runningRef.current = false;
        rafRef.current = 0;
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  };

  const handleEnter = () => {
    hoverRef.current = true;
    target.current.s = SCALE_HOVER;
    startLoop();
  };

  const handleMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1

    // Set target rotation and glare position
    target.current.ry = (px - 0.5) * (MAX_ROT * 2);   // rotateY left/right
    target.current.rx = -(py - 0.5) * (MAX_ROT * 2);  // rotateX up/down
    target.current.gx = Math.min(100, Math.max(0, px * 100));
    target.current.gy = Math.min(100, Math.max(0, py * 100));
  };

  const handleLeave = () => {
    hoverRef.current = false;
    target.current = { rx: 0, ry: 0, s: 1, gx: current.current.gx, gy: current.current.gy };
    startLoop();
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const techs = Array.isArray(project?.technologies) ? project.technologies : [];

  return (
    <div
      ref={tiltRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group card card-hover flex flex-col gap-3 transform-gpu will-change-transform contain-paint"
      style={{
        transform: `perspective(${PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'box-shadow 200ms ease', // avoid transform CSS transitions during move
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Glare layer */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          opacity: 0,
          transition: 'opacity 200ms ease-out',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content wrapper stays above glare */}
      <div className="relative z-10">
        <div className="lift aspect-video w-full rounded-md bg-neutral-800 light:bg-slate-200 overflow-hidden relative">
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
            <div className="flex items-center justify-center h-full p-4 text-center dark:text-neutral-500 text-neutral-600 text-xs md:text-sm">
              {project.alt || 'Image unavailable'}
            </div>
          )}
          {/* color overlay on hover (click-through) */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-600 mix-blend-overlay" />
        </div>

        <h4 className="lift text-lg font-semibold transition-colors group-hover:text-cyan-500 dark:group-hover:text-cyan-400 dark:text-neutral-100 text-neutral-800 mt-3">
          {project.title}
        </h4>

        <p className="lift text-sm dark:text-neutral-300 text-neutral-700">
          {project.summary}
        </p>

        {project.achievements?.length ? (
          <ul className="lift text-xs dark:text-cyan-300 text-indigo-600 list-disc ml-4 space-y-1">
            {project.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
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
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
