import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Akhil054", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akhil-tamgaonkar-100096192/", label: "LinkedIn" },
    { icon: Mail, href: "akhil.tamgaonkar@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Akhil Tamgaonkar</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center hover-lift hover-glow group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="flex space-x-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Let's Work Together</h4>
            <a
              href="mailto:alex.chen@example.com"
              className="text-primary hover:text-primary-glow transition-smooth font-medium"
            >
              akhil.tamgaonkar@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm" >
            © {currentYear} Akhil Tamgaonkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;