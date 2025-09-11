import React from 'react';
import * as Icons from 'lucide-react';
const { Facebook, Instagram, Mail, Phone, MapPin, Clock, ChevronRight, ExternalLink } = Icons;
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", href: "#hero" },
        { label: "Nos Projets", href: "/nos-projets" },
        { label: "Catalogue Lodges", href: "/catalogue-lodges" },
        { label: "Investissement", href: "/investissement-defiscalisation" },
        { label: "Galerie", href: "/galerie" }
      ]
    },
    {
      title: "Services Premium",
      links: [
        { label: "Construction sur-mesure", href: "#" },
        { label: "Gestion locative complète", href: "#" },
        { label: "Conciergerie de luxe", href: "#" },
        { label: "Optimisation fiscale", href: "#" },
        { label: "Accompagnement VIP", href: "#" }
      ]
    },
    {
      title: "Informations Légales",
      links: [
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "CGV", href: "/cgv" },
        { label: "Politique de confidentialité", href: "/politique-confidentialite" },
        { label: "Protection des données", href: "/rgpd" }
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <Facebook size={24} />, 
      href: "https://www.facebook.com/profile.php?id=61569291653551", 
      label: "Facebook",
      color: "#1877F2"
    },
    { 
      icon: <Instagram size={24} />, 
      href: "https://www.instagram.com/lodgeparadise.re", 
      label: "Instagram",
      color: "#E4405F"
    }
  ];

  return (
    <footer className="footer" style={{ 
      background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)',
      borderTop: '1px solid rgba(212, 175, 55, 0.3)',
      position: 'relative'
    }}>
      {/* Decorative gold line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
      }} />
      
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px 30px' }}>
        <div className="footer-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Section */}
          <div className="footer-brand" style={{ gridColumn: 'span 1' }}>
            <div className="footer-logo" style={{ marginBottom: '20px' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #D4AF37, #F5E6A3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '5px'
              }}>Lodge Paradise</h3>
              <span style={{ 
                color: '#D4AF37', 
                fontSize: '0.9rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>Île de La Réunion</span>
            </div>
            <p className="footer-description" style={{ 
              color: '#94a3b8',
              lineHeight: '1.8',
              marginBottom: '25px',
              fontSize: '0.95rem'
            }}>
              Constructeur de lodges d'exception et expert en investissement immobilier défiscalisé.
              40 ans d'expertise au service de votre patrimoine.
            </p>
            <div className="footer-social" style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '50%',
                    color: '#D4AF37',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                    e.currentTarget.style.color = '#D4AF37';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-column">
              <h4 style={{ 
                color: '#D4AF37',
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>{column.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {column.links.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: '12px' }}>
                    <a 
                      href={link.href}
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#D4AF37';
                        e.currentTarget.style.paddingLeft = '5px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#94a3b8';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      <ChevronRight size={14} style={{ opacity: 0.5 }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="footer-contact">
            <h4 style={{ 
              color: '#D4AF37',
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Contact & Horaires</h4>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '12px',
              marginBottom: '15px',
              color: '#94a3b8'
            }}>
              <MapPin size={18} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                77B Rue Adrien Lagourgue<br />
                Saint-Gilles-les-Bains<br />
                97434 La Réunion
              </span>
            </div>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '15px'
            }}>
              <Phone size={18} style={{ color: '#D4AF37', flexShrink: 0 }} />
              <a href="tel:+262692470141" style={{ 
                color: '#94a3b8', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                +262 6 92 47 01 41
              </a>
            </div>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '20px'
            }}>
              <Mail size={18} style={{ color: '#D4AF37', flexShrink: 0 }} />
              <a href="mailto:contact@lodgeparadise.re" style={{ 
                color: '#94a3b8', 
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                contact@lodgeparadise.re
              </a>
            </div>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '12px',
              paddingTop: '15px',
              borderTop: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <Clock size={18} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
                <strong style={{ color: '#D4AF37' }}>Bureau de Vente</strong><br />
                Lundi - Samedi : 9h - 18h<br />
                <span style={{ color: '#D4AF37', fontSize: '0.85rem' }}>Sur rendez-vous</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          paddingTop: '30px',
          marginTop: '30px'
        }}>
          <div className="footer-bottom-content" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              © {currentYear} Lodge Paradise. Tous droits réservés.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#64748b',
              fontSize: '0.9rem'
            }}>
              <span>Site réalisé par</span>
              <a 
                href="https://digiqo.re" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#D4AF37',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F5E6A3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#D4AF37';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                DIGIQO.RE
                <ExternalLink size={14} />
              </a>
            </div>
            
            <p style={{ 
              color: '#D4AF37',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              letterSpacing: '0.5px'
            }}>
              "Lady la fé zot pub" - Agence N°1 de l'Océan Indien
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;