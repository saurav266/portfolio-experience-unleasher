
import React from 'react';
import { User, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6" id="about">
      <div className="container max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-primary text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold">Passionate about creating impactful digital solutions</h2>
            <p className="text-muted-foreground text-lg">
              With a focus on user experience and clean code, I build modern web applications that make a difference.
            </p>
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
      </div>
    </section>
  );
};

export default About;
