
import React from 'react';
import { Download, FileText, Calendar, Building2, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-24 px-6" id="resume">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Resume</span>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground">
            Download my resume or view my qualifications below
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors mt-4"
          >
            <Download className="w-5 h-5 text-primary" />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Senior Frontend Developer</h4>
                <p className="text-primary text-sm">Tech Solutions Inc</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2021 - Present</span>
                </div>
                <p className="text-muted-foreground">
                  Led the development of enterprise web applications using React and TypeScript.
                  Managed a team of 5 developers and implemented CI/CD pipelines.
                </p>
              </div>
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Frontend Developer</h4>
                <p className="text-primary text-sm">Digital Agency</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2019 - 2021</span>
                </div>
                <p className="text-muted-foreground">
                  Developed responsive web applications for various clients using modern JavaScript frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
                <p className="text-primary text-sm">University of Technology</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2015 - 2019</span>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Software Engineering with a focus on web technologies.
                  Graduated with First Class Honours.
                </p>
              </div>
              <div className="glass p-6 rounded-lg space-y-3">
                <h4 className="font-semibold text-lg">Web Development Certification</h4>
                <p className="text-primary text-sm">Tech Academy</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2019</span>
                </div>
                <p className="text-muted-foreground">
                  Advanced certification in modern web development frameworks and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
