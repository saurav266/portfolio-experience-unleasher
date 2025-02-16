
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Interactive dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50" id="projects">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work and collaborations</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="glass absolute inset-x-0 bottom-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
