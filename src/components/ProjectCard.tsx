import { MediaItem, Project } from "@/data/portfolio";
import { useState, useEffect } from "react";

const fallbackImage = "/projects/beetlebot/beetlebot1.jpeg";
const fallbackMedia: MediaItem = {
  type: "image",
  src: fallbackImage,
  label: "Beetel Bot standing pose",
};

const getProjectCardMedia = (project: Project) => {
  if (project.thumbnail) {
    return {
      type: "image",
      src: project.thumbnail,
      label: project.title,
    };
  }

  const imageMedia = project.content.media?.find((item) => item.type === "image");
  if (imageMedia) return imageMedia;

  if (project.image) {
    return {
      type: "image",
      src: project.image,
      label: project.title,
    };
  }

  return fallbackMedia;
};

const getBeetleBotVideos = (project: Project) => {
  if (project.id === "beetlebot") {
    const videos = project.content.media?.filter((item) => item.type === "video" && item.src.includes("beetlebot_demo")) ?? [];
    return videos.length > 0 ? videos : [
      { type: "video" as const, src: "/projects/beetlebot/beetlebot_demo.mp4", label: "Demo 1" },
      { type: "video" as const, src: "/projects/beetlebot/beetlebot_demo2.mp4", label: "Demo 2" },
    ];
  }
  return [];
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const cardMedia = getProjectCardMedia(project);
  const isSpotlight = project.category === "Spotlight";
  const beetleBotVideos = getBeetleBotVideos(project);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const shouldUseCover =
    project.id === "beetlebot" &&
    (beetleBotVideos.length > 0 || (project.image && project.image.endsWith(".mp4")));
  const mediaFitClass = shouldUseCover ? "object-cover" : "object-contain";

  useEffect(() => {
    if (beetleBotVideos.length > 1) {
      const video = document.getElementById(`beetlebot-video-${project.id}`) as HTMLVideoElement;
      if (video) {
        const handleEnded = () => {
          setCurrentVideoIndex((prev) => (prev + 1) % beetleBotVideos.length);
        };
        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
      }
    }
  }, [beetleBotVideos.length, project.id]);

  return (
    <div
      onClick={onClick}
      className={`project-card group animate-slide-up ${isSpotlight ? "border-2 border-yellow-500" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image/Video */}
      <div className="relative aspect-video overflow-hidden bg-black">
        {beetleBotVideos.length > 0 ? (
          <video
            id={`beetlebot-video-${project.id}`}
            key={beetleBotVideos[currentVideoIndex]?.src}
            src={beetleBotVideos[currentVideoIndex]?.src}
            className={`w-full h-full ${mediaFitClass} transition-transform duration-500 group-hover:scale-110 bg-black`}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : project.image && project.image.endsWith('.mp4') ? (
          <video
            src={project.image}
            className={`w-full h-full ${mediaFitClass} transition-transform duration-500 group-hover:scale-110 bg-black`}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={cardMedia.src}
            alt={cardMedia.label ?? project.title}
            className={`w-full h-full ${mediaFitClass} transition-transform duration-500 group-hover:scale-110 bg-black`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-white/90 text-slate-800 shadow-md backdrop-blur-sm">View details →</span>
        </div>
        
        {/* Spotlight Badge */}
        {isSpotlight && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-black flex items-center gap-1">
              ⭐ Spotlight
            </span>
          </div>
        )}
        
        {/* Category Badge */}
        {!isSpotlight && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 text-[11px] font-semibold rounded-lg backdrop-blur-md bg-background/75 text-foreground border border-border/40 shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">{project.summary}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag, i) => {
            const tagColors = [
              { bg: 'rgba(124,58,237,0.07)', color: '#7C3AED', border: 'rgba(124,58,237,0.2)' },
              { bg: 'rgba(99,102,241,0.07)', color: '#6366F1', border: 'rgba(99,102,241,0.2)' },
              { bg: 'rgba(192,38,211,0.07)', color: '#C026D3', border: 'rgba(192,38,211,0.2)' },
            ];
            const c = tagColors[i % tagColors.length];
            return (
              <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-lg border pointer-events-none"
                style={{ background: c.bg, color: c.color, borderColor: c.border }}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}