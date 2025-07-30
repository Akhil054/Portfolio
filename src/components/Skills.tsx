import { Card, CardContent } from "@/components/ui/card";

// Clean skills component without visual indicators

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", logo: "📝" },
        { name: "React/React-Native", logo: "⚛️" },
        { name: "HTML/CSS", logo: "👨‍💻" },
        { name: "BootStrap", logo: "🅱️" },
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", logo: "🟢" },
        { name: "SQL", logo: "🗄️" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", logo: "🛠️" },
        { name: "Postman", logo: "📬" },                 
        { name: "Salesforce CRM", logo: "☁️" },  
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

        {/* Experience */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                role: "Software Development Intern",
                company: "Cognitix Software & Consultancy Pvt Ltd ",
                period: "Jan 2025 - Jul 2025",
                description: "Developed responsive App using Reactjs & React-Native. Collaborated with Technical Head on client projects.",
                achievements: ["Completed hands-on training in JavaScript, React.js, and Node.js for full-stack development.", "Built modular frontend components and integrated REST APIs for web applications.", "Gained practical experience in state management, backend logic, and deployment workflows."]
              },
              {
                role: "Web Developer Intern",
                company: "Talent Battle Pvt Ltd",
                period: "Dec 2023 - Feb 2024",
                description: "Focused on UI/UX implementation & Database Management. Worked with design team to create pixel-perfect interfaces.",
                achievements: ["Implemented responsive designs", "Gained hands-on experience in basic server-side logic and full-stack workflows.", "Improved skills in version control (Git) and debugging techniques."]
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

        {/* Certifications & Workshops */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12">Certifications</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Data Analytics and Visualization Job Simulation",
                    issuer: "Forage",
                    date: "2024",
                    badge: "📈"
                  },
                  {
                    title: "Cybersecurity Job Simulation",
                    issuer: "Forage",
                    date: "2024",
                    badge: "🔐"
                  },
                  // {
                  //   title: "React Developer Certification",
                  //   issuer: "Meta",
                  //   date: "2022",
                  //   badge: "⚛️"
                  // },
                  // {
                  //   title: "JavaScript Algorithms & Data Structures",
                  //   issuer: "freeCodeCamp",
                  //   date: "2022",
                  //   badge: "📝"
                  // }
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
              <h3 className="text-3xl font-bold text-center mb-12">Workshops</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "INVICTA InterCollege Event",
                    organizer: "Team Mavericks KITCOEK",
                    date: "2024",
                    description: "Deep dive into Web Developerment 2.0 & Advance Tech ",
                    type: "Workshop"
                  },
                  {
                    title: "BODHANTRA ",
                    organizer: "Team Mavericks KITCOEK",
                    date: "2024",
                    description: "5 Days Session & Training ",
                    type: "Sessions"
                  },
                  // {
                  //   title: "UI/UX Design Thinking Workshop",
                  //   organizer: "Design Guild",
                  //   date: "January 2023",
                  //   description: "User-centered design principles and design systems creation.",
                  //   type: "Workshop"
                  // }
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
      </div>
    </section>
  );
};

export default Skills;