import React from 'react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-marquee">
        <span>
          Flat 30% OFF On Premium Interior Design Consultation &nbsp;|&nbsp;
          ⭐ 4.9 Rated Architecture & Interior Design Firm in Siwan &nbsp;|&nbsp;
          📍 Station Road, Ram Rajya More, Behind Richa Gas Agency, Siwan, Bihar 841226 &nbsp;|&nbsp;
          ⏰ Open Mon–Sat: 9:00 AM – 6:00 PM / 6:30 PM &nbsp;|&nbsp;
          📞 Call: +91 95467 34413 &nbsp;|&nbsp;
          🏛 Services: Architecture, Civil Engineering & Interior Design &nbsp;|&nbsp;
          ✨ Transform your home, office, showroom and commercial space with Designco India
        </span>
        {/* Duplicate for infinite loop */}
        <span>
          Flat 30% OFF On Premium Interior Design Consultation &nbsp;|&nbsp;
          ⭐ 4.9 Rated Architecture & Interior Design Firm in Siwan &nbsp;|&nbsp;
          📍 Station Road, Ram Rajya More, Behind Richa Gas Agency, Siwan, Bihar 841226 &nbsp;|&nbsp;
          ⏰ Open Mon–Sat: 9:00 AM – 6:00 PM / 6:30 PM &nbsp;|&nbsp;
          📞 Call: +91 95467 34413 &nbsp;|&nbsp;
          🏛 Services: Architecture, Civil Engineering & Interior Design &nbsp;|&nbsp;
          ✨ Transform your home, office, showroom and commercial space with Designco India
        </span>
      </div>
    </div>
  );
}
