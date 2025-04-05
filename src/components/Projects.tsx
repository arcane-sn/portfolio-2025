import React, { useState } from 'react';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Mobile', 'AI', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'Web Compro PT Samuel Tumbuh Bersama',
      description: 'A very interactive web application for PT Samuel Tumbuh Bersama, featuring a modern design and user-friendly interface. Built with Next Js, TypeScript, and SEO Friendly',
      image: '/samueltumbuhbersama.png',
      tags: ['Next Js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'SEO', 'Framer Motion'],
      github: '#',
      demo: 'https://samueltumbuhbersama.com/',
      featured: true,
      category: 'Web'
    },
    {
      id: 2,
      title: 'Web Compro for Sasa Event SaSaAdhdtion',
      description: 'A modern web application for Sasa Event SaSaAdhdtion, featuring a modern design and user-friendly interface. Built with Next Js, TypeScript, and SEO Friendly',
      image: '/sasa.png',
      tags: ['Next.js', 'React', 'MongoDB', 'Stripe'],
      github: '#',
      demo: 'https://sasaadhdtion.com/',
      featured: true,
      category: 'Web'
    },
    {
      id: 3,
      title: 'An Investment Portal for Bekasi City',
      description: 'An investment portal for Bekasi City, featuring a modern design and user-friendly interface. Built with Next Js, Express Js, TypeScript, and SEO Friendly',
      image: '/placeholder.svg',
      tags: ['Next Js', 'Express JS', 'Tailwind CSS', 'Cakra UI'],
      github: '#',
      demo: '#',
      featured: false,
      category: 'Web'
    },
    {
      id: 4,
      title: 'Admin Dashboard for GPIB Pancaran Kasih Depok ',
      description: 'A modern admin dashboard for GPIB Pancaran Kasih Depok, featuring a modern design and user-friendly interface. Built with React Js and Laravel as Back End',
      image: '/pankas.png',
      tags: ['React JS', 'Laravel PHP', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true,
      category: 'Web'
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Featured projects (shown differently)
  const featuredProjects = projects.filter(project => project.featured);

  // Other projects (grid view)
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Work</h2>
          <h3 className="heading-lg">Featured Projects</h3>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12`}
            >
              {/* Project Image */}
              <div className="md:w-1/2 relative group">
                <div className="overflow-hidden rounded-lg aspect-video bg-navy-light">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/0 transition-all duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <p className="text-theme-yellow font-mono mb-2">Featured Project</p>
                <h4 className="heading-md mb-4">{project.title}</h4>
                <div className="card mb-4">
                  <p className="text-slate-light">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-navy-light text-slate-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-slate-light hover:text-theme-yellow transition-colors"
                    aria-label="View Github Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-slate-light hover:text-theme-yellow transition-colors"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="heading-md">Other Noteworthy Projects</h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full transition-all ${activeFilter === filter
                ? 'bg-theme-yellow text-navy font-medium'
                : 'text-slate-light hover:text-theme-yellow'
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <div key={project.id} className="card group">
              <div className="flex justify-between items-start mb-6">
                <Folder size={40} className="text-theme-yellow" />
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-slate-light group-hover:text-theme-yellow transition-colors"
                    aria-label="View Github Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-slate-light group-hover:text-theme-yellow transition-colors"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-theme-yellow transition-colors">{project.title}</h4>
              <p className="text-slate-light mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-navy text-slate-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {
          otherProjects.length === 0 && (
            <p className="text-slate-light text-center mt-8">Coming Soon!</p>
          )
        }
      </div>
    </section>
  );
};

export default Projects;
