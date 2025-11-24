import React from 'react';

const About = () => (
  <section id="about" className="py-20 border-t border-neutral-800">
    <h3 className="section-title">About</h3>
    <div className="space-y-4 text-neutral-300 max-w-4xl leading-relaxed">
      <p>
        I’m Karim, a Software Engineer who enjoys crossing boundaries between embedded systems, systems programming,
        and applied innovation. My journey includes building underwater robotics, IoT smart interfaces, low-level
        kernel modules, and AI-driven tooling.
      </p>
      <p>
        I believe impactful engineering is a deliberate blend of imagination, precision, and purpose—each project
        an opportunity to turn abstract ideas into resilient, efficient, and meaningful solutions.
      </p>
      <p className="text-neutral-400 text-sm">
        (Profile photo coming soon.)
      </p>
    </div>
  </section>
);

export default About;