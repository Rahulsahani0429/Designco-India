import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './index.css';
import './App.css';

/* ─────────────── DATA ─────────────── */
const heroSlides = [
  { url: '/hero1.png', label: 'Premium Interiors' },
  { url: '/hero2.png', label: 'Villa Architecture' },
  { url: '/hero3.png', label: 'Modular Kitchens' },
];

const trustItems = ['Interior Design', 'Architecture Planning', 'Civil Engineering', 'Home Renovation', 'Commercial Spaces', '3D Visualization', 'Elevation Design', 'Space Planning', 'Modern Homes', 'Luxury Interiors'];

const services = [
  { num: '01', name: 'Interior Design', icon: '🪑', img: '/proj-residential.png', desc: 'Modern and functional interior solutions for homes and commercial spaces.' },
  { num: '02', name: 'Architecture Planning', icon: '🏛️', img: '/hero1.png', desc: 'Comprehensive architectural planning from concept to detailed drawings.' },
  { num: '03', name: 'Civil Engineering', icon: '⚙️', img: '/proj-commercial.png', desc: 'Structural and civil engineering services for lasting, safe constructions.' },
  { num: '04', name: 'Home Renovation', icon: '🏠', img: '/proj-residential.png', desc: 'Transform your existing space with premium renovation and upgrade solutions.' },
  { num: '05', name: 'Commercial Space Design', icon: '🏢', img: '/proj-commercial.png', desc: 'Elegant, brand-aligned commercial interiors for offices and retail spaces.' },
  { num: '06', name: '3D Visualization', icon: '🎨', img: '/hero2.png', desc: 'Realistic 3D walkthroughs to visualize your space before construction begins.' },
  { num: '07', name: 'Elevation Design', icon: '🏗️', img: '/hero3.png', desc: "Striking exterior elevations that define your building's identity and style." },
  { num: '08', name: 'Space Planning', icon: '📐', img: '/hero1.png', desc: 'Smart space planning for optimal use, flow, and comfort in every room.' },
  { num: '09', name: 'Modern Home Concepts', icon: '✏️', img: '/proj-villa.png', desc: 'Contemporary home design concepts inspired by global design trends.' },
  { num: '10', name: 'Luxury Interior Solutions', icon: '💎', img: '/proj-kitchen.png', desc: 'High-end luxury interiors with premium materials and bespoke detailing.' },
];

const allServicesList = [
  'Residential interior design', 'Commercial interior design', 'Office space design', 'False ceiling design', 'Modular kitchen design', 'Bedroom interior design', 'Living room design', 'Bathroom & washroom design', 'Architectural drawings', 'Building layout planning', 'Structural analysis', 'Foundation design', 'Retaining wall design', 'Drainage & plumbing planning', 'Elevation & facade design', 'Building permit assistance', 'Construction supervision', 'Site inspection', 'Budget estimation', 'Project management', 'Turnkey execution', 'Furniture & fixture sourcing', 'Lighting design', 'Landscape planning',
];

const projects = [
  { title: 'Luxury Residential Interior', cat: 'Residential', img: '/proj-residential.png' },
  { title: 'Modern Villa Architecture', cat: 'Architecture', img: '/proj-villa.png' },
  { title: 'Modular Kitchen Design', cat: 'Interior', img: '/proj-kitchen.png' },
  { title: 'Commercial Office Design', cat: 'Commercial', img: '/proj-commercial.png' },
  { title: 'Structural Planning', cat: 'Engineering', img: '/about.png' },
  { title: 'Sustainable Home Design', cat: 'Sustainable', img: '/hero1.png' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Understand your requirements, site condition and budget.' },
  { num: '02', title: 'Concept Planning', desc: 'Create layout, moodboard and architectural direction.' },
  { num: '03', title: '3D Visualization', desc: 'Show realistic interior and exterior design previews.' },
  { num: '04', title: 'Technical Drawings', desc: 'Prepare structural, architectural and engineering drawings.' },
  { num: '05', title: 'Execution Supervision', desc: 'Guide construction and design execution with quality control.' },
  { num: '06', title: 'Final Handover', desc: 'Deliver a polished space ready for living or business.' },
];

const galleryItems = [
  { img: '/proj-residential.png', label: 'Living Room' },
  { img: '/hero1.png', label: 'Bedroom' },
  { img: '/proj-kitchen.png', label: 'Kitchen' },
  { img: '/proj-commercial.png', label: 'Office' },
  { img: '/proj-villa.png', label: 'Villa Exterior' },
  { img: '/about.png', label: 'Workspace' },
  { img: '/hero3.png', label: 'Modular Kitchen' },
  { img: '/hero2.png', label: 'Architecture' },
];

const testimonials = [
  { text: '"Mind blowing client satisfaction service. Designco India exceeded every expectation!"', name: 'Mantu Kumar Patel Official', role: 'Residential Client, Siwan ⭐⭐⭐⭐⭐' },
  { text: '"Very nice….. Really impressed with the interior design quality and attention to detail."', name: 'Shubham Kumar Choudhary', role: 'Interior Design Client, Bihar ⭐⭐⭐⭐⭐' },
  { text: '"Designco India transformed our home beautifully. The 3D visualization helped us see the design before work even started. Highly professional team!"', name: 'Rajiv Mishra', role: 'Home Renovation Client, Siwan ⭐⭐⭐⭐⭐' },
  { text: '"Outstanding architecture planning and civil engineering support. Our commercial space looks stunning and was delivered on time. Best in Bihar!"', name: 'Pooja Agarwal', role: 'Commercial Client, Bihar ⭐⭐⭐⭐⭐' },
  { text: '"The elevation design and interior work done by Designco India is world-class. Neighbours and guests are amazed. Truly premium service at a fair price."', name: 'Sanjay Tiwari', role: 'Luxury Interior Client, Siwan ⭐⭐⭐⭐⭐' },
];

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Gallery', 'Reviews', 'Contact'];

/* ─────────────── REVEAL WRAPPER ─────────────── */
function Reveal({ children, delay = 0, y = 40 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

/* ─────────────── NAVBAR ─────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
      <div className="nav-logo">Designco India</div>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(link.toLowerCase()); }}>
              {link}
            </a>
          </li>
        ))}
        <li><a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Contact Us</a></li>
      </ul>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </div>
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10,26,21,.97)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(link.toLowerCase()); }}
              style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', color: 'var(--white)', letterSpacing: '.04em' }}>
              {link}
            </a>
          ))}
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}>✕</button>
        </div>
      )}
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {heroSlides.map((s, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`} style={{ backgroundImage: `url(${s.url})` }} />
      ))}
      <div className="hero-overlay" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
        <div className="hero-badge">
          <span className="star">★</span> 4.8 Rating &nbsp;|&nbsp; 24 Reviews
        </div>
        <h1 className="hero-title">Transforming Spaces with <em>Smart</em> Design</h1>
        <p className="hero-sub">Designco India delivers premium interior design, architecture planning, civil engineering, and modern residential/commercial solutions in Siwan, Bihar.</p>
        <div className="hero-trust-line" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)' }}>
          <span>✔ Trusted Local Design Experts</span>
          <span>✔ 4.8★ Rated Business</span>
          <span>✔ Residential &amp; Commercial Projects</span>
        </div>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore Projects</a>
          <a href="tel:09546734413" className="btn-outline">📞 Call Now</a>
        </div>
      </motion.div>



      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <div key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────── TRUST STRIP ─────────────── */
function TrustStrip() {
  const doubled = [...trustItems, ...trustItems];
  return (
    <div className="trust-strip">
      <div className="trust-track">
        {doubled.map((item, i) => (
          <span key={i} className="trust-item">— {item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── ABOUT ─────────────── */
function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div>
          <Reveal><div className="section-tag">About Us</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Elegant Architecture & Interior Experiences in Siwan, Bihar</h2>
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
  );
}

/* ─────────────── SERVICES ─────────────── */
function Services() {
  const [open, setOpen] = useState(false);
  return (
    <section id="services" className="section services">
      <div style={{ textAlign: 'center' }}>
        <Reveal><div className="section-tag">What We Offer</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Our Interior & Civil Engineering Services</h2></Reveal>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
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
        <button className="view-all-btn" onClick={() => setOpen(!open)}>
          {open ? '▲ Show Less' : '▼ View All Services'}
        </button>
      </div>
      <ul className={`all-services-list ${open ? 'open' : ''}`}>
        {allServicesList.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}

/* ─────────────── PROJECTS ─────────────── */
function Projects() {
  return (
    <section id="projects" className="section projects">
      <div style={{ textAlign: 'center' }}>
        <Reveal><div className="section-tag">Portfolio</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Featured Design Showcase</h2></Reveal>
        <Reveal delay={0.2}><p className="section-sub" style={{ margin: '0 auto 1rem' }}>Discover how we turn visions into captivating realities, one space at a time.</p></Reveal>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="project-card">
              <img src={p.img} alt={p.title} className="project-img" />
              <div className="project-overlay" />
              <div className="project-info">
                <span className="project-tag">{p.cat}</span>
                <div className="project-title">{p.title}</div>
                <a href="#contact" className="project-btn">View Project →</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── PROCESS ─────────────── */
function Process() {
  return (
    <section id="process" className="process">
      <div style={{ textAlign: 'center' }}>
        <Reveal><div className="section-tag" style={{ color: '#c8ddd9' }}>Our Workflow</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title" style={{ color: 'white' }}>From Idea To Reality</h2></Reveal>
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
  );
}

/* ─────────────── GALLERY ─────────────── */
function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div style={{ textAlign: 'center' }}>
        <Reveal><div className="section-tag">Inspiration</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Explore Our Design Mood</h2></Reveal>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="gallery-item">
              <img src={item.img} alt={item.label} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-label">{item.label}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── REVIEWS ─────────────── */
function Reviews() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(c => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section id="reviews" className="section reviews">
      <div className="reviews-header">
        <Reveal>
          <div className="rating-badge">
            <span className="stars">★★★★★</span>
            <span className="score">4.8</span>
            <span className="count">| 24 Google Reviews</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}><div className="section-tag">Testimonials</div></Reveal>
        <Reveal delay={0.15}><h2 className="section-title">Trusted by Clients</h2></Reveal>
      </div>
      <div className="testimonial-slider">
        <AnimatePresence mode="wait">
          <motion.div key={idx} className="testimonial-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.name[0]}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button className="arrow-btn arrow-prev" onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}>←</button>
        <button className="arrow-btn arrow-next" onClick={() => setIdx(i => (i + 1) % testimonials.length)}>→</button>
        <div className="slider-nav">
          {testimonials.map((_, i) => <div key={i} className={`slider-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />)}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA BANNER PREMIUM ─────────────── */
const ctaFeatures = [
  { icon: '🏛️', label: 'Architecture' },
  { icon: '🪑', label: 'Interior Design' },
  { icon: '⚙️', label: 'Structural Design' },
  { icon: '🔑', label: 'Turnkey Solutions' },
];
const ctaTrust = [
  { icon: '🏆', title: 'Expert Team', sub: 'Experienced Professionals' },
  { icon: '💎', title: 'Quality & Innovation', sub: 'Creative, Durable Designs' },
  { icon: '⚡', title: 'On-Time Delivery', sub: 'From Concept to Completion' },
];
const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${5 + (i * 5.2) % 90}%`,
  dur: `${7 + (i % 5)}s`,
  delay: `${(i * 0.7) % 6}s`,
  top: `${10 + (i * 7) % 80}%`,
}));

function CTABanner() {
  return (
    <section className="cta-banner">
      <Reveal y={30}>
        <div className="cta-wrap">
          {/* Floating particles */}
          <div className="cta-particles">
            {particles.map((p, i) => (
              <div key={i} className="particle" style={{ left: p.left, top: p.top, '--dur': p.dur, '--delay': p.delay }} />
            ))}
          </div>

          {/* LEFT */}
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
                <span className="gold">Dream Space?</span>
              </h2>
              <div className="cta-divider" />
              <p className="cta-para">Connect with Designco India for premium interior design, architecture planning, civil engineering, and modern residential/commercial solutions in Siwan, Bihar.</p>
              <div className="cta-features">
                {ctaFeatures.map(f => (
                  <div key={f.label} className="cta-feat">
                    <div className="cta-feat-icon">{f.icon}</div>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-btns">
              <a href="#contact" className="btn-emerald"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                📅 Book Consultation
              </a>
              <a href="tel:09546734413" className="btn-glass">📞 Call 095467 34413</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="cta-right">
            <img src="/cta-villa.png" alt="Luxury Villa" className="cta-right-img" />
          </div>

          {/* TRUST STRIP */}
          <div className="cta-trust">
            {ctaTrust.map(t => (
              <div key={t.title} className="cta-trust-item">
                <div className="cta-trust-icon">{t.icon}</div>
                <div className="cta-trust-text">
                  <strong>{t.title}</strong>
                  <span>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}


/* ─────────────── CONTACT PREMIUM ─────────────── */
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const infoItems = [
    { icon: '📞', label: 'Phone', val: '095467 34413' },
    { icon: '📍', label: 'Location', val: 'Behind Richa Gas Agency Ram Rajya More, Kagzi Muhalla, Siwan, Bihar 841226' },
    { icon: '🕘', label: 'Opening Hours', val: 'Open · 9 AM' },
    { icon: '⭐', label: 'Rating', val: '4.8 ★ | 24 Google Reviews' },
  ];

  return (
    <section id="contact" className="contact">
      <Reveal><div className="section-tag" style={{ textAlign: 'center' }}>Get In Touch</div></Reveal>
      <Reveal delay={0.1}><h2 className="section-title">Start Your Project With Us</h2></Reveal>

      <Reveal delay={0.15} y={30}>
        <div className="contact-3col">

          {/* LEFT GLASS PANEL */}
          <div className="contact-left">
            <div className="cl-bolt tl" />
            <div className="cl-bolt bl" />
            <div className="cl-bolt br" />
            <div className="cl-logo">
              <div className="cl-logo-icon">DI</div>
              <div className="cl-logo-name">DESIGNCO<br />INDIA</div>
              <div className="cl-logo-sub">Interior · Architecture · Civil Engineering</div>
            </div>
            {infoItems.map(item => (
              <div key={item.label} className="cl-item">
                <div className="cl-icon">{item.icon}</div>
                <div>
                  <div className="cl-label">{item.label}</div>
                  <div className="cl-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER OFFICE IMAGE */}
          <div className="contact-center">
            <img src="/office-center.png" alt="FJ Architects Office" className="contact-center-img" />
            <div className="contact-center-overlay" />
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="contact-right">
            <div>
              <div className="cr-heading">Get In Touch</div>
              <div className="cr-title">Start Your Project<br />With Us</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your Phone" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                  <option value="">Select Project Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Interior Design</option>
                  <option>Architecture</option>
                  <option>Structural Engineering</option>
                  <option>Turnkey Project</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="submit-btn">{sent ? '✓ Message Sent!' : 'Send Message →'}</button>
            </form>

            {/* MAP CARD */}
            <div className="map-card">
              <div className="map-placeholder">
                <div className="map-placeholder-inner">
                  <div className="map-dot" />
                  <span>Siwan, Bihar</span>
                </div>
              </div>
              <div className="map-card-label">📍 Kagzi Muhalla, Siwan, Bihar – 841226</div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">Designco India</div>
          <p>Premium interior design, architecture planning, and civil engineering solutions for residential and commercial spaces in Siwan, Bihar.</p>
          <div className="footer-social">
            {['f', 'in', 'ig', 'yt'].map(s => <a key={s} href="#" className="social-icon">{s}</a>)}
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>{navLinks.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>{['Interior Design', 'Architecture Planning', 'Civil Engineering', 'Home Renovation', 'Commercial Space Design', '3D Visualization'].map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:09546734413">📞 095467 34413</a></li>
            <li><a href="#contact">📍 Kagzi Muhalla, Siwan 841226</a></li>
            <li><a href="#contact">⭐ 4.8 ★ | 24 Reviews</a></li>
            <li><a href="#contact">🕘 Open · 9 AM</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Designco India. All rights reserved.</p>
        <p>Siwan, Bihar · Interior Design · Architecture · Civil Engineering</p>
      </div>
    </footer>
  );
}

/* ─────────────── APP ─────────────── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Projects />
      <Process />
      <Gallery />
      <Reviews />
      <CTABanner />
      <Contact />
      <a
        className="whatsapp-btn"
        href="https://wa.me/919546734413"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.01A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.764-1.847l-.485-.288-5.02 1.194 1.218-4.895-.317-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.86c-.398-.2-2.354-1.16-2.72-1.293-.366-.133-.632-.2-.898.2-.266.398-1.03 1.293-1.263 1.56-.233.266-.465.3-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.363-2.216-2.761-.233-.398-.025-.613.175-.812.18-.179.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.2-.898-2.163-1.23-2.96-.324-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.499-.366.398-1.396 1.364-1.396 3.327s1.43 3.86 1.63 4.126c.2.266 2.814 4.298 6.82 6.027.953.411 1.697.657 2.277.841.957.305 1.828.262 2.516.159.768-.114 2.354-.962 2.687-1.89.333-.929.333-1.726.233-1.891-.1-.166-.366-.266-.764-.465z" />
        </svg>
      </a>
      <Footer />
    </>
  );
}
