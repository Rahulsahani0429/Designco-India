import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners, projects } from '../data';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Wallpaper', 'Interior', 'Decorative', 'Ceiling', 'Commercial'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.projects}
        title="Our Portfolio"
        subtitle="Featured Works"
        description="Explore our curated collection of luxury interior, decorative, and wallpaper projects."
        pageName="Projects"
      />

      <section className="section projects">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Reveal><div className="section-tag">Showcase</div></Reveal>
          <Reveal delay={0.1}><h2 className="section-title"><span className="text-highlight-gradient">Masterpieces</span> We've Built</h2></Reveal>
        </div>

        <Reveal delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  background: filter === c ? 'var(--green)' : 'transparent',
                  color: filter === c ? 'white' : 'var(--text)',
                  border: `2px solid ${filter === c ? 'var(--green)' : '#ddd'}`,
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.div 
                key={p.title} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card"
              >
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="project-overlay" />
                <div className="project-info">
                  <span className="project-tag">{p.cat}</span>
                  <div className="project-title">{p.title}</div>
                  <Link to="/contact" className="project-btn">View Details →</Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CASE STUDY HIGHLIGHT */}
        <Reveal delay={0.3} y={40}>
          <div style={{ marginTop: '6rem', background: 'var(--text)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', padding: '4rem', color: 'white' }}>
              <div className="section-tag" style={{ color: '#c8ddd9' }}>Featured Case Study</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '1rem' }}>The Grand Interior <span className="text-highlight">Makeover</span></h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '2rem' }}>A complete interior and wallpaper transformation of a luxury space in Siwan. Featuring premium materials, decorative panels, and modern ceiling design.</p>
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <img src="/proj-villa.png" alt="Case Study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
