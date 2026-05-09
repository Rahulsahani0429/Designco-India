import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Reveal from '../components/Reveal';
import { pageBanners } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', type: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const infoItems = [
    { icon: '📞', label: 'Phone', val: '084374 67458' },
    { icon: '📍', label: 'Location', val: 'Basantpur Rd, Opposite Nursary, Siwan, Bihar 841226' },
    { icon: '🕘', label: 'Opening Hours', val: '9:00 AM - 7:00 PM' },
    { icon: '⭐', label: 'Rating', val: '5.0 ★ | 7 Google Reviews' },
    { icon: '🚚', label: 'Delivery', val: 'Offers same-day delivery' },
  ];

  return (
    <div className="page-wrapper">
      <PageBanner 
        slides={pageBanners.contact}
        title="Get In Touch"
        subtitle="Contact Us"
        description="We would love to hear from you. Let's discuss your next dream project."
        pageName="Contact"
      />

      <section className="contact" style={{ paddingTop: '4rem' }}>
        <Reveal><div className="section-tag" style={{ textAlign: 'center' }}>Connect</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Start Your <span className="text-highlight-gradient">Project</span> With Us</h2></Reveal>

        <Reveal delay={0.15} y={30}>
          <div className="contact-3col">
            {/* LEFT GLASS PANEL */}
            <div className="contact-left">
              <div className="cl-bolt tl" />
              <div className="cl-bolt bl" />
              <div className="cl-bolt br" />
              <div className="cl-logo">
                <div className="cl-logo-icon">SI</div>
                <div className="cl-logo-name">SIWAN<br />INTERIOR</div>
                <div className="cl-logo-sub">Interior · Wallpaper · PVC Panels</div>
              </div>
              {infoItems.map(item => (
                <div key={item.label} className="cl-item">
                  <div className="cl-icon">{item.icon}</div>
                  <div>
                    <div className="cl-label">{item.label}</div>
                    <div className="cl-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER OFFICE IMAGE */}
            <div className="contact-center">
              <img src="/office-center.png" alt="SIWAN INTERIOR Office" className="contact-center-img" />
              <div className="contact-center-overlay" />
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="contact-right">
              <div>
                <div className="cr-heading">Get In Touch</div>
                <div className="cr-title">Start Your <span className="text-highlight">Project</span><br />With Us</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Your Phone" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Project Type</label>
                  <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="">Select Project Type</option>
                    <option>Wallpaper Installation</option>
                    <option>PVC Wall Panels</option>
                    <option>Home Interior</option>
                    <option>Office Interior</option>
                    <option>Decorative Solutions</option>
                    <option>Ceiling Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="submit-btn">{sent ? '✓ Message Sent!' : 'Send Message →'}</button>
              </form>

              {/* MAP CARD */}
              <div className="map-card">
                <div className="map-placeholder">
                  <div className="map-placeholder-inner">
                    <div className="map-dot" />
                    <span>Siwan, Bihar</span>
                  </div>
                </div>
                <div className="map-card-label">📍 Basantpur Rd, Siwan, Bihar – 841226</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
