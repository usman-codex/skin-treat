// src/App.jsx

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingElements from './components/FloatingElements.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import DentalPage from './pages/DentalPage.jsx';

import './App.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 150) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => { window.removeEventListener('scroll', controlHeader); };
  }, [lastScrollY]);

  return (
    <div className="App">
      <ScrollToTop />
      <header className={`header-sticky ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dental" element={<DentalPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;