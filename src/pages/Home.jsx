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
              <span className="star">★</span> 5.0 Rating &nbsp;|&nbsp; 7+ Reviews
            </div>
            <h1 className="hero-title">Transform Your Space With <span className="text-highlight">Premium</span> Interior <span className="text-highlight">Designs</span></h1>
            <p className="hero-sub">SIWAN INTERIOR provides premium wallpaper installation, decorative wall designs, PVC wall panels, elegant ceiling concepts, and luxury interior finishing services for homes, offices, and commercial spaces in Siwan.</p>
          </motion.div>
          <motion.div className="hero-bottom-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="hero-trust-line">
              <span>✔ Modern Wallpaper Designs</span>
              <span>✔ Premium Interior Solutions</span>
              <span>✔ Elegant Wall Decoration</span>
              <span>✔ Professional Finishing</span>
              <span>✔ Trusted Interior Store In Siwan</span>
            </div>
            <div className="hero-btns">
              <a href="tel:08437467458" className="btn-primary">Call Now</a>
              <Link to="/contact" className="btn-outline">Get Free Consultation</Link>
              <Link to="/contact" className="btn-outline">Visit Store</Link>
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
              <h2 className="section-title">Elegant <span className="text-highlight-gradient">Interior & Wallpaper</span> Experiences in Siwan, Bihar</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-body">SIWAN INTERIOR is a trusted interior and wallpaper design business in Siwan, Bihar, offering premium interior solutions for homes, offices, showrooms, and commercial spaces. We specialize in modern wallpaper installation, decorative wall concepts, elegant ceiling designs, and high-quality finishing work.</p>
              <p className="about-body" style={{ marginTop: '1rem' }}>Our goal is to transform ordinary spaces into stylish modern interiors using premium materials, creative design concepts, and professional craftsmanship.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-stats">
                {[['5.0★', 'Google Rating'], ['7+', 'Positive Reviews'], ['Premium', 'Quality Materials'], ['Trusted', 'Interior Store']].map(([num, label]) => (
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
                  <div className="cta-brand-icon">SI</div>
                  <div className="cta-brand-text">
                    <span>SIWAN INTERIOR</span>
                    <span>Premium Interior & Wallpaper Solutions</span>
                  </div>
                </div>
                <h2 className="cta-heading">
                  Ready to Design Your<br />
                  <span className="text-highlight-gradient">Dream Space?</span>
                </h2>
                <div className="cta-divider" />
                <p className="cta-para">Connect with SIWAN INTERIOR for premium wallpaper installation, decorative wall designs, PVC panel work, ceiling concepts, and elegant finishing services in Siwan, Bihar.</p>
              </div>
              <div className="cta-btns">
                <Link to="/contact" className="btn-emerald">📅 Book Consultation</Link>
                <a href="tel:08437467458" className="btn-glass">📞 Call 084374 67458</a>
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
