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
  ExternalLink
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
  SiFastapi,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiHuggingface
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

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, children, className = "" }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 ${className}`}>
    <div className="max-w-4xl mx-auto px-6">
      {children}
    </div>
  </section>
);

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon?: any }) => (
  <div className="flex items-center gap-3 mb-10">
    {Icon && <Icon className="w-5 h-5 text-primary" />}
    <h2 className="text-3xl text-foreground">{children}</h2>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
  </div>
);

// --- Content Data ---

const PROJECTS = [
  {
    title: "Transfer Learning for Clinical AI in Africa",
    description: "Adapting ImageNet-pretrained models to Gambian clinical imaging data. Exploring domain-specific fine-tuning strategies to improve diagnostic accuracy on locally acquired datasets.",
    tags: ["PyTorch", "Transfer Learning", "Medical Imaging"],
    type: "Research"
  },
  {
    title: "Domain Shift Analysis",
    description: "Benchmarking model degradation across health system distributions. Quantifying the performance gap when models trained on high-resource data are deployed in low-resource settings.",
    tags: ["Python", "Out-of-Distribution", "Benchmarking"],
    type: "Research"
  },
  {
    title: "MSc Thesis: Advanced Feature Representations",
    description: "An in-depth investigation into representation learning techniques for sparse clinical datasets, demonstrating improved sample efficiency.",
    tags: ["Scikit-Learn", "Feature Engineering", "Thesis"],
    type: "Academic"
  },
  {
    title: "Customer Analytics Pipeline",
    description: "End-to-end ML pipeline for customer segmentation and churn modelling. Engineered robust data workflows and deployed predictive models via REST API.",
    tags: ["FastAPI", "PostgreSQL", "Pandas", "Docker"],
    type: "Engineering"
  }
];

const EXPERIENCES = [
  {
    role: "ML Researcher",
    org: "Medical Research Council Gambia (MRCG)",
    date: "Present",
    details: [
      "Training machine learning models on diverse clinical data collected in The Gambia.",
      "Developing transfer learning workflows to adapt state-of-the-art architectures to local constraints.",
      "Collaborating with clinical researchers to define actionable AI problem statements."
    ]
  },
  {
    role: "Data Scientist",
    org: "Previous Organization",
    date: "Prior",
    details: [
      "Built end-to-end data pipelines for customer analytics.",
      "Developed segmentation and churn prediction models, translating business requirements into ML tasks.",
      "Deployed models as microservices using FastAPI and Docker."
    ]
  }
];

// --- Main App ---

function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      <ThemeToggle />
      
      {/* Decorative background element */}
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
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-8 leading-relaxed">
                Machine Learning Researcher at the <span className="text-foreground font-medium">Medical Research Council Gambia</span>. 
                Building clinical AI that generalises across domain shifts in resource-constrained settings.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono mt-8">
                <a href="https://github.com/lamin-jawneh" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors group">
                  <Github className="w-4 h-4" />
                  <span>github.com/lamin-jawneh</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors group">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors group">
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
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
                <div className="mt-4 flex items-center gap-2 text-muted-foreground font-mono text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>The Gambia</span>
                </div>
              </div>
              <div className="md:col-span-8 prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary max-w-none">
                <p>
                  My research operates at the intersection of <strong>clinical AI and African health data</strong>. 
                  Most modern machine learning models are trained on datasets from high-resource environments, leading to severe performance degradation when deployed in different clinical realities.
                </p>
                <p>
                  I focus on <strong>transfer learning and domain shift analysis</strong>—specifically how we can adapt large, pretrained architectures (like ImageNet models) to work reliably on Gambian clinical imaging and health data. My goal is not just to train models, but to understand and bridge the distribution gaps that prevent AI from being equitable and useful in sub-Saharan Africa.
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
                <div className="group h-full bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="text-xs font-mono text-primary mb-3">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3 font-serif group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded">
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
            <SectionHeading>Technical Arsenal</SectionHeading>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">ML & Research</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground"><SiPython className="w-5 h-5 text-blue-500" /> Python</div>
                <div className="flex items-center gap-3 text-foreground"><SiPytorch className="w-5 h-5 text-orange-500" /> PyTorch</div>
                <div className="flex items-center gap-3 text-foreground"><SiTensorflow className="w-5 h-5 text-orange-400" /> TensorFlow</div>
                <div className="flex items-center gap-3 text-foreground"><SiScikitlearn className="w-5 h-5 text-orange-300" /> scikit-learn</div>
                <div className="flex items-center gap-3 text-foreground"><SiHuggingface className="w-5 h-5 text-yellow-500" /> Hugging Face</div>
                <div className="flex items-center gap-3 text-foreground"><SiJupyter className="w-5 h-5 text-orange-500" /> Jupyter</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">Engineering</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground"><SiPostgresql className="w-5 h-5 text-blue-400" /> PostgreSQL</div>
                <div className="flex items-center gap-3 text-foreground"><SiFastapi className="w-5 h-5 text-teal-500" /> FastAPI</div>
                <div className="flex items-center gap-3 text-foreground"><SiPandas className="w-5 h-5 text-blue-900 dark:text-blue-300" /> Pandas</div>
                <div className="flex items-center gap-3 text-foreground"><SiNumpy className="w-5 h-5 text-blue-500" /> NumPy</div>
                <div className="flex items-center gap-3 text-foreground"><Code2 className="w-5 h-5 text-gray-500" /> SQL</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 border-b border-border/50 pb-2">Systems</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-foreground"><SiLinux className="w-5 h-5 text-foreground" /> Linux</div>
                <div className="flex items-center gap-3 text-foreground"><SiDocker className="w-5 h-5 text-blue-500" /> Docker</div>
                <div className="flex items-center gap-3 text-foreground"><SiGit className="w-5 h-5 text-red-500" /> Git</div>
                <div className="flex items-center gap-3 text-foreground"><Briefcase className="w-5 h-5 text-gray-500" /> AWS/GCP</div>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Experience & Education */}
        <Section id="experience">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div>
              <FadeIn>
                <SectionHeading icon={Briefcase}>Experience</SectionHeading>
              </FadeIn>
              <div className="space-y-10">
                {EXPERIENCES.map((exp, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative pl-6 border-l border-primary/30">
                      <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                      <div className="text-sm font-mono text-primary mb-1">{exp.date}</div>
                      <h4 className="text-lg font-medium text-foreground">{exp.role}</h4>
                      <div className="text-sm text-muted-foreground mb-3">{exp.org}</div>
                      <ul className="space-y-2">
                        {exp.details.map((detail, j) => (
                          <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary/50 mt-1">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              <FadeIn>
                <SectionHeading icon={GraduationCap}>Education</SectionHeading>
              </FadeIn>
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <div className="bg-card border border-border/50 rounded-xl p-6">
                    <h4 className="text-lg font-medium text-foreground mb-1">MSc Machine Learning / Data Science</h4>
                    <p className="text-sm text-muted-foreground mb-4">University Name • Year</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Focused on advanced representation learning, statistical modelling, and deep learning architectures. Thesis explored transfer learning strategies for sparse clinical datasets.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="bg-card border border-border/50 rounded-xl p-6">
                    <h4 className="text-lg font-medium text-foreground mb-1">BSc Computer Science</h4>
                    <p className="text-sm text-muted-foreground mb-4">University Name • Year</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Core foundation in algorithms, software engineering, databases, and mathematics.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="mt-16">
                <FadeIn>
                  <SectionHeading icon={FileText}>Publications & Output</SectionHeading>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="bg-muted/30 border border-border/50 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mb-3 opacity-50" />
                    <p className="text-sm text-foreground font-medium mb-1">Research works currently in progress.</p>
                    <p className="text-xs text-muted-foreground">Preparing findings on domain shift in clinical AI for submission.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
            
          </div>
        </Section>

        {/* Call to Action / PhD Seeking */}
        <Section id="contact" className="py-0">
          <FadeIn>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">Actively Seeking PhD Opportunities</h2>
                  <p className="text-primary-foreground/90 text-lg max-w-xl leading-relaxed mb-6">
                    I am looking for a doctoral position to deepen my research into reliable, equitable clinical AI. If your lab focuses on representation learning, domain adaptation, or healthcare ML, I would love to connect.
                  </p>
                  <a href="mailto:contact@example.com" className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors">
                    <Mail className="w-4 h-4" />
                    Get in touch
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
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
              © {new Date().getFullYear()} Lamin Jawneh.
            </p>
            <div className="flex items-center gap-6 text-sm font-mono">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
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
