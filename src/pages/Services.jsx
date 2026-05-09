import React from 'react';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners, services } from '../data';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.services}
        title="Our Premium Services"
        subtitle="What We Offer"
        description="Comprehensive interior and wallpaper design solutions tailored to your unique lifestyle and business requirements."
        pageName="Services"
      />

      <section className="section services">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Reveal><div className="section-tag">Expertise</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">End-to-End <span className="text-highlight-gradient">Design & Build</span> Solutions</h2></Reveal>
        </div>

        <div className="services-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="service-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="service-thumb"><img src={s.img} alt={s.name} /></div>
                <div className="service-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="service-icon-circle" style={{ marginTop: '-2rem', marginBottom: '1rem', background: 'var(--green)', color: 'white', border: '4px solid white', width: '50px', height: '50px', fontSize: '1.4rem' }}>{s.icon}</div>
                  <h3 className="service-name" style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{s.name}</h3>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                    <li style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.4rem' }}>✓ Premium Quality Materials</li>
                    <li style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.4rem' }}>✓ On-Time Delivery</li>
                    <li style={{ fontSize: '0.85rem', color: '#666' }}>✓ Expert Craftsmanship</li>
                  </ul>
                  <Link to="/contact" className="btn-outline" style={{ color: 'var(--green)', borderColor: 'var(--green)', textAlign: 'center', padding: '0.6rem' }}>Enquire Now</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Reveal><div className="section-tag">FAQ</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">Frequently <span className="text-highlight-underline">Asked Questions</span></h2></Reveal>
          
          <div style={{ marginTop: '3rem', textAlign: 'left' }}>
            <Reveal delay={0.2}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', marginBottom: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>How do we start a project?</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>We begin with an initial consultation to understand your requirements, budget, and vision. Then we proceed to concept planning and 3D visualization.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', marginBottom: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Do you handle both design and execution?</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Yes, we offer complete turnkey solutions. From 3D visualization and interior design to decorative paneling and final finishing, we handle everything.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', marginBottom: '1rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text)' }}>Do you provide services outside Siwan?</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Yes, while we are based in Siwan, Bihar, we take on projects across Bihar and neighboring regions depending on the project scale.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
