'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="flex flex-col-reverse items-center gap-10 md:grid md:grid-cols-[1fr_auto] md:items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 md:pr-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
            Hi, I’m <span className="gradient-text">Karim Masmoudi</span>
          </h2>
          <p className="text-lg md:text-xl dark:text-neutral-300 text-neutral-700 text-center md:text-left">
            Software Engineer driven by curiosity and creativity. I’ve built underwater robots, smart IoT devices,
            and AI-powered systems—collaborating with international organizations on cutting-edge projects.
            Engineering is the fusion of imagination, precision, and purpose.
          </p>
          <div className="flex gap-4 pt-2 justify-center md:justify-start">
            <a href="#projects" className="px-5 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold shadow transition">
              Explore Projects
            </a>
            <a href="#about" className="px-5 py-3 rounded-md border border-neutral-700 hover:border-cyan-400 font-semibold dark:text-neutral-200 text-neutral-700 transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Photo (smaller) */}
        <div className="w-full">
          <div className="mx-auto max-w-[220px] md:max-w-[260px] lg:max-w-[300px] rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-300 bg-neutral-900/40 light:bg-white/70">
            <Image
              src="/assets/karim.jpg"
              alt="Karim Masmoudi standing in front of a modern architectural structure with international flags"
              width={600}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
