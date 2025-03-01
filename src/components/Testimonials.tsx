
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Saurav's ability to transform complex requirements into intuitive user interfaces is remarkable. His technical excellence and attention to detail make him a valuable asset to any development team.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    company: "StartupHub",
    content: "Working with Saurav was a game-changer for our project. His problem-solving skills and commitment to quality code helped us deliver our application ahead of schedule.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Chen",
    role: "Senior Developer",
    company: "InnovateTech",
    content: "Saurav's technical knowledge and collaborative approach make him an exceptional team member. His contributions significantly improved our application's performance and user experience.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "DesignMasters",
    content: "I've rarely worked with developers who understand design principles as well as Saurav does. His ability to translate designs into flawless interfaces is truly impressive.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-primary/5" id="testimonials">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
          <p className="text-muted-foreground">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-8 rounded-lg relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
