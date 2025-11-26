'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 border-t dark:border-neutral-800 border-neutral-300">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="section-title">About</h3>

        {/* Optional: show a smaller photo above text for symmetry on mobile */}
        <div className="md:hidden mb-8">
          <div className="mx-auto w-40 h-52 rounded-2xl overflow-hidden border dark:border-neutral-800 border-neutral-300 bg-neutral-900/40 light:bg-white/70">
            <Image
              src="/assets/karim.jpg"
              alt="Karim standing in front of a modern architectural structure with international flags"
              width={400}
              height={520}
              className="object-cover w-full h-full"
              priority={false}
            />
          </div>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p className="dark:text-neutral-300 text-neutral-700">
            I’m Karim, a Software Engineer who enjoys crossing boundaries between embedded systems,
            systems programming, and applied innovation. My journey includes building underwater robotics,
            IoT smart interfaces, low-level kernel modules, and AI-driven tooling.
          </p>
          <p className="dark:text-neutral-300 text-neutral-700">
            I believe impactful engineering is a deliberate blend of imagination, precision, and purpose—
            each project an opportunity to turn abstract ideas into resilient, efficient, and meaningful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
