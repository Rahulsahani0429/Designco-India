import React from 'react';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners, steps } from '../data';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.about}
        title="About SIWAN INTERIOR"
        subtitle="Our Story"
        description="We are a premium interior design and wallpaper store dedicated to creating timeless spaces in Siwan, Bihar."
        pageName="About Us"
      />

      <section className="section about">
        <div className="about-grid">
          <div>
            <Reveal><div className="section-tag">Company Story</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">Crafting <span className="text-highlight-underline">Timeless Spaces</span> with Precision</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-body">SIWAN INTERIOR is a trusted interior and wallpaper design business in Siwan, Bihar, offering premium interior solutions for homes, offices, showrooms, and commercial spaces. We specialize in modern wallpaper installation, decorative wall concepts, elegant ceiling designs, and high-quality finishing work.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="about-body" style={{ marginTop: '1rem' }}>Our goal is to transform ordinary spaces into stylish modern interiors using premium materials, creative design concepts, and professional craftsmanship.</p>
            </Reveal>
            <Reveal delay={0.4}>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn-primary">Let's Discuss Your Space</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="about-images">
              <div className="about-img"><img src="/about.png" alt="Interior Designer at work" /></div>
              <div className="about-img"><img src="/hero2.png" alt="Residential design" /></div>
              <div className="about-img"><img src="/hero1.png" alt="Interior design" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: 'var(--green-light)' }}>
        <div className="about-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <Reveal>
            <div className="service-card" style={{ padding: '3rem', cursor: 'default' }}>
              <div className="section-tag">Our Mission</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text)' }}>Elevating <span className="text-highlight">Lifestyles</span></h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>To provide innovative, high-quality, and modern interior design solutions that enhance the way people live and work, setting new standards in the interior and wallpaper industry.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="service-card" style={{ padding: '3rem', cursor: 'default' }}>
              <div className="section-tag">Our Vision</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text)' }}>Designing the <span className="text-highlight">Future</span></h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>To be the most trusted and sought-after design and build firm in Bihar, known for our creativity, integrity, and flawless execution of luxury spaces.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process">
        <div style={{ textAlign: 'center' }}>
          <Reveal><div className="section-tag" style={{ color: '#c8ddd9' }}>Design Philosophy</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title" style={{ color: 'white' }}>Why Clients <span className="text-highlight-underline">Trust Us</span></h2></Reveal>
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

    </div>
  );
}
