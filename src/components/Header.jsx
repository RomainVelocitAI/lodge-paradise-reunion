import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const location = useLocation();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
                Nos Projets
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
                Zones
              </Link>
              <Link 
                to="/investissement-defiscalisation" 
                style={{ 
                  textDecoration: 'none', 
                  color: isActive('/investissement-defiscalisation') ? '#D4AF37' : '#374151', 
                  fontWeight: isActive('/investissement-defiscalisation') ? '600' : '500'
                }}
              >
                Investir
              </Link>
              <a
                href="#contact"
                className="bg-gold-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
                style={{ textDecoration: 'none' }}
              >
                Contact
              </a>
            </nav>
          )}
          
          {isMobile && (
            <a
              href="#contact"
              className="bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold-600 transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              Contact
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;