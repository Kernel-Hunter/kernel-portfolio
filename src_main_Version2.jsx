import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Layout from './components/Layout.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <Layout>
    <Hero />
    <About />
    <ProjectsSection />
    <Contact />
    <Footer />
  </Layout>
);

createRoot(document.getElementById('root')).render(<App />);