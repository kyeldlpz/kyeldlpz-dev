"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import { portfolio, projects, services, skills, timeline } from "../data/portfolio";
import LiquidChrome from "./LiquidChrome";
import ProjectVisual from "./ProjectVisual";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function PortfolioShell() {
  const [activeProject, setActiveProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const projectButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > window.innerHeight * 0.75);
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const handleProjectKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const nextIndex = (index + 1) % projects.length;
      setActiveProject(nextIndex);
      projectButtonRefs.current[nextIndex]?.focus();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const nextIndex = (index - 1 + projects.length) % projects.length;
      setActiveProject(nextIndex);
      projectButtonRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kzyrell Dela Paz home">K<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="menu-toggle-label">Menu</span><span className="menu-toggle-icon">{menuOpen ? "×" : "↗"}</span>
        </button>
        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <button type="button" onClick={() => handleNavigation("work")}>Work <span>01</span></button>
          <button type="button" onClick={() => handleNavigation("about")}>About <span>02</span></button>
          <button type="button" onClick={() => handleNavigation("services")}>Services <span>03</span></button>
          <button type="button" onClick={() => handleNavigation("contact")}>Contact <span>04</span></button>
        </nav>
        <span className="header-status"><i /> Available for select work</span>
      </header>

      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-meta eyebrow-row"><span>Based in {portfolio.location}</span><span>Portfolio / 2026</span></div>
        <div className="hero-copy">
          <p className="eyebrow">{portfolio.role}</p>
          <h1 id="hero-title"><span>Kzyrell</span><span className="hero-title-indent">Dela Paz</span></h1>
          <p className="hero-manifesto">Build with good taste.</p>
          <p className="hero-intro">{portfolio.intro}</p>
          <button className="text-link hero-link" type="button" onClick={() => handleNavigation("work")}><span>Explore selected work</span><b>↓</b></button>
        </div>
        <div className="hero-visual">
          <LiquidChrome />
          <div className="hero-orbit-label label-one">WEB / AI / CLOUD</div>
          <div className="hero-orbit-label label-two">BUILD WITH INTENT</div>
          <div className="hero-visual-note"><span>01</span><span>Interactive field<br />responds to movement</span></div>
        </div>
        <div className="hero-footer eyebrow-row"><span>Scroll to investigate</span><span className="scroll-line" /></div>
      </section>

      <section className="intro section-shell" id="about" aria-labelledby="about-title">
        <div className="section-index">02 / About</div>
        <div className="intro-layout">
          <h2 id="about-title">Technology should feel <em>considered.</em></h2>
          <div className="intro-aside">
            <p>I care about the gap between a promising idea and a system someone can actually depend on. My work moves between research, interface design, and the practical details of making software run.</p>
            <div className="signature-line"><span>Currently</span><strong>Learning, shipping,<br />and documenting.</strong></div>
          </div>
        </div>
        <div className="discipline-list">
          {portfolio.disciplines.map((discipline, index) => <span key={discipline}><small>0{index + 1}</small>{discipline}</span>)}
        </div>
        <div className="about-cards">
          <div className="portrait-card" role="img" aria-label="Abstract profile placeholder ready for a personal portrait">
            <div className="portrait-grid" /><div className="portrait-orbit" /><span className="portrait-initial">K</span><span className="portrait-label">Replace with portrait / 01</span>
          </div>
          <blockquote className="quote-card"><span className="quote-mark">“</span><p>{portfolio.quote}</p><cite>Kzyrell / field notes</cite></blockquote>
          <div className="about-card-note"><span>What I value</span><strong>Clear thinking<br />over loud effects.</strong><small>Research → design → build → refine</small></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Working principles">
        <div className="signal-strip-track"><span>RESEARCH</span><b>✳</b><span>DESIGN</span><b>✳</b><span>BUILD</span><b>✳</b><span>REFINE</span><b>✳</b><span>RESEARCH</span><b>✳</b><span>DESIGN</span><b>✳</b><span>BUILD</span><b>✳</b><span>REFINE</span></div>
      </section>

      <section className="skills-orbit section-shell" id="skills" aria-labelledby="skills-title">
        <div className="section-heading"><div className="section-index">03 / Capability map</div><span className="section-caption">Tools that move ideas from question to useful thing</span></div>
        <div className="skills-layout"><div><h2 id="skills-title">Skills in <em>orbit.</em></h2><p>Languages, frameworks, and tools do not sit in separate boxes here. They revolve around the same job: turning an unusual idea into something useful.</p></div><div className="orbit-stage" role="img" aria-label="Orbiting technology skills"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="orbit-ring orbit-ring-three" /><div className="orbit-globe"><span>AI<br />CODE<br />DATA</span></div>{skills.map((skill, index) => <span className="orbit-skill" style={{ "--skill-index": index } as CSSProperties} key={skill}>{skill}</span>)}</div></div>
        <div className="proof-band"><span>Proof in practice</span><strong>Edge AI / Product systems / Cloud foundations / Interface craft</strong><b>✳</b></div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div className="section-index">04 / Selected work</div><span className="section-caption">Real systems, seen differently</span></div>
        <div className="work-heading"><div><h2 id="work-title">The work behind<br /><em>the experiments.</em></h2><p className="work-lede">Selected projects where code, design, and curiosity become useful things.</p></div><span className="project-count">{String(projects.length).padStart(2, "0")} projects</span></div>
        <div className="project-gallery">
          {projects.map((project, index) => {
            const isActive = activeProject === index;
            return (
              <article className={`project-panel ${isActive ? "is-active" : ""}`} key={project.title}>
                <button ref={(element) => { projectButtonRefs.current[index] = element; }} className="project-trigger" type="button" aria-expanded={isActive} onClick={() => setActiveProject(index)} onKeyDown={(event) => handleProjectKeyDown(event, index)}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-trigger-title">{project.title}</span>
                  <span className="project-trigger-year">{project.year}</span>
                  <span className="project-trigger-icon" aria-hidden="true">{isActive ? "−" : "+"}</span>
                </button>
                {isActive && (
                  <div className="project-detail">
                    <div className="project-art-wrap"><ProjectVisual type={project.visual} title={project.title} /><span className="art-caption">Original visual / replace with final project image</span></div>
                    <div className="project-info">
                      <p className="eyebrow">{project.category}</p>
                      <h3>{project.summary}</h3>
                      <p className="project-description">{project.detail}</p>
                      <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                      <a className="text-link" href={project.href}><span>Discuss this project</span><b>↗</b></a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <div className="work-index">
          <div className="work-index-heading"><span>Full index</span><span>Hover a project to change the focus</span></div>
          <div className="work-index-list">
            {projects.map((project, index) => <button className={`work-index-row ${activeProject === index ? "is-current" : ""}`} type="button" key={project.title} onMouseEnter={() => setActiveProject(index)} onFocus={() => setActiveProject(index)} onClick={() => setActiveProject(index)}><span>{project.number}</span><strong>{project.title}</strong><small>{project.category}</small><i>↗</i></button>)}
          </div>
        </div>
      </section>

      <section className="archive section-shell" aria-labelledby="archive-title">
        <div className="section-index">05 / Archive</div>
        <div className="archive-layout"><h2 id="archive-title">Still <em>curious.</em></h2><p>Some work becomes a project. Some becomes a note, a prototype, or a better question. This is the short version of the trail so far.</p></div>
        <div className="timeline-list">
          {timeline.map((item) => <div className="timeline-row" key={item.year}><span>{item.year}</span><strong>{item.label}</strong><small>{item.note}</small><b>↗</b></div>)}
        </div>
      </section>

      <section className="services section-shell" id="services" aria-labelledby="services-title">
        <div className="section-heading"><div className="section-index">06 / Capabilities</div><span className="section-caption">The kinds of problems I like to move toward</span></div>
        <div className="services-layout"><h2 id="services-title">Useful work,<br /><em>carefully made.</em></h2><p>I bring design sensitivity to technical work, and engineering discipline to visual ideas. The best result is a system that feels obvious only after the hard thinking is done.</p></div>
        <div className="service-list">{services.map((service) => <div className="service-row" key={service.number}><span>{service.number}</span><strong>{service.title}</strong><p>{service.detail}</p><b>↗</b></div>)}</div>
      </section>

      <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
        <div className="section-index">07 / Contact</div>
        <div className="contact-main"><p className="eyebrow">Have a useful problem?</p><h2 id="contact-title">Let&apos;s make<br /><em>something clear.</em></h2><a className="contact-email" href={`mailto:${portfolio.email}`}>{portfolio.email}<span>↗</span></a></div>
        <div className="contact-intake"><span><b>01 / Think</b> Clear direction</span><span><b>02 / Build</b> Useful systems</span><span><b>03 / Ship</b> Real outcomes</span></div>
        <div className="contact-footer"><span>{portfolio.availability}</span><span>{portfolio.location}</span><div className="social-links"><a href={portfolio.links.github}>GitHub</a><a href={portfolio.links.linkedin}>LinkedIn</a></div></div>
      </section>

      <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} {portfolio.name}</span><span>Designed & built with intent</span><button type="button" onClick={() => scrollToSection("top")} aria-label="Back to top">Back to top ↑</button></footer>
      {showTopButton && <button className="floating-top" type="button" onClick={() => scrollToSection("top")} aria-label="Back to top">↑</button>}
    </main>
  );
}
