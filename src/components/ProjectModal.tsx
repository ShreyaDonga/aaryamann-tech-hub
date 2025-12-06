import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Project } from "@/data/portfolio";
import { X, ExternalLink } from "lucide-react";
import projectSpiderRobot from "@/assets/project-spider-robot.jpg";
import projectCompost from "@/assets/project-compost.jpg";
import projectCybersecurity from "@/assets/project-cybersecurity.jpg";

const imageMap: Record<string, string> = {
  "spider-robot": projectSpiderRobot,
  "compost": projectCompost,
  "cybersecurity": projectCybersecurity,
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative aspect-video">
            <img
              src={imageMap[project.image]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground mb-3 inline-block">
                {project.category}
              </span>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-display text-foreground">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Summary */}
            <p className="text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            {/* Abstract */}
            {project.content.abstract && (
              <Section title="Abstract">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.abstract}
                </p>
              </Section>
            )}

            {/* Introduction */}
            {project.content.introduction && (
              <Section title="Introduction & Objective">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.introduction}
                </p>
              </Section>
            )}

            {/* Background */}
            {project.content.background && (
              <Section title="Background Research">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.background}
                </p>
              </Section>
            )}

            {/* Innovation */}
            {project.content.innovation && (
              <Section title="Innovation">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.innovation}
                </p>
              </Section>
            )}

            {/* Materials */}
            {project.content.materials && project.content.materials.length > 0 && (
              <Section title="Materials Used">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.content.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Methodology */}
            {project.content.methodology && (
              <Section title="Methodology">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.methodology}
                </p>
              </Section>
            )}

            {/* Results */}
            {project.content.results && (
              <Section title="Results & Conclusion">
                <p className="text-muted-foreground leading-relaxed">
                  {project.content.results}
                </p>
              </Section>
            )}

            {/* Sub-Projects (for Cybersecurity) */}
            {project.content.subProjects && project.content.subProjects.length > 0 && (
              <Section title="Project Collection">
                <div className="grid gap-4">
                  {project.content.subProjects.map((subProject, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="font-display font-semibold text-foreground mb-2">
                        {subProject.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {subProject.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Citations */}
            {project.content.citations && project.content.citations.length > 0 && (
              <Section title="References">
                <div className="space-y-2">
                  {project.content.citations.map((citation, index) => (
                    <a
                      key={index}
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:underline text-sm break-all"
                    >
                      <ExternalLink size={14} className="flex-shrink-0" />
                      {citation}
                    </a>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
        <span className="w-1 h-6 bg-accent rounded-full" />
        {title}
      </h3>
      {children}
    </div>
  );
}
