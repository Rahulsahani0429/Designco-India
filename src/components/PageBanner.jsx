import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PageBanner({ slides, title, description, subtitle, pageName }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="page-banner inner-page-hero">
      {slides.map((s, i) => (
        <div key={i} className={`page-banner-slide ${i === current ? 'active' : ''}`}>
          <img src={s.url} alt={title} className="hero-bg" />
        </div>
      ))}
      <div className="page-banner-overlay" />
      <div className="page-banner-content">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          {subtitle && <div className="page-banner-subtitle">{subtitle}</div>}
          <h1 className="page-banner-title">{title}</h1>
          {description && <p className="page-banner-desc">{description}</p>}
          <div className="page-banner-breadcrumb">
            <a href="/">Home</a> / <span>{pageName}</span>
          </div>
        </motion.div>
      </div>
      <div className="page-banner-dots">
        {slides.map((_, i) => (
          <div key={i} className={`page-banner-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}
