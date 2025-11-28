'use client';

import Image from 'next/image';
import Tag from './Tag.jsx';
import { useRef, useState, useEffect } from 'react';

export default function ProjectCard({ project }) {
  const [error, setError] = useState(false);

  // ===== CONFIG (tweak these to match Ahmed's feel) =====
  const CONFIG = {
    perspective: 800,
    maxRotate: 5,        // +/- degrees
    scale: 1.045,        // scale on hover
    lerp: 0.18,          // smoothing factor (higher = snappier)
    parallaxPx: 10,      // image parallax travel
    sheenOpacity: 0.18,  // max opacity of diagonal sheen
    reduceMotionLerp: 0.35
  };

  // ===== REFS =====
  const cardRef = useRef(null);
  const sheenRef = useRef(null);
  const imgRef = useRef(null);
  const rafRef = useRef(0);
  const runningRef = useRef(false);
  const hoverRef = useRef(false);

  // Target/current state for animation
  const target = useRef({ rx: 0, ry: 0, s: 1, px: 50, py: 50 });
  const current = useRef({ rx: 0, ry: 0, s: 1, px: 50, py: 50 });

  // Respect prefers-reduced-motion
  const reduceMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const LERP = reduceMotion ? CONFIG.reduceMotionLerp : CONFIG.lerp;

  const startLoop = () => {
    if (runningRef.current) return;
    runningRef.current = true;

    const loop = () => {
      const nx = current.current.rx + (target.current.rx - current.current.rx) * LERP;
      const ny = current.current.ry + (target.current.ry - current.current.ry) * LERP;
      const ns = current.current.s + (target.current.s - current.current.s) * LERP;
      const npx = current.current.px + (target.current.px - current.current.px) * LERP;
      const npy = current.current.py + (target.current.py - current.current.py) * LERP;

      current.current = { rx: nx, ry: ny, s: ns, px: npx, py: npy };

      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(${CONFIG.perspective}px) rotateX(${nx.toFixed(2)}deg) rotateY(${ny.toFixed(2)}deg) scale(${ns.toFixed(3)})`;
        // Soft shadow (darker in dark mode, subtler in light mode)
        const inLight = document.documentElement.classList.contains('light') ||
                        cardRef.current.closest('.light');
        const baseShadowDark = '0 10px 28px -6px rgba(0,0,0,0.55)';
        const hoverShadowDark = '0 18px 40px -10px rgba(0,0,0,0.65)';
        const baseShadowLight = '0 8px 24px -6px rgba(15,23,42,0.18)';
        const hoverShadowLight = '0 16px 42px -12px rgba(15,23,42,0.25)';
        cardRef.current.style.boxShadow = hoverRef.current
          ? (inLight ? hoverShadowLight : hoverShadowDark)
          : (inLight ? baseShadowLight : baseShadowDark);
      }

      // Parallax image shift (inverse direction for depth)
      if (imgRef.current) {
        const shiftX = ((npx - 50) / 50) * CONFIG.parallaxPx * -1;
        const shiftY = ((npy - 50) / 50) * CONFIG.parallaxPx * -1;
        imgRef.current.style.transform =
          `translate3d(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px, 0) scale(1.03)`;
      }

      // Sheen diagonal highlight
      if (sheenRef.current) {
        if (hoverRef.current) {
          sheenRef.current.style.opacity = CONFIG.sheenOpacity.toString();
          // Move gradient focal point
          sheenRef.current.style.background =
            `linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) ${(npx)}%, rgba(255,255,255,0) 100%)`;
        } else {
          sheenRef.current.style.opacity = '0';
        }
      }

      const atRest =
        Math.abs(target.current.rx - nx) < 0.03 &&
        Math.abs(target.current.ry - ny) < 0.03 &&
        Math.abs(target.current.s - ns) < 0.002;

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
    target.current.s = CONFIG.scale;
    startLoop();
  };

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1

    target.current.ry = (px - 0.5) * (CONFIG.maxRotate * 2);
    target.current.rx = -(py - 0.5) * (CONFIG.maxRotate * 2);
    target.current.px = px * 100;
    target.current.py = py * 100;
  };

  const handleLeave = () => {
    hoverRef.current = false;
    target.current = { rx: 0, ry: 0, s: 1, px: target.current.px, py: target.current.py };
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
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group card card-hover flex flex-col gap-3 transform-gpu will-change-transform contain-paint"
      style={{
        transform: `perspective(${CONFIG.perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: 'box-shadow 260ms ease',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Sheen layer */}
      <div
        ref={sheenRef}
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          opacity: 0,
          background: 'linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%)',
          mixBlendMode: 'overlay',
          transition: 'opacity 300ms ease'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="aspect-video w-full rounded-md bg-neutral-800 light:bg-slate-200 overflow-hidden relative">
          {project.image && !error ? (
            <Image
              ref={imgRef}
              src={project.image}
              alt={project.alt || project.title}
              width={800}
              height={450}
              className="object-cover w-full h-full will-change-transform transition-transform duration-[680ms] ease-[cubic-bezier(.19,1,.22,1)]"
              onError={() => setError(true)}
              priority={false}
            />
          ) : (
            <div className="flex items-center justify-center h-full p-4 text-center dark:text-neutral-500 text-neutral-600 text-xs md:text-sm">
              {project.alt || 'Image unavailable'}
            </div>
          )}
          {/* subtle color wash on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-15 transition duration-500 bg-gradient-to-br from-cyan-500/40 via-indigo-500/35 to-blue-600/40 mix-blend-overlay" />
        </div>

        <h4 className="mt-4 text-lg font-semibold transition-colors group-hover:text-cyan-400 dark:group-hover:text-cyan-300 dark:text-neutral-100 text-neutral-800">
          {project.title}
        </h4>

        <p className="text-sm dark:text-neutral-300 text-neutral-700">
          {project.summary}
        </p>

        {project.achievements?.length ? (
          <ul className="mt-2 text-xs dark:text-cyan-300 text-indigo-600 list-disc ml-4 space-y-1">
            {project.achievements.map(a => <li key={a}>{a}</li>)}
          </ul>
        ) : null}

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3">
            {techs.map(t => <Tag key={t}>{t}</Tag>)}
          </div>
        )}

        <div className="flex gap-3 pt-4 text-sm relative z-10">
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
