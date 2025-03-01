
import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Saurav Kumar
            </h3>
            <p className="mt-2 text-muted-foreground">
              Software Engineer & Web Developer
            </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/saurav266"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/saurav-kumar-05a7502a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a
                href="mailto:saurav840963@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
