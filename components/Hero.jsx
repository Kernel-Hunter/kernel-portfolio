'use client';

export default function Hero() {
  return (
    <section className="py-24 flex flex-col gap-6">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I’m <span className="gradient-text">Karim</span>.
      </h2>
      <p className="text-lg md:text-xl dark:text-neutral-300 text-neutral-700 max-w-3xl">
        Software Engineer driven by curiosity and creativity. I’ve built underwater robots, smart IoT devices,
        and AI-powered systems—collaborating with international organizations on cutting-edge projects.
        Engineering is the fusion of imagination, precision, and purpose.
      </p>
      <div className="flex gap-4 pt-4">
        <a
          href="#projects"
          className="px-5 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold shadow transition"
        >
          Explore Projects
        </a>
        <a
          href="#about"
          className="px-5 py-3 rounded-md border border-neutral-700 hover:border-cyan-400 font-semibold
                     dark:text-neutral-200 text-neutral-700 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
