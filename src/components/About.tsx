import React from 'react';
import { User, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc",
    period: "2021 - Present",
    description: "Leading development of enterprise web applications"
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Built responsive web applications for various clients"
  },
  {
    role: "Junior Developer",
    company: "Startup Hub",
    period: "2018 - 2019",
    description: "Developed and maintained client websites"
  }
];

const About = () => {
  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="about">
      <div className="container max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-primary text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold">Passionate about creating impactful digital solutions</h2>
            <p className="text-muted-foreground text-lg">
              With a focus on user experience and clean code, I build modern web applications that make a difference.
            </p>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass p-6 rounded-lg space-y-3">
              <User className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Background</h3>
              <p className="text-muted-foreground">5+ years of experience in frontend development</p>
            </div>
            
            <div className="glass p-6 rounded-lg space-y-3">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-muted-foreground">Worked with various startups and enterprises</p>
            </div>
            
            <div className="glass p-6 rounded-lg space-y-3 md:col-span-2">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="font-semibold">Achievements</h3>
              <p className="text-muted-foreground">Multiple award-winning projects and open source contributions</p>
            </div>
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
