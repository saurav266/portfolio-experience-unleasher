
import React from 'react';
import { User, Briefcase, Award, Code, Rocket, Heart } from 'lucide-react';

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc",
    period: "2021 - Present",
    description: "Leading development of enterprise web applications and mentoring junior developers"
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Built responsive web applications and implemented modern UI/UX designs"
  },
  {
    role: "Junior Developer",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Developed and maintained client websites while learning best practices"
  }
];

const About = () => {
  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="about">
      <div className="container max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-primary text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold">Passionate Developer & Creative Problem Solver</h2>
            <p className="text-muted-foreground text-lg">
              Hi my name is Saurav kumar , I specialize in creating intuitive and performant applications that solve real-world problems. My journey in tech started with a curiosity about how things work on the web, and it has evolved into a passion for building exceptional digital experiences.
            </p>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="src/public/WhatsApp Image 2025-02-16 at 16.29.01_7f2c548d.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass p-6 rounded-lg space-y-3">
              <Code className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Technical Skills</h3>
              <p className="text-muted-foreground">Expert in React, TypeScript, and modern web technologies</p>
            </div>
            
            <div className="glass p-6 rounded-lg space-y-3">
              <Rocket className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-muted-foreground">Always exploring new technologies and best practices</p>
            </div>
            
            <div className="glass p-6 rounded-lg space-y-3">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Passion</h3>
              <p className="text-muted-foreground">Dedicated to creating meaningful user experiences</p>
            </div>

            <div className="glass p-6 rounded-lg space-y-3">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-muted-foreground">Worked with startups and enterprise companies</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground">
              I began my career with a strong foundation in computer science and quickly discovered my passion for Full-Stack development. Over the years, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to complex enterprise applications. What drives me is the perfect blend of technical challenge and creative expression that web development offers.
            </p>
            <p className="text-muted-foreground mt-4">
              Outside of coding, I'm an active contributor to the developer community, sharing knowledge through blog posts and open-source contributions. I believe in continuous learning and staying updated with the latest industry trends and technologies.
            </p>
          </div>
        </div>

        <div className="mt-24 space-y-8">
          <div className="text-center space-y-4">
            <span className="text-primary text-sm tracking-wider uppercase">Work Experience</span>
            <h2 className="text-3xl font-bold">Professional Journey</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp, index) => (
              <div key={index} className="glass p-6 rounded-lg space-y-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
