import { Card, CardContent } from "@/components/ui/card";

// Clean skills component without visual indicators

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", logo: "⚛️" },
        { name: "TypeScript", logo: "🔷" },
        { name: "CSS/Tailwind", logo: "🎨" },
        { name: "JavaScript", logo: "📝" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", logo: "🟢" },
        { name: "Python", logo: "🐍" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "GraphQL", logo: "📊" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", logo: "🌐" },
        { name: "Docker", logo: "🐳" },
        { name: "AWS/Cloud", logo: "☁️" },
        { name: "Figma", logo: "🎯" }
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
                    <div key={skill.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                      <div className="text-3xl flex-shrink-0">{skill.logo}</div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Workshops */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Certifications</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "AWS Certified Solutions Architect",
                    issuer: "Amazon Web Services",
                    date: "2023",
                    badge: "☁️"
                  },
                  {
                    title: "Google Cloud Professional Developer",
                    issuer: "Google Cloud",
                    date: "2023",
                    badge: "🌐"
                  },
                  {
                    title: "React Developer Certification",
                    issuer: "Meta",
                    date: "2022",
                    badge: "⚛️"
                  },
                  {
                    title: "JavaScript Algorithms & Data Structures",
                    issuer: "freeCodeCamp",
                    date: "2022",
                    badge: "📝"
                  }
                ].map((cert) => (
                  <Card key={cert.title} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{cert.badge}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                          <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                          <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Workshops & Training */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Workshops & Training</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced React Patterns Workshop",
                    organizer: "React Conference 2023",
                    date: "June 2023",
                    description: "Deep dive into advanced React patterns and performance optimization.",
                    type: "Workshop"
                  },
                  {
                    title: "DevOps & CI/CD Pipeline Training",
                    organizer: "TechLearn Academy",
                    date: "March 2023",
                    description: "Comprehensive training on Docker, Kubernetes, and deployment strategies.",
                    type: "Training"
                  },
                  {
                    title: "UI/UX Design Thinking Workshop",
                    organizer: "Design Guild",
                    date: "January 2023",
                    description: "User-centered design principles and design systems creation.",
                    type: "Workshop"
                  }
                ].map((workshop) => (
                  <Card key={workshop.title} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-semibold">{workshop.title}</h4>
                          <p className="text-primary font-medium">{workshop.organizer}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                            {workshop.type}
                          </span>
                          <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                            {workshop.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{workshop.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                role: "Software Development Intern",
                company: "TechCorp Solutions",
                period: "Summer 2021",
                description: "Developed responsive web applications using React and Node.js. Collaborated with senior developers on client projects.",
                achievements: ["Built 3 client websites", "Improved page load times by 40%", "Learned agile development practices"]
              },
              {
                role: "Frontend Developer Intern",
                company: "Digital Innovations Ltd",
                period: "Summer 2022",
                description: "Focused on UI/UX implementation and mobile-first design principles. Worked with design team to create pixel-perfect interfaces.",
                achievements: ["Implemented responsive designs", "Reduced development time by 25%", "Created reusable component library"]
              }
            ].map((exp) => (
              <Card key={exp.role} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-1">
                    {exp.achievements.map((achievement) => (
                      <p key={achievement} className="text-sm text-muted-foreground">• {achievement}</p>
                    ))}
                  </div>
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