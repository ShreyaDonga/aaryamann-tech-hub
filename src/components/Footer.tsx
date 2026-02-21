import { Linkedin, Mail, Phone, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Let's build something<br /><span className="gradient-text">together.</span>
            </h2>
          </div>
          <a
            href={`mailto:${contactData.email}`}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 w-fit"
            style={{ background: "var(--gradient-warm)" }}
          >
            Say Hello
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">Navigation</h4>
              <nav className="space-y-2">
                <a href="#work" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
                <a href="#docs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Documents</a>
                <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              </nav>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">Contact</h4>
              <div className="space-y-2">
                <a href={`mailto:${contactData.email}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors truncate">{contactData.email}</a>
                <a href={`tel:${contactData.phone}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{contactData.phone}</a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">Social</h4>
              <div className="flex gap-2">
                <a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300">
                  <Linkedin size={16} />
                </a>
                <a href={`mailto:${contactData.email}`}
                  className="w-9 h-9 rounded-xl bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300">
                  <Mail size={16} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">Resume</h4>
              <a href="/Aaryamann_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <FileText size={14} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Aaryamann Goenka</p>
          <p className="text-muted-foreground/50 text-xs">Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}