import React from 'react';
import { Mail, Github, Linkedin, Instagram, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="contact">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-muted-foreground">
            I'm always open to new opportunities and interesting projects
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="mailto:saurav840963@gmail.com"
            className="glass px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>Email Me</span>
          </a>
          
          <a
            href="https://github.com/saurav266"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
          >
            <Github className="w-5 h-5 text-primary" />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/saurav-kumar-05a7502a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span>Instagram</span>
          </a>

          <a
            href="https://leetcode.com/u/saurav840963/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-primary/5 transition-colors"
          >
            <FileText className="w-5 h-5 text-primary" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
