import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact | Lodges Paradise La Réunion - Bureau de Vente La Possession"
        description="Contactez Lodges Paradise pour votre projet immobilier à La Réunion. Bureau de vente à La Possession. Tél: 0262 66 79 88. Visites sur rendez-vous."
        keywords="contact lodges paradise, bureau vente la possession, contact promoteur immobilier réunion"
        canonical="https://lodgesparadise.com/contact"
      />
      
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        background: 'white', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#1f2937', fontSize: '1.5rem', fontWeight: 'bold' }}>
              LODGES PARADISE
            </Link>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
              <li><Link to="/nos-projets" style={{ textDecoration: 'none', color: '#1f2937' }}>Nos Projets</Link></li>
              <li><Link to="/catalogue-lodges" style={{ textDecoration: 'none', color: '#1f2937' }}>Catalogue</Link></li>
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#1f2937' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section style={{ marginTop: '80px', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Contactez-nous</h1>
          <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
            Notre équipe est à votre disposition pour concrétiser votre projet immobilier 
            à La Réunion. Prenez rendez-vous pour une consultation personnalisée.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#1f2937' }}>Bureau de Vente</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#f59e0b' }}>Adresse :</strong>
                <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                  2 rue Jean Paul Sartre<br />
                  97419 La Possession<br />
                  La Réunion
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#f59e0b' }}>Téléphone :</strong>
                <p style={{ marginTop: '0.5rem' }}>
                  <a href="tel:+262262667988" style={{ color: '#1f2937', textDecoration: 'none' }}>0262 66 79 88</a>
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#f59e0b' }}>Email :</strong>
                <p style={{ marginTop: '0.5rem' }}>
                  <a href="mailto:info@lodgesparadise.com" style={{ color: '#1f2937', textDecoration: 'none' }}>info@lodgesparadise.com</a>
                </p>
              </div>
              <div>
                <strong style={{ color: '#f59e0b' }}>Horaires :</strong>
                <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                  Lundi - Vendredi : 9h - 18h<br />
                  Samedi : 9h - 13h<br />
                  <em>Sur rendez-vous</em>
                </p>
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: '#1f2937' }}>Demande d'Information</h2>
              <form>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input 
                    type="text" 
                    placeholder="Nom et Prénom *"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input 
                    type="email" 
                    placeholder="Email *"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input 
                    type="tel" 
                    placeholder="Téléphone *"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea 
                    placeholder="Votre projet"
                    rows="4"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1f2937', color: 'white', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p>© 2025 Lodges Paradise - Promoteur Immobilier Premium à La Réunion</p>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>
            2 rue Jean Paul Sartre, 97419 La Possession | Tél: 0262 66 79 88
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;