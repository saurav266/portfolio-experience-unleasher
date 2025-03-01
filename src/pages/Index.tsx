
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Resume />  
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
