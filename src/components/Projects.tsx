import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Lead Management App - 2025",
      description: "Designed frontend components for user data collection and built backend APIs GET/POST for data handling and storage. Focused on creating a responsive UI and efficient data flow between client and server",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnan6n7pituG2nq4ULM2PxABEEhr_K4SguMw&s",
      tech: ["JavaScript","React", "React-Native", ],
      // liveUrl: "#",
      githubUrl: "https://github.com/samratKilledar/REPO-Lead"
    },
    {
      title: "Semantic Segmentation & Object Detection 2024 - 25 ",
      description: "Implemented UNet architecture for pixel-wise image segmentation with an extension for object detection and tracking. Enhanced model to identify and track multiple objects in real time for improved scene understanding.",
      image: "https://www.visionplatform.ai/wp-content/uploads/2024/01/object-detection.png",
      tech: ["Python","OpenCV", "TensorFlow", "Object Detection"],
      liveUrl: "#",
      githubUrl: "https://github.com/PRATIKSHETAKE/Road-Segmentation-and-Object-Detection"
    },
    {
      title: "Personal Blog - 2025",
      description: "Designed frontend components for user data collection and built backend APIs GET/POST for data handling and storage. Focused on creating a responsive UI and efficient data flow between client and server",
      image: "https://www.blogtyrant.com/wp-content/uploads/2024/07/self-expression-of-a-personal-blog.png",
      tech: ["JavaScript","React", "Nodejs" ],
      // liveUrl: "#",
      githubUrl: "https://github.com/Akhil054/Personal_Blog"
    },
    {
      title: "URL Shortener - 2025",
      description: "A simple tool to shorten long URLs using Node.js, with easy redirection and clean UI.",
      image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg",
      tech: ["HTML","CSS","JavaScript", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akhil054/URL-Shortend-Node-js-"
    },
    {
      title: "To-Do List - 2025",
      description: "A basic to-do list app built with HTML, CSS, and JavaScript for task tracking and productivity.",
      image: "https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg",
      tech: ["HTML","CSS","JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Akhil054/To_Do_List_Pro-"
    },
    {
      title: "AI-ARM - 2023 - 24",
      description: "A robotic arm powered by Python and Arduino, featuring data visualization and smart control using machine learning.",
      image: "https://thumbs.dreamstime.com/b/futuristic-robotic-arm-interacting-cutting-edge-virtual-interface-advanced-hand-high-tech-screen-depicting-digital-378188725.jpg",
      tech: [,"3D Printing", "Ardio Uno","Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover-lift group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {/* <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    <Github className="w-4 h-4 mr-2" />
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;