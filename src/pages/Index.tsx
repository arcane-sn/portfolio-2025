
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-slate-lightest">
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-6 text-center text-slate">
        <div className="container">
          <p className="text-sm">
            <span className="text-theme-yellow">©</span> {new Date().getFullYear()} Ezra Senaputra. All Rights Reserved.
          </p>
          <p className="text-xs mt-1">
            Designed & Built with <span className="text-theme-yellow">♥</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
