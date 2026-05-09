import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">Designco India</div>
          <p>The leading civil engineering and architectural firm in Siwan, Bihar. Dedicated to building smart, modern, and high-quality spaces.</p>
          <div className="footer-social">
            {['f', 'in', 'ig', 'yt'].map(s => <a key={s} href="#" className="social-icon">{s}</a>)}
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>{navLinks.map(l => <li key={l.name}><Link to={l.path}>{l.name}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>{['Architectural Design', 'Civil Engineering', 'Interior Design', 'Building Planning', 'Commercial Design', 'Home Planning'].map(s => <li key={s}><Link to="/services">{s}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Business Info</h4>
          <ul>
            <li><a href="tel:09546734413">📞 095467 34413</a></li>
            <li><Link to="/contact">📍 Behind Richa Gas Agency, Ram Rajya More, Siwan 841226</Link></li>
            <li><Link to="/reviews">⭐ 4.8 ★ | 24 Google Reviews</Link></li>
            <li><Link to="/contact">🕘 Open Daily: 9 AM - 9 PM</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Designco India. All rights reserved.</p>
        <p>Siwan, Bihar · Trusted Civil Engineers · Modern Architecture</p>
      </div>
    </footer>
  );
}
