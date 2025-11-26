'use client';

import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import SkillsCerts from '../components/SkillsCerts.jsx';
import Contact from '../components/Contact.jsx';

export default function Page() {
  return (
    <>
      {/* Top intro */}
      <Hero />

      {/* About first, centered */}
      <About />

      {/* Projects after About */}
      <ProjectsSection />

      {/* Soft Skills & Certifications */}
      <SkillsCerts />

      {/* Contact at the end */}
      <Contact />
    </>
  );
}
