import { useMemo, useState, useEffect, useRef } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { SkillBadges } from "@/components/SkillBadges";
import { projects, aboutData, contactData } from "@/data/portfolio";
import { MapPin, Mail, Linkedin, Award, BookOpen, Users, GraduationCap, FileText, Sun, Moon, ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ── Helper: get card thumbnail ── */
const getThumb = (p: Project) =>
  p.thumbnail ?? p.content.media?.find((m) => m.type === "image")?.src ?? p.image;

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isDark, setIsDark] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  /* ── Hero images (cycle) ── */
  const heroImages = useMemo(() => [
    // "/banner/b1.jpeg",
    // "/banner/b2.jpeg",
    // "/banner/b3.jpeg",
    // "/projects/beetlebot/beetlebot_at_fsai-05.jpeg",
    // "/projects/hobbies/img.jpeg",
    "/projects/beetlebot/beetlebot_at_fsai-05.jpeg",
    "/projects/hobbies/img8.jpeg",
    "/projects/hobbies/img7.jpeg",
    "/projects/compost/compost-bin-01.jpeg",
    "/projects/iris/img3.jpeg",
  ], []);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  /* ── Data ── */
  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects = useMemo(
    () => (activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );
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

  const iconGrads = [
    "linear-gradient(135deg, #7C3AED, #9F67FF)",
    "linear-gradient(135deg, #6366F1, #7C3AED)",
    "linear-gradient(135deg, #9F67FF, #EC4899)",
    "linear-gradient(135deg, #C026D3, #7C3AED)",
    "linear-gradient(135deg, #8B5CF6, #6366F1)",
  ];
  const filterGrads = [
    "linear-gradient(135deg, #7C3AED, #9F67FF)",
    "linear-gradient(135deg, #7C3AED, #C026D3)",
    "linear-gradient(135deg, #6366F1, #7C3AED)",
    "linear-gradient(135deg, #9F67FF, #EC4899)",
    "linear-gradient(135deg, #8B5CF6, #6366F1)",
    "linear-gradient(135deg, #C026D3, #7C3AED)",
    "linear-gradient(135deg, #A78BFA, #EC4899)",
    "linear-gradient(135deg, #7C3AED, #A78BFA)",
  ];
  const badgeColors = [
    { bg: "rgba(124,58,237,0.08)", color: "#7C3AED", border: "rgba(124,58,237,0.2)" },
    { bg: "rgba(99,102,241,0.08)", color: "#6366F1", border: "rgba(99,102,241,0.2)" },
    { bg: "rgba(192,38,211,0.08)", color: "#C026D3", border: "rgba(192,38,211,0.2)" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ═══════════════ NAV ═══════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-lg gradient-text">Aaryamann.</a>
          <div className="flex items-center gap-5">
            <a href="#work" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#docs" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a
              href="/Aaryamann_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-warm)" }}
            >
              Resume
              <ArrowUpRight size={14} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-accent/40 transition-all duration-300"
            >
              <div className={`transition-transform duration-500 ${isDark ? "rotate-0" : "rotate-[360deg]"}`}>
                {isDark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-violet-500" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
          {/* Crossfading background images */}
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: heroIdx === i ? 1 : 0 }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

          {/* Hero content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-8 max-w-7xl mx-auto pb-20">
            <p className="text-white/70 text-sm md:text-base font-medium tracking-wider uppercase mb-3 animate-fade-in">
              {aboutData.title}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[0.95] mb-6 animate-slide-up">
              Aaryamann<br />
              <span className="gradient-text">Goenka</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 animate-fade-in delay-300">
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <MapPin size={14} /> {contactData.location}
              </div>
              <a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${contactData.email}`} className="text-white/60 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-500">
            <a href="#work" className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors">
              <span className="text-[10px] uppercase tracking-[0.3em] mb-1">Scroll</span>
              <ChevronDown size={18} className="animate-bounce" />
            </a>
          </div>

          {/* Image dots */}
          <div className="absolute bottom-6 right-8 z-10 flex gap-1.5">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${heroIdx === i ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════ WORK / PORTFOLIO ═══════════════ */}
        <section id="work" className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2 animate-fade-in">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-slide-up">
                  Selected Work
                </h2>
              </div>
              {/* Filter pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat, i) => {
                  const active = activeFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap border transition-all duration-300 ${
                        active ? "text-white border-transparent" : "text-muted-foreground border-border hover:border-accent/30 hover:text-foreground"
                      }`}
                      style={active ? { background: filterGrads[i % filterGrads.length] } : {}}
                    >
                      {cat === "all" ? "All" : cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, idx) => {
                const thumb = getThumb(project);
                const isVideo = project.image?.endsWith(".mp4") || (project.id === "beetlebot");
                const videoSrc =
                  project.id === "beetlebot"
                    ? project.content.media?.find((m) => m.type === "video" && m.src.includes("beetlebot_demo"))?.src ?? project.image
                    : project.image;
                /* Make first 2 items larger */
                const isLarge = idx < 2;
                const tagC = badgeColors[idx % badgeColors.length];
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`portfolio-card animate-slide-up ${isLarge ? "md:col-span-1 lg:row-span-1 aspect-[4/3]" : "aspect-[4/3]"}`}
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    {isVideo && videoSrc?.endsWith(".mp4") ? (
                      <video src={videoSrc} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                    ) : (
                      <img src={thumb} alt={project.title} className="w-full h-full object-cover" />
                    )}

                    {/* Always-visible category pill */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-full backdrop-blur-md bg-black/40 text-white/90 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-dot" />
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="card-overlay">
                      <div className="card-title">
                        <h3 className="text-white font-display font-bold text-lg md:text-xl mb-1 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2 mb-3">{project.summary}</p>
                        <div className="flex gap-1.5">
                          {project.tags.slice(0, 3).map((tag, ti) => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/15 text-white/80 backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════ DOCUMENTS ═══════════════ */}
        {documentMedia.length > 0 && (
          <section id="docs" className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2">Resources</p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                    Project Documents
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentMedia.map(({ project, docs }, ci) => {
                  const bc = badgeColors[ci % badgeColors.length];
                  return (
                    <div
                      key={project.id}
                      className="group rounded-2xl bg-card border-0 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up"
                      style={{ animationDelay: `${ci * 100}ms` }}
                    >
                      {/* Card header with accent top-border */}
                      <div className="h-1 w-full" style={{ background: iconGrads[ci % iconGrads.length] }} />
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md" style={{ background: iconGrads[ci % iconGrads.length] }}>
                              <FileText size={18} />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">Project</p>
                              <h4 className="text-lg font-display font-semibold text-foreground leading-tight">{project.title}</h4>
                            </div>
                          </div>
                          <span className="px-3 py-1 text-[11px] font-medium rounded-full flex-shrink-0 mt-1 text-white" style={{ background: iconGrads[ci % iconGrads.length] }}>
                            {project.id === "coastal-erosion" ? "Sustainability" : project.category}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <Accordion type="single" collapsible className="space-y-2">
                            {docs.map((doc, idx) => (
                              <AccordionItem key={`${project.id}-doc-${idx}`} value={`${project.id}-doc-${idx}`} className="border-0 rounded-xl overflow-hidden bg-secondary/50 hover:bg-secondary transition-colors">
                                <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                                  <div className="flex items-center gap-4 w-full">
                                    {doc.type === "video" && (
                                      <div className="relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden bg-black">
                                        <video src={doc.src} className="w-full h-full object-cover" preload="metadata" muted />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                          <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                                            <svg className="w-3.5 h-3.5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    <div className="flex-1 flex items-center justify-between gap-4">
                                      <span className="font-medium text-foreground text-sm">{doc.label ?? "Document"}</span>
                                      <a
                                        href={doc.src} download={doc.type === "pdf"} target="_blank" rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-[11px] font-semibold px-3.5 py-1.5 rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-md flex-shrink-0"
                                        style={{ background: iconGrads[ci % iconGrads.length] }}
                                      >
                                        {doc.type === "video" ? "Watch" : "Download"}
                                      </a>
                                    </div>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4">
                                  <div className="rounded-xl overflow-hidden bg-background shadow-inner">
                                    {doc.type === "video" ? (
                                      <video controls playsInline className="w-full h-80 object-contain bg-black" src={doc.src} />
                                    ) : (
                                      <object data={doc.src} type="application/pdf" className="w-full h-80">
                                        <p className="p-4 text-sm text-muted-foreground">
                                          PDF preview unavailable.{" "}
                                          <a href={doc.src} target="_blank" rel="noopener noreferrer" className="text-accent underline">Open in new tab</a>.
                                        </p>
                                      </object>
                                    )}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════ ABOUT ═══════════════ */}
        <section id="about" className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Split layout: photo + bio */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src="/banner/profile.jpeg" alt="Aaryamann Goenka" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(192,38,211,0.1))", filter: "blur(20px)" }} />
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-center">
                <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2">About</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  The person behind<br />the <span className="gradient-text">projects</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  {aboutData.bio}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={contactData.socials.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href={`mailto:${contactData.email}`}
                    className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-1 transition-all duration-300">
                    <Mail size={18} />
                  </a>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm ml-2">
                    <MapPin size={14} className="text-accent" />{contactData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up">
                <div className="h-1 w-full" style={{ background: iconGrads[0] }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: iconGrads[0] }}><BookOpen size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">Expertise</p>
                      <h3 className="text-lg font-display font-bold text-foreground">Technical Background</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {aboutData.technicalBackground.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" /><span className="text-foreground/85 leading-relaxed">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up delay-100">
                <div className="h-1 w-full" style={{ background: iconGrads[1] }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: iconGrads[1] }}><Award size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">Impact</p>
                      <h3 className="text-lg font-display font-bold text-foreground">Key Achievements</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {aboutData.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" /><span className="text-foreground/85 leading-relaxed font-medium">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up delay-200">
                <div className="h-1 w-full" style={{ background: iconGrads[2] }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: iconGrads[2] }}><Users size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">Leadership</p>
                      <h3 className="text-lg font-display font-bold text-foreground">Roles</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {aboutData.leadership.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" /><span className="text-foreground/85 leading-relaxed font-medium">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up delay-300">
                <div className="h-1 w-full" style={{ background: iconGrads[4] }} />
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold mb-1">Skills</p>
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">Technical Skills</h3>
                  <SkillBadges />
                </div>
              </div>

              <div className="rounded-2xl bg-card shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-400 hover:-translate-y-1 overflow-hidden animate-slide-up delay-400">
                <div className="h-1 w-full" style={{ background: iconGrads[3] }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: iconGrads[3] }}><GraduationCap size={18} /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold">Education</p>
                      <h3 className="text-lg font-display font-bold text-foreground">Academic Qualifications</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-sm">IGCSE Grade 10</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        9 A*s: Chemistry, Physics, International Math, Additional Math, History, Computer Science, English Literature, English as a first language, Hindi
                      </p>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        SAT: <span className="font-bold text-foreground">1560 (800 Math)</span> | AP Econ: <span className="font-bold text-foreground">5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;