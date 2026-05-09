import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : 'top'}`}>
      <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>Designco India</Link>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
              {link.name}
            </Link>
          </li>
        ))}
        <li><Link to="/contact" className="nav-cta">Contact Us</Link></li>
      </ul>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button className="menu-close" onClick={() => setMenuOpen(false)}>✕</button>
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMenuOpen(false)}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary contact-btn" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
