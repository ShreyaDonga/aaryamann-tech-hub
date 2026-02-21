import { Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";
import { contactData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #7C3AED, #C026D3)' }}>
                <span className="font-display font-bold text-lg">AG</span>
              </div>
              <div>
                <span className="font-display font-semibold text-foreground text-base block leading-tight">Aaryamann Goenka</span>
                <span className="text-muted-foreground text-xs">Mumbai, India</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Aspiring engineer building at the intersection of Robotics, Sustainability, and IoT — with a bias for measurable impact.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Explore</h4>
            <nav className="space-y-2.5">
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-accent transition-all hover:translate-x-1 duration-200">Portfolio</a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-accent transition-all hover:translate-x-1 duration-200">About Me</a>
              <a href="/Aaryamann_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-all hover:translate-x-1 duration-200">
                <FileText size={14} />Resume
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm">
                <Mail size={14} className="flex-shrink-0" /><span className="truncate">{contactData.email}</span>
              </a>
              <a href={`tel:${contactData.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm">
                <Phone size={14} className="flex-shrink-0" />{contactData.phone}
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={14} className="flex-shrink-0" />{contactData.location}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${contactData.email}`}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed">Open to collaborations, research opportunities, and conversations about engineering.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} Aaryamann Goenka. All rights reserved.</p>
          <p className="text-muted-foreground/50 text-xs">Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}