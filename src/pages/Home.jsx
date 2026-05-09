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
              <span className="star">★</span> 4.9 Rating &nbsp;|&nbsp; 24k + Reviews
            </div>
            <h1 className="hero-title">Design Beautiful Spaces That Feel <span className="text-highlight">Premium</span>, Functional & <span className="text-highlight">Timeless</span></h1>
            <p className="hero-sub">Designco India delivers premium interior design, architecture planning, civil engineering, and modern residential/commercial solutions in Siwan, Bihar.</p>
          </motion.div>
          <motion.div className="hero-bottom-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-trust-line">
              <span>✔ Trusted Local Design Experts</span>
              <span>✔ 4.8★ Rated Business</span>
              <span>✔ Residential & Commercial Projects</span>
            </div>
            <div className="hero-btns">
              <Link to="/projects" className="btn-primary">View Projects</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
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
              <h2 className="section-title">Elegant <span className="text-highlight-gradient">Architecture & Interior</span> Experiences in Siwan, Bihar</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-body">Designco India is a trusted interior design and civil engineering company based in Siwan, Bihar. We specialize in modern interior solutions, architectural planning, elevation design, commercial spaces, and premium residential projects. Our focus is to create visually elegant, functional, and modern spaces with attention to detail, smart planning, and customer satisfaction.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-stats">
                {[['4.8★', 'Google Rating'], ['24+', 'Customer Reviews'], ['100+', 'Design Concepts'], ['Res & Com', 'Project Types']].map(([num, label]) => (
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
              <div className="about-img"><img src="/about.png" alt="Architect at work" /></div>
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
          <Reveal delay={0.1}><h2 className="section-title">Our <span className="text-highlight-underline">Interior & Civil Engineering</span> Services</h2></Reveal>
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
                    <span>Interior · Architecture · Civil Engineering</span>
                  </div>
                </div>
                <h2 className="cta-heading">
                  Ready to Design Your<br />
                  <span className="text-highlight-gradient">Dream Space?</span>
                </h2>
                <div className="cta-divider" />
                <p className="cta-para">Connect with Designco India for premium interior design, architecture planning, civil engineering, and modern residential/commercial solutions in Siwan, Bihar.</p>
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
