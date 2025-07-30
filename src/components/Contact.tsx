import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success("Message sent successfully! I'll get back to you soon.");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_wl9xkut",     // e.g., "service_123abc"
      "template_13hp09o",    // e.g., "template_xyz"
      formData,              // form data should match your template variables
      "-04ML5_5nh3VDOzlS"      // e.g., "user_ABC123"
    ).then(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }).catch((error) => {
      toast.error("Failed to send message. Try again later.");
      console.error("EmailJS Error:", error);
    });
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "akhil.tamgaonkar@gmail.com",
      href: "mailto:akhil.tamgaonkar@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9921821468",
      href: "tel:+91 9921821468"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolhapur, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            {contactInfo.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              </a>
            ))}

            {/* <div className="mt-8 p-6 bg-gradient-hero rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Ready to start a project?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I'm available for freelance work and consulting opportunities.
              </p>
              <Button variant="gradient" size="sm" className="w-full">
                Schedule a Call
              </Button>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter a valid email address"
                        />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;