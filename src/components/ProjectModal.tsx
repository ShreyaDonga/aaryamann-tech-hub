import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MediaItem, Project } from "@/data/portfolio";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

const fallbackImage = "/projects/beetlebot/beetlebot1.jpeg";
const fallbackMedia: MediaItem = {
  type: "image",
  src: fallbackImage,
  label: "Beetel Bot hero",
};

const heroMediaOverrides: Record<string, MediaItem> = {
  "beetlebot": {
    type: "image",
    src: "/projects/beetlebot/beetlebot_at_fsai-05.jpeg",
    label: "Beetlebot Field Demo",
  },
  "smart-compost": {
    type: "image",
    src: "/projects/compost/compost-bin-11.jpeg",
    label: "Quality analysis",
  },
  "coastal-erosion": {
    type: "image",
    src: "/projects/mangrove/mangrove-analysis.jpeg",
    label: "Mangrove area reduction analysis",
  },
  "research-innovation": {
    type: "image",
    src: "/projects/cyberdost/research_innovation.jpeg",
    label: "Research & Engineering Innovation",
  },
  "robotics-leadership": {
    type: "image",
    src: "/projects/ftc/building_FTC_robotics.jpeg",
    label: "Building FTC Robotics",
  },
  "stem-olympiads": {
    type: "image",
    src: "/projects/navy_presentation.jpeg",
    label: "Coastal Research Presentation",
  },
  "tech-fairs-outreach": {
    type: "image",
    src: "/projects/compost/compost-bin-06.jpeg",
    label: "BIS Tech Fair Exhibit",
  },
  "cyber-advocacy": {
    type: "image",
    src: "/projects/cyberdost/zoom_webinar_cyberdost.jpeg",
    label: "CyberDost Webinar",
  },
  "leadership-community": {
    type: "image",
    src: "/projects/STEM_Olympiads_Academic_Achievements.jpeg",
    label: "STEM Olympiads & Academic Achievements",
  },
};

const getHeroMedia = (project: Project) => {
  if (heroMediaOverrides[project.id]) {
    return heroMediaOverrides[project.id];
  }
  // Find first image that is different from the thumbnail
  const imageMedia = project.content.media?.find((item) => 
    item.type === "image" && item.src !== project.image
  );
  if (imageMedia) return imageMedia;
  // If no different image found, try video that's different from thumbnail
  const videoMedia = project.content.media?.find((item) => 
    item.type === "video" && item.src !== project.image
  );
  if (videoMedia) return videoMedia;
  // If still no match, try any video (even if same as thumbnail, videos are OK)
  const anyVideo = project.content.media?.find((item) => item.type === "video");
  if (anyVideo) return anyVideo;
  // Last resort: use fallback image (never use thumbnail image as fallback)
  return fallbackMedia;
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const heroMedia = getHeroMedia(project);
  const heroLabel = heroMedia.label ?? project.title;
  const isHeroVideo = heroMedia.type === "video";
  const pdfMedia = project.content.media?.filter((m) => m.type === "pdf") ?? [];
  const videoMedia = project.content.media?.filter((m) => m.type === "video") ?? [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col gap-0 [&>button.absolute]:hidden">
        {/* Sticky Close Button — always visible */}
        <DialogClose asChild>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 flex items-center justify-center transition-colors shadow-lg z-[60] border-2 border-black/20"
            aria-label="Close project"
          >
            <X size={16} className="sm:w-5 sm:h-5 text-black font-bold" strokeWidth={3} />
          </button>
        </DialogClose>

        <ScrollArea className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* Hero Media — scrolls with content */}
          <div className="relative w-full aspect-video sm:max-h-[420px] h-[30vh] sm:h-auto bg-black flex items-center justify-center overflow-hidden">
            {isHeroVideo ? (
              <video
                controls
                playsInline
                muted
                aria-label={heroLabel}
                className="w-full h-full object-contain block"
              >
                <source src={heroMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={heroMedia.src}
                alt={heroLabel}
                className="w-full h-full object-contain block"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-medium rounded-full bg-accent text-accent-foreground mb-1.5 sm:mb-3 inline-block">
                {project.category}
              </span>
              <DialogHeader>
                <DialogTitle className="text-base sm:text-2xl md:text-3xl font-display text-foreground leading-tight">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          {/* Content */}
          <div className="p-3 sm:p-6 space-y-3 sm:space-y-6 overflow-x-hidden">

            {/* PDFs */}
            {pdfMedia.length > 0 && (
              <Section title="Supporting Documents">
                <Accordion type="single" collapsible className="w-full space-y-1.5 sm:space-y-2">
                  {pdfMedia.map((doc, idx) => (
                    <AccordionItem key={`${project.id}-pdf-${idx}`} value={`${project.id}-pdf-${idx}`} className="border border-border rounded-lg">
                      <AccordionTrigger className="px-2 sm:px-4 py-2 sm:py-3 text-left">
                        <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
                          <span className="font-medium text-foreground text-xs sm:text-base">{doc.label ?? "Document"}</span>
                          <a
                            href={doc.src}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            Download
                          </a>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-2 sm:px-4 pb-2 sm:pb-4">
                        <div className="border border-border rounded-lg overflow-hidden bg-card">
                          <object data={doc.src} type="application/pdf" className="w-full h-48 sm:h-96">
                            <p className="p-2 sm:p-4 text-[10px] sm:text-sm text-muted-foreground">
                              PDF preview unavailable.{" "}
                              <a href={doc.src} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                                Open in new tab
                              </a>
                              .
                            </p>
                          </object>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Section>
            )}

            {/* Project Story */}
            {project.content.contentFlow && project.content.contentFlow.length > 0 && (
              <Section title={`${project.title} Story`}>
                <div className="space-y-6 sm:space-y-12">
                  {project.content.contentFlow.map((block, index) => {
                    const media = project.content.media?.[block.mediaIndex];
                    if (!media) return null;

                    return (
                      <div
                        key={index}
                        className={`flex flex-col gap-4 sm:gap-6 md:gap-8 items-center ${
                          index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                      >
                        <div className="w-full md:w-1/2 overflow-hidden rounded-lg sm:rounded-3xl border border-border bg-card shadow-sm">
                          {media.type === "image" ? (
                            <img
                              src={media.src}
                              alt={media.label}
                              className="w-full h-full min-h-[150px] sm:min-h-[320px] object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <video
                              controls
                              playsInline
                              muted
                              className="w-full h-full min-h-[150px] sm:min-h-[320px] object-cover"
                            >
                              <source src={media.src} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                        <div className="w-full md:w-1/2 space-y-2 sm:space-y-3 text-left">
                          {block.subtitle && (
                            <p className="text-[9px] sm:text-xs font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-accent">
                              {block.subtitle}
                            </p>
                          )}
                          <h3 className="text-base sm:text-xl font-semibold text-foreground">
                            {block.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {block.text}
                          </p>
                          {block.bullets && block.bullets.length > 0 && (
                            <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                              {block.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Section>
            )}

            {/* Abstract */}
            {project.content.abstract && (
              <Section title="Abstract">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.abstract}
                </p>
              </Section>
            )}

            {/* Introduction */}
            {project.content.introduction && (
              <Section title="Introduction & Objective">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.introduction}
                </p>
              </Section>
            )}

            {/* Background */}
            {project.content.background && (
              <Section title="Background Research">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.background}
                </p>
              </Section>
            )}

            {/* Innovation */}
            {project.content.innovation && (
              <Section title="Innovation">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.innovation}
                </p>
              </Section>
            )}

            {/* Materials */}
            {project.content.materials && project.content.materials.length > 0 && (
              <Section title="Materials Used">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.content.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Hardware & Lab Requirements */}
            {project.content.hardwareGroups && project.content.hardwareGroups.length > 0 && (
              <Section title="Hardware & Lab Requirements">
                <div className="space-y-4 sm:space-y-6">
                  {project.content.hardwareGroups.map((group, index) => (
                    <div key={index} className="space-y-1.5 sm:space-y-2">
                      <p className="font-medium text-foreground text-xs sm:text-base">{group.title}</p>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-muted-foreground">
                        {group.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Architecture Comparison */}
            {project.content.comparisons && project.content.comparisons.length > 0 && (
              <Section title="Comparative Architecture">
                <div className="space-y-4 sm:space-y-6">
                  {project.content.comparisons.map((stage, index) => (
                    <div key={index} className="space-y-2 sm:space-y-3">
                      <p className="text-xs sm:text-base font-medium text-foreground">{stage.title}</p>
                      {stage.note && (
                        <p className="text-xs sm:text-sm text-muted-foreground">{stage.note}</p>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <p className="font-medium text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Key Hardware Components</p>
                          <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                            {stage.hardwareComponents.map((component, compIndex) => (
                              <li key={compIndex}>{component}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-xs sm:text-sm text-foreground mb-1 sm:mb-2">Functions</p>
                          <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground space-y-0.5 sm:space-y-1">
                            {stage.functions.map((fn, fnIndex) => (
                              <li key={fnIndex}>{fn}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Methodology */}
            {project.content.methodology && (
              <Section title="Methodology">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.methodology}
                </p>
              </Section>
            )}

            {/* Results */}
            {project.content.results && (
              <Section title="Results & Conclusion">
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">
                  {project.content.results}
                </p>
              </Section>
            )}

            {/* Sub-Projects (for Cybersecurity) */}
            {project.content.subProjects && project.content.subProjects.length > 0 && (
              <Section title="Project Collection">
                <div className="grid gap-2 sm:gap-4">
                  {project.content.subProjects.map((subProject, index) => (
                    <div key={index} className="p-2 sm:p-4 rounded-lg bg-secondary/50 border border-border">
                      <h4 className="font-display font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-base">
                        {subProject.title}
                      </h4>
                      <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed">
                        {subProject.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Image Gallery — for projects with multiple images */}
            {(() => {
              const galleryImages = project.content.media?.filter((m) => m.type === "image") ?? [];
              if (galleryImages.length <= 1) return null;
              return (
                <Section title="Gallery">
                  <ImageGallery images={galleryImages} projectId={project.id} />
                </Section>
              );
            })()}

            {/* Citations */}
            {project.content.citations && project.content.citations.length > 0 && (
              <Section title="References">
                <div className="space-y-1.5 sm:space-y-2">
                  {project.content.citations.map((citation, index) => (
                    <a
                      key={index}
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-accent hover:underline text-[10px] sm:text-sm break-all"
                    >
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      {citation}
                    </a>
                  ))}
                </div>
              </Section>
            )}

            {/* Video Thumbnails */}
            {videoMedia.length > 0 && (
              <Section title="Project Videos">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {videoMedia.map((video, idx) => (
                    <VideoThumbnail
                      key={`${project.id}-video-${idx}`}
                      video={video}
                      projectId={project.id}
                      index={idx}
                    />
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

function VideoThumbnail({ video, projectId, index }: { video: MediaItem; projectId: string; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = `video-player-${projectId}-${index}`;

  const handleClick = () => {
    const videoElement = document.getElementById(videoId) as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="group relative rounded-lg overflow-hidden border border-border bg-card cursor-pointer hover:border-accent transition-colors"
      onClick={handleClick}
    >
      <div className="relative aspect-video bg-black">
        <video
          id={videoId}
          src={video.src}
          className="w-full h-full object-cover"
          preload="metadata"
          muted
          playsInline
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors pointer-events-none">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-2 sm:p-3">
        <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">
          {video.label}
        </h4>
        {video.description && (
          <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5 sm:space-y-3">
      <h3 className="font-display font-semibold text-sm sm:text-lg text-foreground flex items-center gap-1.5 sm:gap-2">
        <span className="w-0.5 sm:w-1 h-3 sm:h-6 bg-accent rounded-full" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function ImageGallery({ images, projectId }: { images: MediaItem[]; projectId: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = images.length;

  const prev = () => setCurrentIdx((i) => (i - 1 + total) % total);
  const next = () => setCurrentIdx((i) => (i + 1) % total);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
        <img
          src={images[currentIdx].src}
          alt={images[currentIdx].label ?? `Image ${currentIdx + 1}`}
          className="w-full h-full object-contain"
        />

        {/* Nav arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] sm:text-xs backdrop-blur-sm">
          {currentIdx + 1} / {total}
        </div>
      </div>

      {/* Caption */}
      {images[currentIdx].label && (
        <p className="text-center text-xs sm:text-sm text-muted-foreground">{images[currentIdx].label}</p>
      )}

      {/* Thumbnail strip */}
      {total > 2 && (
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {images.map((img, i) => (
            <button
              key={`${projectId}-thumb-${i}`}
              onClick={() => setCurrentIdx(i)}
              className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentIdx ? "border-accent opacity-100" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}