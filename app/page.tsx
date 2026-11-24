import type { ReactNode } from "react";
"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3,
  Code2, Database, Github, Linkedin, Mail, Menu, X, Sparkles,
  ShoppingBag, Workflow, FileSpreadsheet, Globe2, ExternalLink,
  CheckCircle2, Send, Layers3, Terminal, ChartNoAxesCombined
} from "lucide-react";

const EMAIL = "eamil.muhammadaliiftikhar2732@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muhammadaliiftikhar/";
const GITHUB = "https://github.com/aliiftikhar22";

const skills = [
  { title: "Data Analytics", icon: BarChart3, items: ["Power BI", "SQL", "Excel", "Python", "Power Query", "Looker Studio", "Data Cleaning", "Data Visualization"] },
  { title: "Web Development", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "E-commerce", icon: ShoppingBag, items: ["Shopify", "Dawn Theme", "Theme Customization", "Store Setup", "Product Management"] },
];



const projects = [
  {
    number: "01",
    name: "Sitara Electronics",
    type: "E-COMMERCE / BUSINESS",
    description: "An electronics retail experience focused on product discovery, store operations, and a practical digital shopping journey.",
    tags: ["E-commerce", "Web Development", "Business"],
    icon: ShoppingBag,
    className: "project-blue",
    note: "Business website project",
    image: "/projects/sitara-electronics.png",
    link: "https://sitaraelectronics.com",
  },
  {
    number: "02",
    name: "Maison Alvaro",
    type: "SHOPIFY / LUXURY BRAND",
    description: "A luxury fragrance storefront with a refined visual direction, Shopify Dawn customization, and editorial product presentation.",
    tags: ["Shopify", "Dawn Theme", "Brand Experience"],
    icon: Layers3,
    className: "project-violet",
    note: "Shopify store project",
    image: "/projects/maison-alvaro.png",
    link: "https://maisonalvaroo.myshopify.com/",
  },
  {
    number: "03",
    name: "Sitara Sales Dashboard",
    type: "POWER BI / BUSINESS INTELLIGENCE",
    description: "A business intelligence concept for exploring sales performance, product movement, revenue patterns, and operational insights.",
    tags: ["Power BI", "Data Modeling", "Analytics"],
    icon: ChartNoAxesCombined,
    className: "project-cyan",
    note: "Analytics dashboard project",
    image: "/projects/sitara-dashboard.png",
  },
  {
    number: "04",
    name: "Data Analytics Lab",
    type: "SQL / EXCEL / PYTHON",
    description: "A growing collection of analytical exercises and reporting work focused on transforming structured data into useful information.",
    tags: ["SQL", "Excel", "Python", "Looker Studio"],
    icon: Database,
    className: "project-green",
    note: "Learning and practice portfolio",
    image: "/projects/data-analytics.png",
    link: "https://datastudio.google.com/reporting/0ec28478-a691-4e37-8f67-169a91f74e4e/page/p_qqerqdj0vd",
  },
];




const certificates = [
  ["The Complete Oracle SQL Bootcamp", "Udemy · 2025"],
  ["n8n Level 1", "n8n"],
  ["n8n Level 2", "n8n"],
  ["Claude Platform 101", "Anthropic"],
  ["Model Context Protocol", "Anthropic"],
  ["Advanced Model Context Protocol", "Anthropic"],
  ["AI Fluency for Students", "Anthropic"],
  ["AI Fluency for Educators", "Anthropic"],
];

const services = [
  { icon: BarChart3, title: "Power BI Dashboards", text: "Clear, useful dashboards that help teams explore performance and make informed decisions." },
  { icon: Database, title: "Data Cleaning & SQL", text: "Organizing datasets, writing queries, and preparing data for analysis and reporting." },
  { icon: ShoppingBag, title: "Shopify Store Setup", text: "Store configuration, product organization, and a polished e-commerce experience." },
  { icon: Code2, title: "Website Development", text: "Responsive websites with clean layouts, thoughtful interactions, and modern frontend tools." },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: ReactNode;
  detail?: string;
}) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please complete your name, email, and message.");
      return;
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!validEmail) {
      setFormError("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ali Iftikhar home">
          <span className="brand-mark">AI<span>.</span></span>
          <span className="brand-name">ALI IFTIKHAR</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <nav className="mobile-nav">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}</nav>}

      <section className="hero section-wrap" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="availability">
              <span className="availability-pulse" /> OPEN TO OPPORTUNITIES
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>DATA ANALYST <span>/</span> WEB DEVELOPER</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              ALI<br /><span>IFTIKHAR<span className="hero-period">.</span></span>
            </motion.h1>
            <motion.p className="hero-statement" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
              Turning data into <em>insights.</em><br />Turning ideas into <em>digital experiences.</em>
            </motion.p>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              I explore the space between business intelligence and web experiences — using data, design, and technology to make things clearer and more useful.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={17}/></a>
              <a href="#contact" className="button button-quiet">Get in touch <ArrowDownRight size={17}/></a>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17}/></a>
              <span className="social-line" />
              <span>BASED IN PAKISTAN</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 1 }}>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-core">
              <div className="core-top"><span className="core-dot" /> PERSONAL PORTFOLIO <span> / 2026</span></div>
              <div className="core-symbol">AI<span>.</span></div>
              <div className="core-caption">DATA × DESIGN × DEVELOPMENT</div>
              <div className="core-bottom"><span>CURIOUS BY NATURE</span><span>BUILT TO LEARN ↗</span></div>
            </div>
            <div className="float-card float-card-top"><BarChart3 size={17}/><span>DATA<br/><b>INSIGHTS</b></span></div>
            <div className="float-card float-card-bottom"><Code2 size={17}/><span>DIGITAL<br/><b>EXPERIENCES</b></span></div>
            <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
          </motion.div>
        </div>
        <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><a href="#about"><ArrowDown size={15}/></a><span className="hero-bottom-right">01 — 06 / PORTFOLIO</span></div>
      </section>

      <section className="intro-strip">
        <div className="intro-strip-inner"><span>ANALYZE</span><i>✳</i><span>BUILD</span><i>✳</i><span>IMPROVE</span><i>✳</i><span>REPEAT</span><i>✳</i><span>ANALYZE</span></div>
      </section>

      <section className="section-wrap content-section" id="about">
        <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Curiosity meets<br/><span className="muted-heading">problem-solving.</span></>} />
        <div className="about-grid">
          <div className="about-lead"><span className="side-label">THE PERSON BEHIND THE SCREEN</span><p>I&apos;m Ali — an aspiring data analyst and web developer interested in how technology can solve real business problems.</p></div>
          <div className="about-body"><p>My interests bring together data analytics, business intelligence, and modern web experiences. I enjoy exploring datasets, building dashboards, learning new tools, and shaping digital storefronts that feel clear and considered.</p><p>I&apos;m continuously developing my skills through hands-on projects and structured learning. This portfolio is a snapshot of that journey — the things I&apos;ve built, the tools I&apos;m exploring, and the direction I&apos;m growing toward.</p><div className="about-signature">ALI IFTIKHAR <span>— ALWAYS LEARNING</span></div></div>
        </div>
      </section>

      <section className="section-wrap content-section" id="skills">
        <SectionHeading eyebrow="02 / MY TOOLKIT" title={<>Tools for turning<br/><span className="muted-heading">ideas into impact.</span></>} detail="A growing toolkit across analytics, frontend development, and e-commerce." />
        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = group.icon;
            return <motion.article className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-index">0{i+1} / 03</span></div>
              <h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.article>;
          })}
        </div>
      </section>

      <section className="section-wrap content-section projects-section" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects with a<br/><span className="muted-heading">purpose.</span></>} detail="A selection of business, e-commerce, and analytics work. Project details can be expanded as each case study is finalized." />
        <div className="projects-grid">
          
{projects.map((project, i) => {
  const Icon = project.icon;

  const card = (
    <motion.article
      className={`project-card ${project.className}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="project-art">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="project-image"
        />

        <div className="project-art-grid" />

        <div className="project-art-label">
          <span>PROJECT / {project.number}</span>
          <span>CASE STUDY</span>
        </div>

        <div className="project-art-bottom">
          <span>{project.note}</span>
          {project.link && <ArrowUpRight size={18} />}
        </div>
      </div>

      <div className="project-info">
        <span className="project-type">{project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );

  return project.link ? (
    <a
      key={project.number}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      {card}
    </a>
  ) : (
    <div key={project.number} className="project-card-wrapper">
  {card}
</div>
  );
})}

        </div>
        <p className="project-footnote"><span className="footnote-dot"/> Selected work descriptions are intentionally high-level. Live demos and repositories can be added when their public links are ready.</p>
      </section>

      <section className="journey-band" id="journey">
        <div className="section-wrap journey-inner">
          <div><span className="eyebrow"><span className="eyebrow-dot"/>04 / THE JOURNEY</span><h2>Built through<br/><span className="muted-heading">curiosity & consistency.</span></h2><p className="journey-copy">I believe good work comes from staying curious, practicing the fundamentals, and applying what you learn to real problems.</p></div>
          <div className="journey-list">
            {[["01","Analytics foundations","Power BI, SQL, Excel, and data storytelling."],["02","Building for the web","Frontend development and Shopify storefront customization."],["03","Automation & AI","Exploring n8n, AI tools, and the Model Context Protocol."],["04","Always learning","Turning courses, experiments, and projects into practical skills."]].map(([n,title,desc]) => <div className="journey-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={17}/></div>)}
          </div>
        </div>
      </section>

      <section className="section-wrap content-section" id="certifications">
        <SectionHeading eyebrow="05 / CONTINUOUS LEARNING" title={<>Learning is part<br/><span className="muted-heading">of the work.</span></>} detail="Courses and certifications that support my ongoing development. Certificate links can be attached to each item." />
        <div className="cert-grid">
          {certificates.map(([title, issuer], i) => <div className="cert-item" key={title}><span className="cert-number">{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{issuer}</p></div><ArrowUpRight size={16}/></div>)}
        </div>
      </section>

      <section className="section-wrap content-section services-section" id="services">
        <SectionHeading eyebrow="06 / WHAT I CAN HELP WITH" title={<>Thoughtful work.<br/><span className="muted-heading">Useful outcomes.</span></>} detail="Services aligned with my current skills and project experience." />
        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return <motion.article className="service-card" key={service.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="service-index">0{i+1}</span><Icon size={23} className="service-icon"/><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18}/></a>
            </motion.article>;
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="contact-copy">
            <span className="eyebrow"><span className="eyebrow-dot"/>07 / START A CONVERSATION</span>
            <h2>Have a project<br/>in <span>mind?</span></h2>
            <p>Have an opportunity, a question, or an idea you&apos;d like to explore? I&apos;d be glad to hear from you.</p>
            <a className="contact-email" href={`mailto:${EMAIL}`}><Mail size={18}/>{EMAIL}<ArrowUpRight size={16}/></a>
            <div className="contact-socials"><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>YOUR MESSAGE</span><span>LET&apos;S CONNECT ↗</span></div>
            <label>Your name<input value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Jane Smith" required /></label>
            <label>Email address<input type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="jane@example.com" required /></label>
            <label>Subject <span className="optional">(optional)</span><input value={form.subject} onChange={e => setForm({...form, subject:e.target.value})} placeholder="What would you like to discuss?" /></label>
            <label>Message<textarea value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me a little about your project..." rows={4} required /></label>
            {formError && <p className="form-message form-error">{formError}</p>}
            {submitted && <p className="form-message form-success"><CheckCircle2 size={16}/> Your email app should open with your message. If it didn&apos;t, email me directly.</p>}
            <button className="button button-primary form-submit" type="submit">Prepare email <Send size={16}/></button>
            <p className="form-disclaimer">This form opens your email application; it does not send or store messages on this website.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="brand"><span className="brand-mark">AI<span>.</span></span><span className="brand-name">ALI IFTIKHAR</span></a>
        <p>Designed with curiosity. Built with intention.</p>
        <div><a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN</a><a href={GITHUB} target="_blank" rel="noreferrer">GITHUB</a><a href={`mailto:${EMAIL}`}>EMAIL</a></div>
        <span className="copyright">© {new Date().getFullYear()} ALI IFTIKHAR. ALL RIGHTS RESERVED.</span>
      </footer>
    </main>
  );
}
