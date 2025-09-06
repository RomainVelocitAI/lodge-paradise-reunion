import React from 'react';
import * as Icons from 'lucide-react';
const { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } = Icons;
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Propriétés", href: "#properties" },
        { label: "À propos", href: "#about" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Location saisonnière", href: "#" },
        { label: "Location longue durée", href: "#" },
        { label: "Conciergerie", href: "#" },
        { label: "Gestion locative", href: "#" }
      ]
    },
    {
      title: "Informations",
      links: [
        { label: "Conditions générales", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
        { label: "Mentions légales", href: "#" },
        { label: "FAQ", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61569291653551", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <h3>Lodge Paradise</h3>
              <span>La Réunion</span>
            </div>
            <p className="footer-description">
              Votre partenaire de confiance pour des séjours d'exception 
              à La Réunion. Luxe, confort et services premium depuis 2015.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((column, index) => (
              <div key={index} className="footer-column">
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <MapPin size={16} />
              <span>77B Rue Adrien Lagourgue<br />Saint-Gilles-les-Bains</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <a href="tel:+262692470141">+262 6 92 47 01 41</a>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <a href="mailto:contact@lodgeparadise.re">contact@lodgeparadise.re</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} Lodge Paradise. Tous droits réservés.</p>
            <p className="footer-credit">
              Créé avec <Heart size={14} className="heart" /> à La Réunion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;