import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

import './index.css';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <a
        className="whatsapp-btn"
        href="https://wa.me/918437467458"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.455-2.01A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.764-1.847l-.485-.288-5.02 1.194 1.218-4.895-.317-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.86c-.398-.2-2.354-1.16-2.72-1.293-.366-.133-.632-.2-.898.2-.266.398-1.03 1.293-1.263 1.56-.233.266-.465.3-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.363-2.216-2.761-.233-.398-.025-.613.175-.812.18-.179.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.2-.898-2.163-1.23-2.96-.324-.778-.653-.672-.898-.685l-.765-.013c-.266 0-.698.1-1.064.499-.366.398-1.396 1.364-1.396 3.327s1.43 3.86 1.63 4.126c.2.266 2.814 4.298 6.82 6.027.953.411 1.697.657 2.277.841.957.305 1.828.262 2.516.159.768-.114 2.354-.962 2.687-1.89.333-.929.333-1.726.233-1.891-.1-.166-.366-.266-.764-.465z" />
        </svg>
      </a>
      <Footer />
    </BrowserRouter>
  );
}
