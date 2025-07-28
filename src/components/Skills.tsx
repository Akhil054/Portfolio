import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 92 },
        { name: "JavaScript", level: 93 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
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
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Full-stack web applications with modern frameworks and best practices",
                features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Support"]
              },
              {
                title: "UI/UX Design",
                description: "User-centered design solutions that enhance user experience and engagement",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
              },
              {
                title: "Consulting",
                description: "Technical consulting and architecture guidance for your projects", 
                features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Mentoring"]
              }
            ].map((service) => (
              <Card key={service.title} className="hover-lift text-center">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;