import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/Purple.jpg";
import aboutMeImg from "@/assets/abttmee.jpeg"; // if using alias like @

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant hover-lift">
                <img
                  src={aboutMeImg}
                  alt="Akhil Tamgaonkar - Creative Developer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 rounded-full transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Software{" "}
                <span className="text-gradient"> Developer</span>
              </h1>
              {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                I craft digital experiences that blend innovative design with cutting-edge technology
              </p> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <a
                  href="/Akhil_Tamgaonkar.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akhil_Tamgaonkar.pdf"
                >
                  <Button variant="outline" size="lg" className="hover-lift">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: "https://github.com/Akhil054", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akhil-tamgaonkar-100096192/", label: "LinkedIn" },
                { icon: Mail, href: "akhil.tamgaonkar@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center hover-lift hover-glow group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;