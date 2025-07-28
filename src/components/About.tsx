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
              <h3 className="text-2xl font-semibold">Hi, I'm Alex Chen</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in creating 
                innovative digital experiences that seamlessly blend functionality with aesthetics. 
                My passion lies in solving complex problems through clean, efficient code and 
                intuitive user interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of technology to transform ideas into reality, and I'm 
                constantly exploring new tools and methodologies to stay at the forefront of 
                the rapidly evolving digital landscape.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
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