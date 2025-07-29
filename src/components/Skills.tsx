import { Card, CardContent } from "@/components/ui/card";

// Clean skills component without visual indicators

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React/Next.js", "TypeScript", "CSS/Tailwind", "JavaScript"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "AWS/Cloud", "Figma"]
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
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-center">
                      <span className="text-sm font-medium text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: "Bachelor of Computer Science",
                school: "University of Technology",
                period: "2018 - 2022",
                description: "Specialized in Software Engineering and Web Development. Graduated with honors."
              },
              {
                degree: "Full Stack Web Development Bootcamp",
                school: "Tech Academy",
                period: "2022",
                description: "Intensive 6-month program covering modern web technologies and frameworks."
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