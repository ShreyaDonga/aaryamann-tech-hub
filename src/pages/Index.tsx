import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SkillBadges } from "@/components/SkillBadges";
import { projects, aboutData, contactData } from "@/data/portfolio";
import { ArrowRight, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/portfolio";
import heroBanner from "@/assets/hero-banner.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroBanner}
          alt="Engineering workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </section>

      {/* Profile Section */}
      <section className="relative -mt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={profilePlaceholder}
                  alt={aboutData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground">
                  {aboutData.name}
                </h1>
                <span className="text-2xl">🇮🇳</span>
              </div>
              
              <p className="text-muted-foreground text-sm md:text-base mb-4 max-w-2xl">
                {aboutData.title}
              </p>

              {/* Skills Preview */}
              <div className="mb-4">
                <SkillBadges />
              </div>

              {/* Social & Contact */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex gap-2">
                  <a
                    href={contactData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={contactData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  {contactData.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <Link
              to="/projects"
              className="py-4 text-sm font-medium text-foreground border-b-2 border-accent"
            >
              Projects <span className="ml-1 text-accent">{projects.length}</span>
            </Link>
            <Link
              to="/about"
              className="py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-heading">Featured Projects</h2>
              <p className="section-subheading">My engineering, robotics, and AI innovations</p>
            </div>
            <Link to="/projects" className="btn-secondary flex items-center gap-2">
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Let's Build Something Amazing</h2>
          <p className="section-subheading mb-8">
            Interested in collaborating on robotics, AI, or IoT projects? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Layout>
  );
};

export default Index;
