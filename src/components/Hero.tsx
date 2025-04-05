
import React from 'react';
import TypewriterText from './TypewriterText';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-theme-yellow mb-4 font-mono animate-fade-in-down">Hi, my name is</p>
          <h1 className="heading-xl mb-4 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            Ezra Senaputra.
          </h1>
          <h2 className="heading-lg text-slate mb-6 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            I <TypewriterText strings={['build things for the web.', 'create digital experiences.', 'craft elegant solutions.', 'love creative coding.']} />
          </h2>
          <p className="text-slate-light text-lg leading-relaxed mb-12 max-w-2xl animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
            I'm a creative software engineer and a lifelong learner with a deep curiosity for technology — especially in the evolving world of AI. I’m passionate about crafting intuitive, human-centered digital experiences that blend design and functionality. Currently, I’m building a scalable design system component library , helping teams ship cohesive and accessible products faster at <a href="#" className="text-theme-yellow hover:underline">iFortepay</a>.
          </p>
          <div className="flex gap-4 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Build Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
