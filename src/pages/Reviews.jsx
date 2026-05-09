import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners, testimonials } from '../data';
import { Link } from 'react-router-dom';

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(c => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.reviews}
        title="Client Testimonials"
        subtitle="What People Say"
        description="Read about the experiences of our clients and discover why we are the top choice for interior design and architecture."
        pageName="Reviews"
      />

      <section className="section reviews">
        <div className="reviews-header">
          <Reveal>
            <div className="rating-badge">
              <span className="stars">★★★★★</span>
              <span className="score">4.8</span>
              <span className="count">| 24 Google Reviews</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}><div className="section-tag">Testimonials</div></Reveal>
          <Reveal delay={0.15}><h2 className="section-title"><span className="text-highlight-underline">Trusted</span> by Clients</h2></Reveal>
        </div>
        
        <div className="testimonial-slider" style={{ marginBottom: '5rem' }}>
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

        {/* GOOGLE REVIEW STYLE CARDS */}
        <Reveal delay={0.2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {testimonials.slice(0, 3).map((test, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{test.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{test.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>1 week ago</div>
                  </div>
                </div>
                <div style={{ color: '#f5c842', marginBottom: '0.5rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>{test.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact" className="btn-primary">Become Our Next Happy Client</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
