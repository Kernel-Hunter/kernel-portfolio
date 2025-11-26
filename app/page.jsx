'use client';

import Hero from '../components/Hero.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import About from '../components/About.jsx';
import SkillsCerts from '../components/SkillsCerts.jsx';

export default function Page() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <About />
      <SkillsCerts />
    </>
  );
}