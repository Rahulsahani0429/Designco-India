import React from 'react';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners, galleryItems } from '../data';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.gallery}
        title="Design Inspiration"
        subtitle="Gallery"
        description="Browse through our gallery of architectural masterpieces, structural plans, and premium interior executions."
        pageName="Gallery"
      />

      <section className="section gallery">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Reveal><div className="section-tag">Visuals</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title">A Symphony of <span className="text-highlight">Architecture</span></h2></Reveal>
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
          {/* Add a few more items for a bigger gallery */}
          <Reveal delay={0.2}><div className="gallery-item"><img src="/proj-commercial.png" alt="Commercial" className="gallery-img" /><div className="gallery-overlay"><span className="gallery-label">Commercial Planning</span></div></div></Reveal>
          <Reveal delay={0.3}><div className="gallery-item" style={{ gridColumn: 'span 2' }}><img src="/hero2.png" alt="Engineering Details" className="gallery-img" /><div className="gallery-overlay"><span className="gallery-label">Civil Engineering</span></div></div></Reveal>
        </div>

        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact" className="btn-primary">Ready to Build Your Vision?</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
