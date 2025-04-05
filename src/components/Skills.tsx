
import React from 'react';
import { Code, Palette, Lightbulb, Database, Star, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={28} />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS/SCSS', 'Redux', 'GraphQL', 'Framer Motion', 'React Query']
    },
    {
      title: 'Backend Development',
      icon: <Database size={28} />,
      skills: ['Node.js', 'Express', 'Nest Js', 'Laravel', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'Firebase', 'AWS', 'Docker']
    },
    {
      title: 'Creative Design',
      icon: <PenTool size={28} />,
      skills: ['Figma', 'Adobe Premier', 'Adobe Illustrator', 'Capcut', 'Canva']
    },
    {
      title: 'Tools & Methodologies',
      icon: <Lightbulb size={28} />,
      skills: ['Git', 'GitHub', 'CI/CD', 'Agile', 'Scrum', 'Jest', 'Testing Library', 'Rollup', 'Vite', 'Storybook']
    },
  ];

  return (
    <section id="skills" className="py-24 bg-navy-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">My Toolkit</h2>
          <h3 className="heading-lg">Skills & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-theme-yellow">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-navy rounded-lg flex items-center gap-2 text-slate-light hover:text-theme-yellow hover:bg-navy-light transition-colors"
                  >
                    <Star size={12} className="text-theme-yellow" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
