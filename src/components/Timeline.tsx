
import React from 'react';
import { Calendar, Building, ArrowUpRight } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      year: '2024 - Present',
      role: 'Senior Software Engineer',
      company: 'iFortepay',
      companyUrl: 'https://ifortepay.id/',
      description: 'Leading the development of a design system component library. Collaborating with cross-functional teams to ensure design consistency and accessibility across products.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Rollup']
    },
    {
      year: '2023 - 2024',
      role: 'Software Engineer',
      company: 'PT Bank Rakyat Indonesia (PT Entrepreneur Trust Digital)',
      companyUrl: 'https://bri.co.id/',
      description: 'Developed modern web applications. Collaborated with designers and product managers to create user-friendly interfaces. Joining many project like Delima, BRI Web, Ambilin',
      technologies: ['Next JS', 'Nest JS', 'React Native', 'Tailwind CSS', 'TypeScript']
    },
    {
      year: '2021 - 2023',
      role: 'Frontend Developer',
      company: 'PT Paramadaksa Teknologi Nusantara (Nextsoft)',
      companyUrl: 'https://nexsoft.co.id/',
      description: 'Created modern dashboard applications and chat systems. Worked with great teams to deliver high-quality software. Participated in code reviews and contributed to team knowledge sharing. Project like GroChat, GroKios, and GroRex',
      technologies: ['JavaScript', 'React', 'Electron', 'Material UI', 'Tailwind CSS']
    },
  ];

  return (
    <section id="experience" className="py-24 bg-navy-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Career Path</h2>
          <h3 className="heading-lg">My Professional Journey</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-0.5 bg-slate/20 z-0"></div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative z-10 mb-16 md:mb-24 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'
                }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-theme-yellow border-4 border-navy-dark left-[-10px] md:left-auto md:right-[-10px] transform md:translate-x-[50%]"></div>

              {/* Mobile timeline dot */}
              <div className="md:hidden absolute top-0 w-5 h-5 rounded-full bg-theme-yellow border-4 border-navy-dark left-[-10px]"></div>

              {/* Content */}
              <div className="ml-8 md:ml-0 pl-8 md:pl-0 border-l border-slate/20 md:border-l-0">
                <div className="card">
                  <div className="flex items-center text-theme-yellow mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-mono">{exp.year}</span>
                  </div>

                  <h4 className="text-xl font-bold mb-1">{exp.role}</h4>

                  <div className="flex items-center mb-4">
                    <Building size={14} className="mr-2 text-slate" />
                    <a
                      href={exp.companyUrl}
                      className="text-slate-light hover:text-theme-yellow flex items-center"
                    >
                      {exp.company}
                      <ArrowUpRight size={14} className="ml-1" />
                    </a>
                  </div>

                  <p className="text-slate-light mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-navy border border-slate/10 text-slate-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
