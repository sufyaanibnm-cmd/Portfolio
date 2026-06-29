import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  HardHat, Building2, Ruler, ShieldCheck, Users, ClipboardList,
  GanttChart, Hammer, Mail, Phone, MapPin, Linkedin, Download,
  ArrowRight, MessageCircle, Briefcase, GraduationCap, Award,
  Layers, Target, TrendingUp, Wrench, FileText, CheckCircle2, Menu, X,
  Image as ImageIcon,
} from "lucide-react";

// Place your portrait image at public/portrait.png and update this path.
// It is referenced as a plain public-folder URL so GitHub Pages can serve it.
const portrait = `${import.meta.env.BASE_URL}portrait.png`;
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- helpers ---------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Section({
  id, eyebrow, title, subtitle, children,
}: { id: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`mb-14 max-w-2xl transition-all duration-700 ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------- Nav ---------- */

const NAV = [
  ["About", "about"], ["Experience", "experience"], ["Skills", "skills"],
  ["Services", "services"], ["Projects", "projects"], ["Contact", "contact"],
] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
            <HardHat className="h-4 w-4" />
          </span>
          <span>Mushtaq&nbsp;Ahmad<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Hire Me
        </a>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map(([label, id]) => (
              <a
                key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted-foreground"
              >{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 md:grid-cols-[1.2fr_1fr] md:gap-16 md:pb-32">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Project Engineer / Project Lead roles
          </div>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Mushtaq Ahmad <br />
            <span className="text-gradient">Ibn Mubarack</span>
          </h1>
          <p className="mt-5 text-base font-medium text-foreground/80 md:text-lg">
            Project Engineer · Project Lead · Civil Engineering Professional
          </p>
          <p className="mt-6 max-w-xl text-pretty text-muted-foreground md:text-lg">
            Successfully delivering construction and interior fit-out projects with quality, precision,
            and professional excellence — across the UAE and India.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`} download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-in md:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-elegant)]">
            <img
              src={portrait}
              alt="Mushtaq Ahmad Ibn Mubarack — Project Engineer"
              width={896}
              height={1152}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">Currently leading</div>
                  <div className="truncate text-xs text-muted-foreground">Luxury Villa Fit-Out · Duagh Design And Build</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden animate-float rounded-2xl border border-border bg-surface-2 p-3 shadow-lg md:block">
            <HardHat className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "10+", label: "Successfully Delivered Projects" },
  { value: "2", label: "Countries — UAE & India" },
  { value: "2500+", label: "Sq.M of Interiors Executed" },
];

function Stats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background p-6 text-center md:p-10">
            <div className="font-display text-3xl font-bold text-gradient md:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */

const ABOUT_TAGS = [
  "Interior Fit-Out Expertise", "Project Coordination",
  "Site Execution", "Quality Assurance", "Team Leadership",
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Engineering quality into every project."
      subtitle="Hands-on Project Engineer with the discipline of site execution and the perspective of project leadership."
    >
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I am a Civil Engineer and Project Engineer with nearly 9 years of experience in
            construction and interior fit-out projects across India and the UAE. I have been
            involved in project execution, site coordination, quantity take-off, quality
            control, and client coordination.
          </p>
          <p>
            I am passionate about delivering projects efficiently while maintaining high
            standards of quality and professionalism — bridging the gap between site reality
            and project management excellence.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {ABOUT_TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
              >{t}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Briefcase, k: "Current Role", v: "Project Engineer · Acting Project Lead" },
            { icon: MapPin, k: "Based in", v: "Dubai, United Arab Emirates" },
            { icon: GraduationCap, k: "Education", v: "Diploma in Civil Engineering" },
            { icon: Award, k: "Specialization", v: "Construction & Fit-Out Delivery" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                <div className="mt-0.5 truncate font-semibold">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */

const EXPERIENCE = [
  {
    role: "Project Engineer · Acting Project Lead",
    company: "Duagh Design And Build LLC",
    period: "2025 — Present",
    location: "UAE",
    points: [
      "Luxury villa fit-out project management",
      "Subcontractor management and consultant coordination",
      "NOC processing and quality inspections",
      "Progress reporting and cost optimization",
    ],
  },
  {
    role: "Project Engineer — Fit-Out Lead",
    company: "A-Space Technical Services LLC",
    period: "2024 — 2025",
    location: "UAE",
    points: [
      "Residential apartment fit-out execution",
      "Payment applications and variation claims",
      "Project cashflow monitoring",
      "Material approvals and delay mitigation",
    ],
  },
  {
    role: "Project Engineer",
    company: "Tri Lines Contracting LLC, Dubai",
    period: "2022 — 2024",
    location: "UAE",
    points: [
      "Villa construction execution",
      "Structural and MEP coordination",
      "Consultant approvals and procurement",
      "Daily site supervision",
    ],
  },
  {
    role: "Senior Site Engineer",
    company: "NexGen Constructions",
    period: "2021 — 2022",
    location: "India",
    points: [
      "Quality control implementation",
      "Schedule management",
      "Project delivery monitoring",
    ],
  },
  {
    role: "Site Engineer",
    company: "ATPSYLAB",
    period: "2019 — 2021",
    location: "India",
    points: ["Site supervision", "Quality assurance", "Construction coordination"],
  },
  {
    role: "Site Supervisor",
    company: "G.T. Constructions",
    period: "2017 — 2019",
    location: "India",
    points: ["Workforce supervision", "Construction execution", "Drawing interpretation"],
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career Timeline"
      title="Nine years of building, leading, delivering."
      subtitle="From site supervision in India to project leadership in the UAE — a steady progression of responsibility and scale."
    >
      <div className="relative">
        <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
        <ul className="space-y-10">
          {EXPERIENCE.map((e, i) => (
            <TimelineItem key={e.role + e.period} item={e} index={i} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

function TimelineItem({ item, index }: { item: typeof EXPERIENCE[number]; index: number }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  const left = index % 2 === 0;
  return (
    <li
      ref={ref}
      className={`relative grid grid-cols-[2rem_1fr] gap-4 transition-all duration-700 md:grid-cols-2 md:gap-12 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="relative z-10 mt-3 inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background md:absolute md:left-1/2 md:-translate-x-1/2"
      />
      <div className="md:col-span-2 md:grid md:grid-cols-2 md:gap-12">
        <div className={`${left ? "md:order-1 md:text-right" : "md:order-2"}`}>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors hover:border-primary/40 md:p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">{item.period} · {item.location}</div>
            <h3 className="mt-2 text-xl font-bold">{item.role}</h3>
            <div className="text-sm text-muted-foreground">{item.company}</div>
            <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:text-right" : ""}`}>
              {item.points.map((p) => (
                <li key={p} className={`flex items-start gap-2 ${left ? "md:flex-row-reverse" : ""}`}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={left ? "md:order-2" : "md:order-1"} />
      </div>
    </li>
  );
}

/* ---------- Education ---------- */

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Foundations in civil engineering.">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Diploma in Civil Engineering (DCE)</h3>
              <p className="mt-1 text-muted-foreground">Al-Ameen Polytechnic College</p>
            </div>
          </div>
          <div className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            2014 — 2017
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */

const SKILL_GROUPS = [
  {
    icon: GanttChart, title: "Project Execution & Coordination",
    skills: [
      ["Project Execution & Site Coordination", 90],
      ["Progress Monitoring", 88],
      ["Material Management", 85],
      ["Work Planning & Coordination", 85],
    ] as const,
  },
  {
    icon: Hammer, title: "Construction & Engineering",
    skills: [
      ["Interior Fit-Out", 92],
      ["Civil Construction", 88],
      ["Quantity Take-Off (QTO)", 90],
      ["Material Estimation", 85],
    ] as const,
  },
  {
    icon: Wrench, title: "Technical Skills",
    skills: [
      ["AutoCAD", 75],
      ["Construction Drawings", 90],
      ["Documentation & Reporting", 90],
      ["Quantity Verification", 88],
    ] as const,
  },
  {
    icon: Users, title: "Coordination & Communication",
    skills: [
      ["Client Coordination", 90],
      ["Consultant Coordination", 85],
      ["Subcontractor Coordination", 88],
      ["Team Coordination", 88],
    ] as const,
  },
  {
    icon: ShieldCheck, title: "Quality & Site Management",
    skills: [
      ["Quality Control", 90],
      ["Site Inspection", 92],
      ["Health & Safety Awareness", 85],
      ["Problem Solving", 90],
    ] as const,
  },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills built on the site, refined in the office."
      subtitle="A blend of execution muscle and project-level oversight, sharpened across residential, commercial, and luxury fit-out work."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g) => (
          <SkillCard key={g.title} group={g} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group }: { group: typeof SKILL_GROUPS[number] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Icon = group.icon;
  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-border bg-surface p-6 transition-all duration-700 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold">{group.title}</h3>
      </div>
      <ul className="space-y-3">
        {group.skills.map(([name, pct]) => (
          <li key={name}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-foreground/90">{name}</span>
              <span className="text-muted-foreground">{pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-1000 ease-out"
                style={{ width: shown ? `${pct}%` : "0%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Services ---------- */

const SERVICES = [
  { icon: HardHat, title: "Project Execution & Site Supervision", desc: "Managing day-to-day construction activities and ensuring project success." },
  { icon: Layers, title: "Interior Fit-Out Coordination", desc: "Coordinating all trades and stakeholders for smooth fit-out delivery." },
  { icon: Ruler, title: "Quantity Take-Off & Estimation", desc: "Accurate quantity calculations and material planning." },
  { icon: ShieldCheck, title: "Quality Assurance & Inspection", desc: "Maintaining quality standards throughout project execution." },
  { icon: Users, title: "Contractor & Subcontractor Coordination", desc: "Managing teams and ensuring timely completion." },
  { icon: FileText, title: "Construction Documentation & Reporting", desc: "Preparing project reports, records, and documentation." },
  { icon: TrendingUp, title: "Progress Monitoring & Project Coordination", desc: "Tracking milestones and maintaining schedules." },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title="Services across the project lifecycle."
      subtitle="From quantity take-off to final handover — a complete delivery toolkit for construction and fit-out projects."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */

const PROJECTS = [
  {
    title: "Luxury Villa Interior Fit-Out",
    type: "Residential · UAE",
    desc: "End-to-end fit-out delivery for high-end private villas — coordinating finishes, MEP integration, and bespoke joinery to handover.",
    scope: ["Subcontractor management", "Quality inspections", "Cost optimization", "Client coordination"],
  },
  {
    title: "Residential Apartment Fit-Out",
    type: "Residential · UAE",
    desc: "Multi-unit apartment fit-out works in Dubai — material approvals, variation claims, and tight schedule control.",
    scope: ["Fit-out execution", "Payment applications", "Cashflow monitoring", "Delay mitigation"],
  },
  {
    title: "Commercial Interior Project",
    type: "Commercial · India",
    desc: "Commercial space fit-out with multi-trade coordination — partitioning, ceiling systems, and MEP synchronization on programme.",
    scope: ["Multi-trade coordination", "Project scheduling", "Consultant approvals", "Handover"],
  },
  {
    title: "Civil Construction Works",
    type: "Civil · India",
    desc: "Residential construction projects covering structural works, finishing, and handover activities — from foundation to occupancy.",
    scope: ["Structural execution", "Quantity take-off", "Quality control", "Finishing & handover"],
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects delivered across UAE and India."
      subtitle="A snapshot of the residential, commercial, and luxury fit-out engagements that shaped my delivery experience."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`group overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-700 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
        <div className="grid h-full w-full place-items-center text-muted-foreground">
          <ImageIcon className="h-12 w-12" aria-hidden="true" />
        </div>
        <div className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {p.type}
        </div>
      </div>
      <div className="p-6 md:p-7">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.scope.map((s) => (
            <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Expertise ---------- */

const EXPERTISE = [
  { icon: Target, title: "Project Planning" },
  { icon: HardHat, title: "Site Execution" },
  { icon: GanttChart, title: "Schedule Management" },
  { icon: Users, title: "Stakeholder Coordination" },
  { icon: ShieldCheck, title: "Quality Management" },
  { icon: ClipboardList, title: "Risk Identification" },
  { icon: Layers, title: "Resource Allocation" },
];

function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Core Expertise"
      title="The disciplines I bring to every project."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 [&>*:last-child]:col-span-full [&>*:last-child]:justify-self-center [&>*:last-child]:w-full [&>*:last-child]:max-w-xs">
        {EXPERTISE.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 font-semibold">{title}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Let's build your next project."
      subtitle="Open to Project Engineer, Project Management, and Construction Management opportunities across the UAE."
    >
      <div className="grid gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, k: "Email", v: "mushtaqahmad.ibnm@gmail.com", href: "mailto:mushtaqahmad.ibnm@gmail.com" },
            { icon: Phone, k: "Phone", v: "+971 52 620 3599", href: "tel:+971526203599" },
            { icon: MapPin, k: "Location", v: "Dubai, United Arab Emirates" },
            { icon: Linkedin, k: "LinkedIn", v: "View My LinkedIn Profile", href: "https://www.linkedin.com/in/mushtaq-ahmad-3906a7232" },
          ].map(({ icon: Icon, k, v, href }) => {
            const inner = (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="mt-0.5 truncate font-semibold">{v}</div>
                </div>
              </div>
            );
            return href ? <a key={k} href={href}>{inner}</a> : <div key={k}>{inner}</div>;
          })}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="https://wa.me/971526203599" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`} download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-base font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <HardHat className="h-4 w-4" />
            </span>
            Mushtaq Ahmad Ibn Mubarack
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Building Excellence Through Quality, Leadership, and Professional Project Delivery.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Navigate</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} className="hover:text-foreground">{label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Connect</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:mushtaqahmad.ibnm@gmail.com" className="hover:text-foreground">Email</a></li>
            <li><a href="tel:+971526203599" className="hover:text-foreground">Phone</a></li>
            <li><a href="https://wa.me/971526203599" className="hover:text-foreground" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/in/mushtaq-ahmad-3906a7232" className="hover:text-foreground" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Mushtaq Ahmad Ibn Mubarack. All rights reserved.</div>
          <div>Dubai · United Arab Emirates</div>
        </div>
      </div>
    </footer>
  );
}
