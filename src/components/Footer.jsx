import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

export default function Footer() {
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
          <ul>{navLinks.map(l => <li key={l.name}><Link to={l.path}>{l.name}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>{['Interior Design', 'Architecture Planning', 'Civil Engineering', 'Home Renovation', 'Commercial Space Design', '3D Visualization'].map(s => <li key={s}><Link to="/services">{s}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:09546734413">📞 095467 34413</a></li>
            <li><Link to="/contact">📍 Kagzi Muhalla, Siwan 841226</Link></li>
            <li><Link to="/reviews">⭐ 4.9 ★ | 24k + Happy Customers</Link></li>
            <li><Link to="/contact">🕘 Open · 9 AM</Link></li>
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
