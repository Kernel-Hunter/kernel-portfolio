import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-800">
      <h3 className="section-title">About</h3>
      <div className="grid gap-10 md:grid-cols-3 items-start">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/40">
            <Image
              src="/assets/karim.jpg"
              alt="Karim standing in front of a modern architectural structure with international flags"
              width={600}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="space-y-4 text-neutral-300 md:col-span-2 leading-relaxed">
          <p>
            I’m Karim, a Software Engineer who enjoys crossing boundaries between embedded systems,
            systems programming, and applied innovation. My journey includes building underwater robotics,
            IoT smart interfaces, low-level kernel modules, and AI-driven tooling.
          </p>
          <p>
            I believe impactful engineering is a deliberate blend of imagination, precision, and purpose
            each project an opportunity to turn abstract ideas into resilient, efficient, and meaningful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
