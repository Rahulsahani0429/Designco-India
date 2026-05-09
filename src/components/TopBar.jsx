import React from 'react';

export default function TopBar() {
  const content = (
    <>
      📍 Ram Rajya More, Kazi Muhalla, Siwan, Bihar 841226 &nbsp;|&nbsp;
      ⭐ 4.8 Google Rating (24 Reviews) &nbsp;|&nbsp;
      📞 Call: 095467 34413 &nbsp;|&nbsp;
      🕘 Open Daily: 9 AM – 9 PM &nbsp;|&nbsp;
      🏛 Services: Architectural Design, Civil Engineering, Building Planning, Interior Design &nbsp;|&nbsp;
      ✨ Premium Construction & Design Solutions by Designco India &nbsp;|&nbsp;
    </>
  );

  return (
    <div className="top-bar">
      <div className="top-bar-marquee">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
