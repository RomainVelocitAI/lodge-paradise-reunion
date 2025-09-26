import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Icons from 'lucide-react';
const { Menu, X } = Icons;

const Header = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Fermer le menu si on passe en desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      background: 'white', 
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)', 
      zIndex: 1000,
      padding: isMobile ? '0.75rem 0' : '1rem 0'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
              <img 
                src="/logo.jpg" 
                alt="Lodges Paradise" 
                style={{ 
                  height: isMobile ? '40px' : '50px', 
                  width: isMobile ? '40px' : '50px', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }} 
              />
              <div>
                <h2 style={{ 
                  margin: 0, 
                  color: '#0a0f1c',
                  fontSize: isMobile ? '1.25rem' : '1.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.05em'
                }}>
                  LODGES PARADISE
                </h2>
                {!isMobile && <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Votre Paradis Tropical à La Réunion</span>}
              </div>
            </div>
          </Link>
          
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link
                to="/nos-projets"
                style={{
                  textDecoration: 'none',
                  color: isActive('/nos-projets') || isActive('/villas-premium') || isActive('/maisons-3-facades') || isActive('/batiments-multiples') ? '#D4AF37' : '#374151',
                  fontWeight: isActive('/nos-projets') || isActive('/villas-premium') || isActive('/maisons-3-facades') || isActive('/batiments-multiples') ? '600' : '500'
                }}
              >
                Catalogue
              </Link>
              <Link
                to="/materiaux-nobles"
                style={{
                  textDecoration: 'none',
                  color: isActive('/materiaux-nobles') ? '#D4AF37' : '#374151',
                  fontWeight: isActive('/materiaux-nobles') ? '600' : '500'
                }}
              >
                Matériaux
              </Link>
              <Link
                to="/zones-implantation"
                style={{
                  textDecoration: 'none',
                  color: isActive('/zones-implantation') ? '#D4AF37' : '#374151',
                  fontWeight: isActive('/zones-implantation') ? '600' : '500'
                }}
              >
                Implantations
              </Link>
              <Link 
                to="/investissement-defiscalisation" 
                style={{ 
                  textDecoration: 'none', 
                  color: isActive('/investissement-defiscalisation') ? '#D4AF37' : '#374151', 
                  fontWeight: isActive('/investissement-defiscalisation') ? '600' : '500'
                }}
              >
                Fiscalité
              </Link>
              <a
                href="#contact"
                className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  textDecoration: 'none',
                  background: '#D4AF37'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#B8941F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#D4AF37';
                }}
              >
                Contact
              </a>
            </nav>
          )}
          
          {isMobile && (
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href="#contact"
                className="text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                style={{
                  textDecoration: 'none',
                  background: '#D4AF37'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#B8941F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#D4AF37';
                }}
              >
                Contact
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#374151',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: isMobile ? '64px' : '82px', // Hauteur du header mobile
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 999,
          overflow: 'auto'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1rem'
          }}>
            <Link
              to="/nos-projets"
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive('/nos-projets') || isActive('/villas-premium') || isActive('/maisons-3-facades') || isActive('/batiments-multiples') ? '#D4AF37' : '#374151',
                fontWeight: isActive('/nos-projets') || isActive('/villas-premium') || isActive('/maisons-3-facades') || isActive('/batiments-multiples') ? '600' : '500',
                fontSize: '1.125rem',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
            >
              Catalogue
            </Link>
            <Link
              to="/materiaux-nobles"
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive('/materiaux-nobles') ? '#D4AF37' : '#374151',
                fontWeight: isActive('/materiaux-nobles') ? '600' : '500',
                fontSize: '1.125rem',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
            >
              Matériaux
            </Link>
            <Link
              to="/zones-implantation"
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive('/zones-implantation') ? '#D4AF37' : '#374151',
                fontWeight: isActive('/zones-implantation') ? '600' : '500',
                fontSize: '1.125rem',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
            >
              Implantations
            </Link>
            <Link
              to="/investissement-defiscalisation"
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: isActive('/investissement-defiscalisation') ? '#D4AF37' : '#374151',
                fontWeight: isActive('/investissement-defiscalisation') ? '600' : '500',
                fontSize: '1.125rem',
                padding: '1rem',
                borderBottom: '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
            >
              Fiscalité
            </Link>

            {/* Sous-menu Catalogue */}
            <div style={{
              marginTop: '2rem',
              paddingTop: '1rem',
              borderTop: '2px solid #e5e7eb'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0 1rem',
                marginBottom: '1rem'
              }}>
                Nos Projets
              </p>
              <Link
                to="/villas-premium"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive('/villas-premium') ? '#D4AF37' : '#6b7280',
                  fontWeight: isActive('/villas-premium') ? '600' : '400',
                  fontSize: '1rem',
                  padding: '0.75rem 1rem 0.75rem 2rem',
                  display: 'block',
                  transition: 'all 0.2s ease'
                }}
              >
                → Villas Premium
              </Link>
              <Link
                to="/maisons-3-facades"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive('/maisons-3-facades') ? '#D4AF37' : '#6b7280',
                  fontWeight: isActive('/maisons-3-facades') ? '600' : '400',
                  fontSize: '1rem',
                  padding: '0.75rem 1rem 0.75rem 2rem',
                  display: 'block',
                  transition: 'all 0.2s ease'
                }}
              >
                → Maisons 3 Façades
              </Link>
              <Link
                to="/batiments-multiples"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive('/batiments-multiples') ? '#D4AF37' : '#6b7280',
                  fontWeight: isActive('/batiments-multiples') ? '600' : '400',
                  fontSize: '1rem',
                  padding: '0.75rem 1rem 0.75rem 2rem',
                  display: 'block',
                  transition: 'all 0.2s ease'
                }}
              >
                → Bâtiments Multiples
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Overlay pour fermer le menu en cliquant dehors */}
      {isMobile && isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}
    </header>
  );
};

export default Header;