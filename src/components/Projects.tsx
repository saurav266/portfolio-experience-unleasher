
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "Dictionary App",
    description: "A comprehensive dictionary application with word definitions, pronunciations, and examples",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "http://saurav-dictionary-23bc69.netlify.app",
    github: "https://github.com/saurav266/Dictionary-app"
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool for team productivity with drag-and-drop interface",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization platform with real-time updates and customizable reports",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  },
  {
    title: "Social Media Platform",
    description: "Community-driven platform with real-time messaging and content sharing capabilities",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  },
  {
    title: "Weather Application",
    description: "Real-time weather tracking with interactive maps and detailed forecasts for global locations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    link: "http://saurav-dictionary-23bc69.netlify.app",
    github: "https://github.com/saurav266"
  },
  {
    title: "Fitness Tracking App",
    description: "Personal workout planner with progress tracking and analytics for health optimization",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    github: "https://github.com/saurav266"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50 group transition-all duration-300 hover:bg-secondary/70" id="projects">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work and collaborations</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="glass absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                    >
                      <span>View Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm hover:underline"
                    >
                      <span>GitHub</span>
                      <Github className="w-4 h-4" />
                    </a>
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

export default Projects;
