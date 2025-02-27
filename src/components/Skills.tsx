import React from 'react';
import { Code, Database, Layout, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "RESTful APIs", "MongooDb"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java + DSA", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Other Skills",
    icon: Globe,
    skills: ["Git", "Docker", "AWS", "Agile", "UI/UX Design"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30 group transition-all duration-300 hover:bg-secondary/50" id="skills">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="glass p-6 rounded-lg space-y-4 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="font-semibold text-lg">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
