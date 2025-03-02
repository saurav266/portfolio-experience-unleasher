
import React, { useState } from 'react';
import { Download, FileText, Calendar, Building2, GraduationCap, ChevronDown, ChevronUp, Eye, Award, Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  {
    title: "Winner,  Coding Competition",
    date: "2024",
    description: "Third place in the annual coding hackathon.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />
  },
  // {
  //   title: "Top Contributor, Open Source Project",
  //   date: "2024",
  //   description: "Recognized as a top contributor to a major open-source framework with over 50 accepted pull requests.",
  //   icon: <Star className="w-8 h-8 text-yellow-500" />
  // },
  // {
  //   title: "Dean's List for Academic Excellence",
  //   date: "2023",
  //   description: "Maintained a perfect GPA and received recognition for outstanding academic performance.",
  //   icon: <Award className="w-8 h-8 text-yellow-500" />
  // },
  // {
  //   title: "Published Research Paper",
  //   date: "2024",
  //   description: "Co-authored a research paper on optimizing database performance that was published in a leading tech journal.",
  //   icon: <FileText className="w-8 h-8 text-yellow-500" />
  // }
];

const Resume = () => {
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  
  const visibleAchievements = showAllAchievements ? achievements : achievements.slice(0, 2);

  return (
    <section className="py-24 px-6 group transition-all duration-300 hover:bg-primary/5" id="resume">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm tracking-wider uppercase">Resume</span>
          <h2 className="text-3xl md:text-4xl font-bold">My Career Journey</h2>
          <p className="text-muted-foreground">
            A detailed view of my experiences, skills, and qualifications.
          </p>
          <a
            href="/Saurav_Resume (2).jpg"
            download="Saurav_Resume.jpg"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md gap-2"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1">
          {/* Education and Achievements */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Education & Achievements</h3>
            </div>
            
            {/* Education */}
            <div className="glass p-6 rounded-lg space-y-3">
              <h4 className="font-semibold text-lg">Bachelor of Computer Science</h4>
              <p className="text-primary text-sm">Sarala Birla University, Ranchi</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>2023 - 2027</span>
              </div>
              <p className="text-muted-foreground">
                Specialized in Software Engineering with a focus on web technologies and Problem solving.
                Graduated with First Class Honours.
              </p>
            </div>

            {/* Achievements Section */}
            <div className="space-y-4 mt-8">
              <h4 className="font-semibold text-lg">Achievements</h4>
              <div className="space-y-4">
                {visibleAchievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="glass p-6 rounded-lg space-y-4 fade-in animate-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                        {achievement.icon}
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {achievements.length > 2 && (
                  <button
                    onClick={() => setShowAllAchievements(!showAllAchievements)}
                    className="flex items-center justify-center w-full gap-2 mt-6 py-3 px-4 border border-primary/20 rounded-lg text-primary hover:bg-primary/5 transition-colors"
                  >
                    {showAllAchievements ? (
                      <>
                        Show Less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        See More Achievements
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
