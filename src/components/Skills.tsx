import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Wrench, Palette, Users, Lightbulb } from "lucide-react";

// Skills component with circular progress indicators

// Circular Progress Component
const CircularProgress = ({ value, children }: { value: number; children: React.ReactNode }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="hsl(var(--muted))"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 92 },
        { name: "JavaScript", level: 93 }
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 94 },
        { name: "Docker", level: 78 },
        { name: "AWS/Cloud", level: 80 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center">
                        <CircularProgress value={skill.level}>
                          <div className="text-center">
                            <div className="text-sm font-bold text-primary">{skill.level}%</div>
                          </div>
                        </CircularProgress>
                        <span className="text-xs font-medium mt-3 text-center leading-tight">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                icon: Code2,
                description: "Full-stack web applications with modern frameworks and best practices",
                features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Support"]
              },
              {
                title: "UI/UX Design",
                icon: Palette,
                description: "User-centered design solutions that enhance user experience and engagement",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                title: "Consulting",
                icon: Users,
                description: "Technical consulting and architecture guidance for your projects", 
                features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Mentoring"]
              }
            ].map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={service.title} className="hover-lift text-center">
                  <CardContent className="p-8">
                    <ServiceIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-muted-foreground">• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;