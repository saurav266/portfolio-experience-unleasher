
import React from 'react';
import { Code, Database, Layout, Globe, Server, Terminal, Monitor, Braces } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Material UI"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "RESTful APIs", "MongoDB", "Firebase", "GraphQL"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java + DSA", "TypeScript", "JavaScript", "HTML5", "CSS3", "Python"]
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Bash", "Kubernetes"]
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    title: "UI/UX Design",
    icon: Monitor,
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Responsive Design"]
  },
  {
    title: "Testing & Quality",
    icon: Braces,
    skills: ["Jest", "React Testing Library", "Cypress", "Mocha", "Chai"]
  },
  {
    title: "Other Skills",
    icon: Globe,
    skills: ["Agile/Scrum", "Problem Solving", "Team Collaboration", "Technical Writing", "Mentoring"]
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
                className="glass p-6 rounded-lg space-y-4 hover:bg-primary/5 transition-all duration-300"
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
