import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">SIWAN INTERIOR</div>
          <p>Premium interior design, wallpaper installation, decorative wall designs, PVC panel work, ceiling concepts, and elegant finishing services in Siwan, Bihar.</p>
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
          <ul>{['Wallpaper Installation', 'PVC Wall Panels', 'Decorative Walls', 'Ceiling Design', 'Home Interiors', 'Office Interiors'].map(s => <li key={s}><Link to="/services">{s}</Link></li>)}</ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:08437467458">📞 084374 67458</a></li>
            <li><Link to="/contact">📍 Basantpur Rd, Siwan 841226</Link></li>
            <li><Link to="/reviews">⭐ 5.0 ★ | Trusted Interior Store</Link></li>
            <li><Link to="/contact">🕘 Open 9 AM – 7 PM</Link></li>
            <li><Link to="/contact">🚚 Offers same-day delivery</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SIWAN INTERIOR. All rights reserved.</p>
        <p>Premium Interior & Wallpaper Solutions In Siwan</p>
      </div>
    </footer>
  );
}
