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
        title="About Designco India"
        subtitle="Our Journey"
        description="We are a premium civil engineering and architectural firm dedicated to building sustainable and modern spaces in Siwan, Bihar."
        pageName="About Us"
      />

      <section className="section about">
        <div className="about-grid">
          <div>
            <Reveal><div className="section-tag">Company Story</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">Designing <span className="text-highlight-underline">Structural Masterpieces</span> with Engineering Excellence</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-body">Designco India is a trusted civil engineering and architectural design firm in Siwan, Bihar, offering premium solutions for residential, commercial, and industrial projects. We specialize in modern architectural design, structural engineering, building planning, and professional construction consultancy.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="about-body" style={{ marginTop: '1rem' }}>Our mission is to build high-quality, modern, and safe structures using advanced engineering principles and innovative design concepts that last for generations.</p>
            </Reveal>
            <Reveal delay={0.4}>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="btn-primary">Start Your Project Journey</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="about-images">
              <div className="about-img"><img src="/about.png" alt="Engineering planning" /></div>
              <div className="about-img"><img src="/hero2.png" alt="Civil engineering" /></div>
              <div className="about-img"><img src="/hero1.png" alt="Modern architecture" /></div>
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
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text)' }}>Building <span className="text-highlight">Strength</span> & Beauty</h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>To provide innovative, safe, and high-quality architectural and engineering solutions that enhance the way people live and build, setting new benchmarks in the construction industry of Bihar.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="service-card" style={{ padding: '3rem', cursor: 'default' }}>
              <div className="section-tag">Our Vision</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text)' }}>Architecting the <span className="text-highlight">Future</span></h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>To be the most trusted and sought-after architectural and civil engineering firm in Bihar, recognized for our structural integrity, creative designs, and commitment to building excellence.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process">
        <div style={{ textAlign: 'center' }}>
          <Reveal><div className="section-tag" style={{ color: '#c8ddd9' }}>Our Design Process</div></Reveal>
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
