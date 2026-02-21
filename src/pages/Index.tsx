import { useMemo, useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SkillBadges } from "@/components/SkillBadges";
import { projects, aboutData, contactData } from "@/data/portfolio";
import { MapPin, Mail, Linkedin, Award, BookOpen, Users, ChevronLeft, ChevronRight, GraduationCap, FileText, Sun, Moon, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [heroApi, setHeroApi] = useState<CarouselApi | null>(null);
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  const heroImages = useMemo(() => [
    { src: "/banner/b1.jpeg"},
    { src: "/banner/b2.jpeg"},
    { src: "/banner/b3.jpeg"},
    { src: "/projects/certificates/img6.jpeg" },
    { src: "/projects/iris/img3.jpeg"},
    { src: "/projects/compost/img13.jpeg"},
    { src: "/projects/beetlebot/beetlebot_at_fsai-05.jpeg"},
    { src: "/projects/img5.jpeg"},
    { src: "/projects/hobbies/img.jpeg"},
    { src: "/projects/hobbies/img10.jpeg"},
    { src: "/projects/hobbies/img4.jpeg"},
    { src: "/projects/beetlebot/beetlebot_at_fsai-11.jpeg"},
    { src: "/projects/hobbies/img11.jpeg"},
    { src: "/projects/beetlebot/fsai-speaker.jpeg"},
    { src: "/projects/hobbies/img8.jpeg"},
  ], []);
  
  useEffect(() => {
    if (!heroApi) return;
    
    const interval = setInterval(() => {
      if (heroApi.canScrollNext()) {
        heroApi.scrollNext();
      } else {
        heroApi.scrollTo(0);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [heroApi]);

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const documentMedia = useMemo(
    () =>
      projects
        .map((project) => ({
          project,
          docs: [
            ...(project.content.media?.filter((m) => m.type === "pdf") ?? []),
            ...(project.id === "smart-compost"
              ? project.content.media?.filter((m) => m.type === "video" && m.src.includes("Khadify_DemoVideo")) ?? []
              : []),
            ...(project.id === "beetlebot"
              ? project.content.media?.filter((m) => m.type === "video" && (m.src.includes("beetlebot_demo") || m.src.includes("Spider_Bot"))) ?? []
              : []),
          ],
        }))
        .filter((entry) => entry.docs.length > 0),
    []
  );
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <a href="#" className="font-display font-bold text-xl gradient-text hover:opacity-80 transition-opacity">AG</a>
          <div className="flex items-center gap-3">
            {/* <nav className="hidden md:flex items-center gap-6 mr-4">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            </nav> */}
            <a
              href="/Aaryamann_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 py-2 rounded-xl text-white font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--gradient-warm)' }}
            >
              <FileText size={15} />
              Resume
              <ArrowUpRight size={14} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-xl bg-secondary/80 border border-border flex items-center justify-center hover:border-accent/40 transition-all duration-300 overflow-hidden"
              aria-label="Toggle dark mode"
            >
              <div className={`transition-transform duration-500 ${isDark ? 'rotate-0' : 'rotate-[360deg]'}`}>
                {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-violet-500" />}
              </div>
            </button>
          </div>
        </div>
      </div>
      <main className="flex-1 pt-14">
        {/* Hero Banner */}
        <section className="relative h-80 md:h-96 lg:h-[32rem] overflow-hidden">
          <Carousel opts={{ loop: true }} setApi={setHeroApi} className="h-full">
            <CarouselContent className="h-full">
              {heroImages.map((item, index) => (
                <CarouselItem key={index} className="h-80 md:h-96 lg:h-[32rem]">
                  <div className="relative h-full">
                    <img
                      src={item.src}
                      // alt={item.caption}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm md:text-base font-medium text-white drop-shadow-lg">
                        {/* {item.caption} */}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
            <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
          </Carousel>
        </section>

        {/* Profile Section */}
        <section className="relative -mt-20 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="relative group">
                <div className="w-35 h-35 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-background shadow-xl transition-transform duration-300 group-hover:scale-[1.03]">
                  <img src="/banner/profile.jpeg" alt="Aaryamann Goenka" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(192,38,211,0.15))', filter: 'blur(10px)' }} />
              </div>
              <div className="flex1 pt-2">
                <h1 className="text-2xl md:text-4xl font-display font-bold gradient-text mb-2 animate-fade-in py-1">{aboutData.name}</h1>                <p className="text-muted-foreground text-sm md:text-base mb-4 max-w-2xl animate-fade-in delay-100">{aboutData.title}</p>
                <div className="flex flex-wrap items-center gap-4 animate-fade-in delay-200">
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
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <MapPin size={14} className="text-accent" />{contactData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <div className="section-divider max-w-6xl mx-auto" />
        <section id="projects" className="pt-8 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-8 animate-slide-up">
              Portfolio
            </h2>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {categories.map((category, i) => {
                const grads = [
                  'linear-gradient(135deg, #7C3AED, #9F67FF)',
                  'linear-gradient(135deg, #7C3AED, #C026D3)',
                  'linear-gradient(135deg, #6366F1, #7C3AED)',
                  'linear-gradient(135deg, #9F67FF, #EC4899)',
                  'linear-gradient(135deg, #8B5CF6, #6366F1)',
                  'linear-gradient(135deg, #C026D3, #7C3AED)',
                  'linear-gradient(135deg, #A78BFA, #EC4899)',
                  'linear-gradient(135deg, #7C3AED, #A78BFA)',
                ];
                const active = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap border transition-all duration-300 ${
                      active
                        ? "text-white border-transparent shadow-lg scale-[1.03]"
                        : "bg-card text-muted-foreground border-border hover:border-accent/30 hover:text-foreground hover:-translate-y-0.5"
                    }`}
                    style={active ? { background: grads[i % grads.length], boxShadow: '0 4px 16px rgba(124,58,237,0.25)' } : {}}
                  >
                    {category === "all" ? "All Projects" : category}
                  </button>
                );
              })}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
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

        {/* Documents Section */}
        {documentMedia.length > 0 && (
          <>
            <div className="section-divider max-w-6xl mx-auto" />
            <section className="py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-display font-bold gradient-text">Project Documents</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Expand to preview PDFs in-browser; use the button to download.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {documentMedia.map(({ project, docs }, cardIdx) => {
                    const cardGrads = [
                      'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(159,103,255,0.03))',
                      'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(124,58,237,0.03))',
                      'linear-gradient(135deg, rgba(192,38,211,0.06), rgba(124,58,237,0.03))',
                      'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(99,102,241,0.03))',
                    ];
                    const iconGrads = [
                      'linear-gradient(135deg, #7C3AED, #9F67FF)',
                      'linear-gradient(135deg, #6366F1, #7C3AED)',
                      'linear-gradient(135deg, #C026D3, #7C3AED)',
                      'linear-gradient(135deg, #8B5CF6, #6366F1)',
                    ];
                    const badgeColors = [
                      { bg: 'rgba(124,58,237,0.08)', color: '#7C3AED', border: 'rgba(124,58,237,0.2)' },
                      { bg: 'rgba(99,102,241,0.08)', color: '#6366F1', border: 'rgba(99,102,241,0.2)' },
                      { bg: 'rgba(192,38,211,0.08)', color: '#C026D3', border: 'rgba(192,38,211,0.2)' },
                      { bg: 'rgba(139,92,246,0.08)', color: '#8B5CF6', border: 'rgba(139,92,246,0.2)' },
                    ];
                    const bc = badgeColors[cardIdx % badgeColors.length];
                    return (
                      <div
                        key={project.id}
                        className="group p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                        style={{ animationDelay: `${cardIdx * 100}ms`, background: cardGrads[cardIdx % cardGrads.length] }}
                      >
                        {/* Card header */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: iconGrads[cardIdx % iconGrads.length] }}>
                              <FileText size={16} />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Project</p>
                              <h4 className="text-base font-semibold text-foreground leading-tight">{project.title}</h4>
                            </div>
                          </div>
                          <span
                            className="px-2.5 py-1 text-[11px] font-medium rounded-lg border flex-shrink-0 mt-1"
                            style={{ background: bc.bg, color: bc.color, borderColor: bc.border }}
                          >
                            {project.id === "coastal-erosion" ? "Sustainability" : project.category}
                          </span>
                        </div>

                        {/* Documents accordion */}
                        <Accordion type="single" collapsible className="space-y-2">
                          {docs.map((doc, idx) => (
                            <AccordionItem
                              key={`${project.id}-doc-${idx}`}
                              value={`${project.id}-doc-${idx}`}
                              className="border border-border rounded-xl overflow-hidden bg-background/50 hover:border-accent/20 transition-colors duration-200"
                            >
                              <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                                <div className="flex items-center gap-4 w-full">
                                  {doc.type === "video" && (
                                    <div className="relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden bg-black">
                                      <video src={doc.src} className="w-full h-full object-cover" preload="metadata" muted />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                                          <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <div className="flex-1 flex items-center justify-between gap-4">
                                    <div>
                                      <span className="font-medium text-foreground block text-sm">{doc.label ?? "Document"}</span>
                                      {doc.description && (
                                        <span className="text-xs text-muted-foreground mt-0.5 block">{doc.description}</span>
                                      )}
                                    </div>
                                    <a
                                      href={doc.src}
                                      download={doc.type === "pdf"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="text-[11px] font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 flex-shrink-0 hover:-translate-y-0.5"
                                      style={{ background: bc.bg, color: bc.color, borderColor: bc.border }}
                                    >
                                      {doc.type === "video" ? "Watch" : "Download"}
                                    </a>
                                  </div>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-4 pb-4">
                                <div className="border border-border rounded-xl overflow-hidden bg-background shadow-inner">
                                  {doc.type === "video" ? (
                                    <video controls playsInline className="w-full h-80 object-contain bg-black" src={doc.src}>
                                      Your browser does not support the video tag.
                                    </video>
                                  ) : (
                                    <object data={doc.src} type="application/pdf" className="w-full h-80">
                                      <p className="p-4 text-sm text-muted-foreground">
                                        PDF preview unavailable.{" "}
                                        <a href={doc.src} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">
                                          Open in new tab
                                        </a>
                                        .
                                      </p>
                                    </object>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* About */}
        <div className="section-divider max-w-6xl mx-auto" />
        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">About Me</h2>
              <p className="text-foreground/80 text-base max-w-3xl leading-relaxed">{aboutData.bio}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Technical Background */}
              <div className="about-card animate-slide-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #7C3AED, #9F67FF)' }}>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Expertise</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Technical Background</h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {aboutData.technicalBackground.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground/90 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="about-card animate-slide-up delay-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #6366F1, #7C3AED)' }}>
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Impact</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Key Achievements</h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {aboutData.achievements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground/90 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Leadership */}
              <div className="about-card animate-slide-up delay-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #9F67FF, #EC4899)' }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Leadership</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Roles</h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {aboutData.leadership.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-foreground/90 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="about-card animate-slide-up delay-300">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-foreground/60 font-medium mb-1">Skills</p>
                  <h3 className="text-lg font-display font-semibold text-foreground">Technical Skills</h3>
                </div>
                <SkillBadges />
              </div>

              {/* Academic */}
              <div className="about-card animate-slide-up delay-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #C026D3, #7C3AED)' }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-foreground/60 font-medium">Education</p>
                    <h3 className="text-lg font-display font-semibold text-foreground">Academic Qualifications</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">IGCSE Grade 10</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      9 A*s: Chemistry, Physics, International Math, Additional Math, History, Computer Science, English Literature, English as a first language, Hindi
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      SAT: <span className="font-semibold text-foreground">1560 (800 Math)</span> | AP Econ: <span className="font-semibold text-foreground">5</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
      <Footer />
    </div>
  );
};

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border animate-slide-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default Index;