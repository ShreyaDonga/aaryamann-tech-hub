import { Project } from "@/data/portfolio";
import projectSpiderRobot from "@/assets/project-spider-robot.jpg";
import projectCompost from "@/assets/project-compost.jpg";
import projectCybersecurity from "@/assets/project-cybersecurity.jpg";

const imageMap: Record<string, string> = {
  "spider-robot": projectSpiderRobot,
  "compost": projectCompost,
  "cybersecurity": projectCybersecurity,
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="project-card group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageMap[project.image]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="skill-badge text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
