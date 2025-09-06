import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiPhone, FiMail } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Propriétés', href: '#properties' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2 className="logo-text">Lodge Paradise</h2>
            <span className="logo-subtitle">La Réunion</span>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-cta">
            <a href="tel:+262692470141" className="header-phone">
              <FiPhone size={18} />
              <span>06 92 47 01 41</span>
            </a>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+262692470141" className="mobile-nav-link mobile-phone">
              <FiPhone size={18} />
              <span>06 92 47 01 41</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;