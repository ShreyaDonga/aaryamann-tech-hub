import { Layout } from "@/components/Layout";
import { contactData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl animate-slide-up delay-100">
            Interested in collaborating on a project or just want to say hello? 
            Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <ContactItem
                    icon={<Mail />}
                    label="Email"
                    value={contactData.email}
                    href={`mailto:${contactData.email}`}
                  />
                  <ContactItem
                    icon={<Phone />}
                    label="Phone"
                    value={contactData.phone}
                    href={`tel:${contactData.phone}`}
                  />
                  <ContactItem
                    icon={<MapPin />}
                    label="Location"
                    value={contactData.location}
                  />
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href={contactData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <Github size={20} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={contactData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <Linkedin size={20} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-muted-foreground text-sm">
                  I'm always interested in hearing about new projects, 
                  research collaborations, or internship opportunities 
                  in robotics, AI, and IoT.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up delay-200">
              <div className="p-8 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default Contact;
