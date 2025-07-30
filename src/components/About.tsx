import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered digital experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Leading projects and mentoring fellow developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hi, I'm Akhil Tamgaonkar</h3>
              <p className="text-muted-foreground leading-relaxed">
                An Software Developer and photography enthusiast with a B.Tech in CSE (AI & ML) from KITCOEK, Kolhapur. 
                I'm skilled in HTML, CSS, JavaScript, Java , Python with a passion for creating impactful software and expressing creativity through my lens. 
                <br />
                As a core member of Team Mavericks, I’ve led technical events and community outreach, blending leadership with collaboration. I'm a fast learner, creative thinker, and always ready to take on new challenges.              
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[ "Java", "JavaScript", "React", "Node.js", "Web Tech", "SalesForce CRM"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {[
              {
                degree: "B.Tech In CSE (AIML)",
                school: "KIT's College of Engineering",
                period: "2021 - 2025",
                description: "Specialized in Atificial Intelligence and Machine Learning,with A Grade ",

              },
              {
                degree: "High School",
                school: "DYP Shantiniketan Jr. College",
                period: "2019 - 2021",
                description: "CGPA - 7.5"

              }
            ].map((edu) => (
              <Card key={edu.degree} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;