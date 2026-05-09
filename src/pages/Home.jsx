import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { heroSlides, trustItems, services, projects, steps, galleryItems, testimonials } from '../data';

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const doubledTrust = [...trustItems, ...trustItems];

  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className="hero">
        {heroSlides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`} style={{ backgroundImage: `url(${s.url})` }} />
        ))}
        <div className="hero-overlay" />
        <div className="hero-content-wrapper">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-badge">
              <span className="star">★</span> 4.8 Rating &nbsp;|&nbsp; 24 Verified Reviews
            </div>
            <h1 className="hero-title">Trusted <span className="text-highlight">Civil Engineers</span> & <span className="text-highlight">Architects</span> in Siwan</h1>
            <p className="hero-sub">Designco India delivers premium architectural design, civil engineering, and modern interior solutions for residential and commercial projects with world-class quality in Siwan, Bihar.</p>
          </motion.div>
          <motion.div className="hero-bottom-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-trust-line">
              <span>✔ Architectural Design</span>
              <span>✔ Civil Engineering</span>
              <span>✔ Building Planning</span>
              <span>✔ Professional Construction</span>
              <span>✔ Trusted Experts In Siwan</span>
            </div>
            <div className="hero-btns">
              <a href="tel:09546734413" className="btn-primary">Call Now</a>
              <Link to="/contact" className="btn-outline">Get Free Consultation</Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <div key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-track">
          {doubledTrust.map((item, i) => (
            <span key={i} className="trust-item">— {item}</span>
          ))}
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="section about">
        <div className="about-grid">
          <div>
            <Reveal><div className="section-tag">About Us</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">Designco India: <span className="text-highlight-gradient">Civil Engineering & Architecture</span> in Siwan, Bihar</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-body">Designco India is a trusted civil engineering and architectural design firm in Siwan, Bihar, offering premium solutions for residential, commercial, and industrial projects. We specialize in modern architectural design, structural engineering, building planning, and professional construction consultancy.</p>
              <p className="about-body" style={{ marginTop: '1rem' }}>Our mission is to build high-quality, modern, and safe structures using advanced engineering principles and innovative design concepts.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-stats">
                {[['4.8★', 'Google Rating'], ['24+', 'Google Reviews'], ['Premium', 'Engineering'], ['Trusted', 'Expert Firm']].map(([num, label]) => (
                  <div key={label} className="stat-card">
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="about-images">
              <div className="about-img"><img src="/about.png" alt="Interior Designer at work" /></div>
              <div className="about-img"><img src="/proj-residential.png" alt="Residential design" /></div>
              <div className="about-img"><img src="/hero1.png" alt="Interior design" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section services">
        <div style={{ textAlign: 'center' }}>
          <Reveal><div className="section-tag">What We Offer</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Our <span className="text-highlight-underline">Premium Interior</span> Services</h2></Reveal>
        </div>
        <div className="services-grid">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div className="service-card">
                <div className="service-thumb"><img src={s.img} alt={s.name} /></div>
                <div className="service-body">
                  <div className="service-num">{s.num}</div>
                  <div className="service-name">{s.name}</div>
                  <div className="service-icon-circle">{s.icon}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/services" className="view-all-btn">▼ View All Services</Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section projects">
        <div style={{ textAlign: 'center' }}>
          <Reveal><div className="section-tag">Portfolio</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Featured <span className="text-highlight">Design Showcase</span></h2></Reveal>
          <Reveal delay={0.2}><p className="section-sub" style={{ margin: '0 auto 1rem' }}>Discover how we turn visions into captivating realities, one space at a time.</p></Reveal>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 6).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="project-card">
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <span className="project-tag">{p.cat}</span>
                  <div className="project-title">{p.title}</div>
                  <Link to="/projects" className="project-btn">View Project →</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div style={{ textAlign: 'center' }}>
          <Reveal><div className="section-tag" style={{ color: '#c8ddd9' }}>Our Workflow</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title" style={{ color: 'white' }}>From <span className="text-highlight-underline">Idea</span> To <span className="text-highlight">Reality</span></h2></Reveal>
        </div>
        <div className="process-track">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="process-step">
                <div className="step-num">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="cta-banner">
        <Reveal y={30}>
          <div className="cta-wrap">
            <div className="cta-left">
              <div>
                <div className="cta-brand-label">
                  <div className="cta-brand-icon">DI</div>
                  <div className="cta-brand-text">
                    <span>DESIGNCO INDIA</span>
                    <span>Civil · Architecture · Interior</span>
                  </div>
                </div>
                <h2 className="cta-heading">
                  Ready to Build Your<br />
                  <span className="text-highlight-gradient">Dream Space?</span>
                </h2>
                <div className="cta-divider" />
                <p className="cta-para">Connect with Designco India for professional architectural design, civil engineering, and modern construction consultancy in Siwan, Bihar. Let&apos;s build something extraordinary together.</p>
              </div>
              <div className="cta-btns">
                <Link to="/contact" className="btn-emerald">📅 Book Consultation</Link>
                <a href="tel:09546734413" className="btn-glass">📞 Call 095467 34413</a>
              </div>
            </div>
            <div className="cta-right">
              <img src="/cta-villa.png" alt="Luxury Villa" className="cta-right-img" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
