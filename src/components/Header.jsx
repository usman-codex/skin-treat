// src/components/Header.jsx

import React, { useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import Logo from '../assets/skin-treat-logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== DESKTOP VIEW ===== */}
      <div className="desktop-view-wrapper">
        {/* Top Bar */}
        <div className="desktop-header-top shadow-sm">
          <Link to="/" className="header-section logo-section">
            <img src={Logo} alt="Skin Treat Logo" className="logo-img" />
          </Link>
          <div className="header-section contact-section">
            <a href="tel:+97145774796" className="contact-link">
              <FaWhatsapp className="whatsapp-icon" />
              <span>+971 4 5774796</span>
            </a>
          </div>
          <div className="header-section button-section">
            <button className="btn-custom-primary">BOOK A TREATMENT</button>
          </div>
        </div>
        {/* Navigation Bar */}
        <nav className="desktop-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-item-custom">HOME</Nav.Link>
            
            <Nav.Link as={Link} to="/dental" className="nav-item-custom">DENTAL</Nav.Link>
            <Nav.Link as={Link} to="/dna-analysis" className="nav-item-custom">DNA ANALYSIS</Nav.Link>
            <NavDropdown title="AESTHETICS" id="desktop-aesthetics-dropdown" className="nav-item-custom">
              <NavDropdown.Item as={Link} to="/aesthetics/cosmetic">Cosmetic Injectables</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/aesthetics/skincare">Skin Care</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </nav>
      </div>

      {/* ===== MOBILE VIEW ===== */}
      <div className="mobile-header shadow-sm">
        <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
          <VscMenu />
        </button>
        <Link to="/" className="mobile-logo">
          <img src={Logo} alt="Skin Treat Logo" />
        </Link>
        <div className="mobile-header-bottom">
          <button className="btn-custom-primary">BOOK A TREATMENT</button>
        </div>
      </div>
      
      {/* Slide-in Mobile Menu (ye waisa hi rahega) */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <VscChromeClose />
        </button>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" onClick={() => setMenuOpen(false)}>Home</Nav.Link>
          
          <Nav.Link as={Link} to="/dental" onClick={() => setMenuOpen(false)}>Dental</Nav.Link>
          <Nav.Link as={Link} to="/dna-analysis" onClick={() => setMenuOpen(false)}>DNA ANALYSIS</Nav.Link>
          <NavDropdown title="Aesthetics" id="mobile-aesthetics-dropdown">
            <NavDropdown.Item as={Link} to="/aesthetics/cosmetic" onClick={() => setMenuOpen(false)}>Cosmetic Injectables</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/aesthetics/skincare" onClick={() => setMenuOpen(false)}>Skin Care</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </nav>
    </>
  );
};

export default Header;