import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  Moon,
  Sun,
  MapPin,
  ExternalLink,
  Phone,
} from "lucide-react";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiLinux,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiReact,
  SiMysql,
  SiVmware,
  SiGithub,
} from "react-icons/si";

import { ThemeProvider, useTheme } from "@/components/theme-provider";

// --- Components ---

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 p-2 rounded-full bg-muted/50 hover:bg-muted text-foreground backdrop-blur border border-border/50 transition-colors z-50"
      aria-label="Toggle theme"
      data-testid="button-theme-toggle"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="max-w-4xl mx-auto px-6">{children}</div>
  </section>
);

const SectionHeading = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) => (
  <div className="flex items-center gap-3 mb-10">
    {Icon && <Icon className="w-5 h-5 text-primary" />}
    <h2 className="text-3xl text-foreground">{children}</h2>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
  </div>
);

// --- Content Data ---

const PROJECTS = [
  {
    title: "Transfer Learning for Clinical Prediction in Low-Data African Health Settings",
    description:
      "Pre-trains deep learning models on MIMIC-III (46,000+ ICU patients) and fine-tunes on small African clinical cohorts using FT-Transformer and TabTransformer architectures. Benchmarks full fine-tuning, layer freezing, and adapter modules against classical ML baselines. Target: npj Digital Medicine / The Lancet Digital Health.",
    tags: ["PyTorch", "FT-Transformer", "TabTransformer", "MIMIC-III", "Transfer Learning"],
    type: "Research — MRCG",
    status: "In Progress",
  },
  {
    title: "Domain Shift Analysis: Western ICU to African Clinical Settings",
    description:
      "Quantifies the performance gap between models trained on high-resource US ICU data (MIMIC-III) and African clinical cohorts using distributional comparison methods. Addresses a gap not previously studied in the LMIC health AI literature.",
    tags: ["Python", "Domain Adaptation", "Statistical Validation", "AUROC", "Calibration"],
    type: "Research — MRCG",
    status: "In Progress",
  },
  {
    title: "MSc Thesis: Dynamic Software Update Methodologies for Financial Systems",
    description:
      "Investigated methods for enhancing transaction reliability and security in real-time financial systems through dynamic software update strategies. Focused on zero-downtime update patterns for high-availability banking infrastructure.",
    tags: ["Java", "Real-time Systems", "Financial Security", "Software Engineering"],
    type: "Academic — Constructor University",
    status: "Completed 2025",
  },
  {
    title: "Customer Analytics Pipeline",
    description:
      "Built end-to-end ML pipeline for customer segmentation, churn prediction, and lifetime value estimation at Cangam Analytics. Developed predictive models using TensorFlow, Keras, and Scikit-learn, with Power BI and Matplotlib dashboards for stakeholder reporting.",
    tags: ["TensorFlow", "Scikit-learn", "Power BI", "Pandas", "PostgreSQL"],
    type: "Industry — Cangam Analytics",
    status: "Completed 2022",
  },
];

const EXPERIENCES = [
  {
    role: "Trainee Data Scientist & ML Researcher",
    org: "Medical Research Council Unit The Gambia (MRCG)",
    location: "Fajara, The Gambia",
    date: "Mar 2026 – Present",
    details: [
      "Designing a transfer learning framework pre-trained on MIMIC-III and fine-tuned on small African clinical cohorts — directly addressing the data scarcity problem in LMIC health AI.",
      "Evaluating fine-tuning strategies (full fine-tuning, layer freezing, adapter modules) against baselines including logistic regression, XGBoost, and from-scratch deep learning.",
      "Conducting domain shift analysis between MIMIC-III and African cohort data using distributional comparison methods.",
      "Working with transformer-based tabular architectures (FT-Transformer, TabTransformer), PyTorch, and statistical validation frameworks (AUROC, AUPRC, calibration, bootstrap CIs).",
      "Targeting submission to npj Digital Medicine or The Lancet Digital Health within 5–6 months.",
    ],
  },
  {
    role: "IT Manager",
    org: "AfricMed International Hospital",
    location: "Brusubi, The Gambia",
    date: "Jan 2026 – Present",
    details: [
      "Managing hospital IT infrastructure (servers, network, cloud, workstations) ensuring high availability for HIS/EMR, laboratory, pharmacy, and billing systems.",
      "Implementing and enforcing IT security policies: RBAC, data encryption, endpoint protection, and system audits to safeguard patient data.",
    ],
  },
  {
    role: "Software Developer",
    org: "Security Technology Alarm",
    location: "Karaba Avenue, The Gambia",
    date: "Sep 2025 – Present",
    details: [
      "Designing and developing scalable backend systems and RESTful APIs using Java, Python, and modern frameworks.",
      "Building responsive web applications and managing deployment across dev, staging, and production.",
      "Database schema design, data integration, and query optimisation (PostgreSQL, MySQL).",
    ],
  },
  {
    role: "System Administrator",
    org: "Trust Bank",
    location: "Banjul, The Gambia",
    date: "Apr 2022 – Sep 2025",
    details: [
      "Administered core banking IT infrastructure including servers, networks, and workstations across the organisation.",
      "Provided advanced technical support for SWIFT, RTGS, ACP/ACH, Online Banking, and PAPSS payment systems.",
      "Managed Microsoft Active Directory, Exchange Server, and Group Policy; configured LAN/WAN, routers, firewalls, and switches.",
    ],
  },
  {
    role: "Data Science Practitioner",
    org: "Cangam Analytics",
    location: "Sukuta, The Gambia",
    date: "Jan 2020 – Mar 2022",
    details: [
      "Developed predictive models using TensorFlow, Keras, and Scikit-learn to support strategic business decisions.",
      "Built customer analytics models: churn prediction, lifetime value estimation, and customer segmentation.",
      "Presented insights and dashboards to management using Power BI and Matplotlib.",
    ],
  },
];

// --- Main App ---

function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      <ThemeToggle />

      {/* Decorative background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-6 w-full">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Actively seeking PhD positions in ML / AI for Health
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight">
                Lamin <span className="text-primary italic">Jawneh</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-sm font-mono text-muted-foreground/70 mb-5 tracking-widest uppercase">
                Trainee Data Scientist · ML Researcher · MSc Computer Science
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-4 leading-relaxed">
                Researcher at the{" "}
                <span className="text-foreground font-medium">
                  Medical Research Council Unit The Gambia
                </span>
                , one of Africa's leading biomedical research institutions.
                Building clinical AI that generalises across domain shifts in
                low-resource health settings.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono mb-8">
                <MapPin className="w-4 h-4" />
                <span>Kunkujang, The Gambia</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 text-sm font-mono">
                <a
                  href="https://github.com/lamin-jawneh"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-github"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/lamin-jawneh</span>
                </a>
                <a
                  href="mailto:laminjawnehlj45@gmail.com"
                  data-testid="link-email"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>laminjawnehlj45@gmail.com</span>
                </a>
                <a
                  href="tel:+2203167095"
                  data-testid="link-phone"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(+220) 3167095</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Research Statement */}
        <Section id="about" className="bg-muted/30 border-y border-border/50">
          <FadeIn>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-serif text-foreground">Research Focus</h2>
                <div className="mt-4 text-muted-foreground font-mono text-sm leading-relaxed">
                  <p className="mb-2">MRCG Data Science Department</p>
                  <p className="text-primary text-xs border border-primary/30 rounded px-2 py-1 inline-block mt-1">
                    Target: npj Digital Medicine / The Lancet Digital Health
                  </p>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary max-w-none">
                <p>
                  My research addresses a concrete, high-stakes gap: most machine learning
                  models for clinical outcome prediction are trained on large, high-resource
                  datasets from Western healthcare systems, then deployed in settings where
                  data is scarce and patient populations are fundamentally different.
                </p>
                <p>
                  At MRCG, I am building a{" "}
                  <strong>transfer learning framework</strong> that pre-trains deep learning
                  models on MIMIC-III (46,000+ ICU patients) and fine-tunes them on small
                  African clinical cohorts — using transformer-based tabular architectures
                  (FT-Transformer, TabTransformer) to push performance under data scarcity.
                  Alongside this, I am{" "}
                  <strong>quantifying domain shift</strong> between Western ICU data and African
                  clinical settings: a gap that has not been systematically studied in the
                  literature. All code will be open-sourced for use by other African health
                  institutions.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Pinned Projects */}
        <Section id="projects">
          <FadeIn>
            <SectionHeading icon={Code2}>Selected Projects</SectionHeading>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <FadeIn key={project.title} delay={0.1 * i}>
                <div
                  data-testid={`card-project-${i}`}
                  className="group h-full bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-xs font-mono text-primary">{project.type}</div>
                    <span className="text-xs font-mono text-muted-foreground/60 border border-border/50 rounded px-1.5 py-0.5">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3 font-serif group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section id="stack" className="bg-muted/30 border-y border-border/50">
          <FadeIn>
            <SectionHeading>Technical Skills</SectionHeading>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">
                ML & Research
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                <div className="flex items-center gap-3 text-foreground text-sm"><SiPython className="w-5 h-5 text-blue-400 shrink-0" /> Python</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiPytorch className="w-5 h-5 text-orange-500 shrink-0" /> PyTorch</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiTensorflow className="w-5 h-5 text-orange-400 shrink-0" /> TensorFlow</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiScikitlearn className="w-5 h-5 text-orange-300 shrink-0" /> Scikit-learn</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiJupyter className="w-5 h-5 text-orange-500 shrink-0" /> Jupyter</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiNumpy className="w-5 h-5 text-blue-400 shrink-0" /> NumPy</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiPandas className="w-5 h-5 text-blue-300 shrink-0" /> Pandas</div>
                <div className="flex items-center gap-3 text-foreground text-sm col-span-2 text-muted-foreground/70 font-mono text-xs pt-1">
                  FT-Transformer · TabTransformer · MIMIC-III
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">
                Engineering & Data
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                <div className="flex items-center gap-3 text-foreground text-sm"><SiPostgresql className="w-5 h-5 text-blue-400 shrink-0" /> PostgreSQL</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiMysql className="w-5 h-5 text-blue-500 shrink-0" /> MySQL</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiJavascript className="w-5 h-5 text-yellow-400 shrink-0" /> JavaScript</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiReact className="w-5 h-5 text-cyan-400 shrink-0" /> React</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiGit className="w-5 h-5 text-red-500 shrink-0" /> Git</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiGithub className="w-5 h-5 text-foreground shrink-0" /> GitHub</div>
                <div className="flex items-center gap-3 text-foreground text-sm col-span-2 text-muted-foreground/70 font-mono text-xs pt-1">
                  RESTful APIs · Spring Boot · Java · SQL · CI/CD
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">
                Systems & Infrastructure
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-3">
                <div className="flex items-center gap-3 text-foreground text-sm"><SiLinux className="w-5 h-5 text-foreground shrink-0" /> Linux</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiVmware className="w-5 h-5 text-blue-400 shrink-0" /> VMware</div>
                <div className="flex items-center gap-3 text-foreground text-sm"><SiDocker className="w-5 h-5 text-blue-500 shrink-0" /> Docker</div>
                <div className="flex items-center gap-3 text-foreground text-sm col-span-2 text-muted-foreground/70 font-mono text-xs pt-1">
                  Windows Server · Hyper-V · LAN/WAN · TCP/IP · DNS · VPN · SWIFT · RTGS · PAPSS
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <FadeIn>
            <SectionHeading icon={Briefcase}>Experience</SectionHeading>
          </FadeIn>
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative pl-6 border-l border-primary/30">
                  <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="text-sm font-mono text-primary">{exp.date}</span>
                    <span className="text-xs text-muted-foreground/50 font-mono">{exp.location}</span>
                  </div>
                  <h4 className="text-lg font-medium text-foreground">{exp.role}</h4>
                  <div className="text-sm text-muted-foreground mb-3">{exp.org}</div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary/50 mt-1 shrink-0">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" className="bg-muted/30 border-y border-border/50">
          <FadeIn>
            <SectionHeading icon={GraduationCap}>Education</SectionHeading>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-card border border-border/50 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="text-lg font-medium text-foreground">
                    MSc — Computer Science & Software Engineering
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground border border-border/50 rounded px-2 py-0.5 shrink-0">
                    Sep 2023 – Jun 2025
                  </span>
                </div>
                <p className="text-sm text-primary mb-3">
                  Constructor University — Bremen, Germany
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground/70 font-medium">Thesis:</span> Enhancing Transaction Reliability and Security in Real-time Financial Systems Through Dynamic Software Update Methodologies.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-card border border-border/50 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="text-lg font-medium text-foreground">BSc — Computer Science</h4>
                  <span className="text-xs font-mono text-muted-foreground border border-border/50 rounded px-2 py-0.5 shrink-0">
                    2017 – 2020
                  </span>
                </div>
                <p className="text-sm text-primary">University of The Gambia — Kanifing, The Gambia</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-card border border-border/50 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="text-lg font-medium text-foreground">Diploma — Information Technology</h4>
                  <span className="text-xs font-mono text-muted-foreground border border-border/50 rounded px-2 py-0.5 shrink-0">
                    Jan 2016 – Nov 2016
                  </span>
                </div>
                <p className="text-sm text-primary">Lasting Solutions — Kanifing, The Gambia</p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications">
          <FadeIn>
            <SectionHeading icon={FileText}>Publications & Research Output</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-card border border-primary/20 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">
                    Work in Progress — Manuscript in Preparation
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-2 leading-snug">
                    Transfer Learning for Clinical Outcome Prediction in Low-Resource African Health Settings
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Lamin Jawneh · MRCG Data Science Department
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20">
                      Target: npj Digital Medicine
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20">
                      The Lancet Digital Health
                    </span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-full">
                      Submission: 5–6 months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* PhD Callout */}
        <Section id="contact" className="py-0">
          <FadeIn>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    Actively Seeking PhD Opportunities
                  </h2>
                  <p className="text-primary-foreground/90 text-lg max-w-xl leading-relaxed mb-2">
                    I am looking for a doctoral position at the intersection of machine learning and real-world human-centred systems — particularly representation learning, domain adaptation, and healthcare AI in low-resource settings.
                  </p>
                  <p className="text-primary-foreground/70 text-sm mb-6">
                    5+ years of applied ML and software engineering experience. Research underway at MRCG. Open-source commitment.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:laminjawnehlj45@gmail.com"
                      data-testid="link-cta-email"
                      className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Get in touch
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="https://github.com/lamin-jawneh"
                      target="_blank"
                      rel="noreferrer"
                      data-testid="link-cta-github"
                      className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/20 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View GitHub
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex justify-end">
                  <div className="w-32 h-32 border-4 border-primary-foreground/20 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border-4 border-primary-foreground/40 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-foreground rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Footer */}
        <footer className="py-12 mt-24 border-t border-border/50 text-center">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lamin Jawneh. Kunkujang, The Gambia.
            </p>
            <div className="flex items-center gap-6 text-sm font-mono">
              <a
                href="https://github.com/lamin-jawneh"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:laminjawnehlj45@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a
                href="tel:+2203167095"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (+220) 3167095
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Portfolio />
    </ThemeProvider>
  );
}
