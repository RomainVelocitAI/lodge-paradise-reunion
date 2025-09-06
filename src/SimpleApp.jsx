import React from 'react';
import './App.css';

function SimpleApp() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        background: 'white', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0, background: 'linear-gradient(135deg, #6366f1, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Lodge Paradise
            </h2>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <a href="#hero" style={{ textDecoration: 'none', color: '#374151' }}>Accueil</a>
              <a href="#services" style={{ textDecoration: 'none', color: '#374151' }}>Services</a>
              <a href="#properties" style={{ textDecoration: 'none', color: '#374151' }}>Propriétés</a>
              <a href="#contact" style={{ textDecoration: 'none', color: '#374151' }}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(16, 185, 129, 0.8)), url(https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070) center/cover',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        marginTop: '72px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
            Votre Paradis Tropical à La Réunion
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
            Découvrez l'excellence du luxe tropical dans nos lodges d'exception. 
            Une expérience unique où confort haut de gamme et nature spectaculaire 
            se rencontrent.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <a href="#properties" className="btn btn-primary" style={{ 
              background: 'white', 
              color: '#6366f1', 
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Découvrir nos lodges
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Réserver maintenant
            </a>
          </div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>47</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Lodges Premium</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>98%</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Clients Satisfaits</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>24/7</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Conciergerie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section" style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Une expérience sur mesure
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Lodges Premium', desc: '47 propriétés d\'exception avec vue panoramique' },
              { title: 'Conciergerie 24/7', desc: 'Service personnalisé disponible à tout moment' },
              { title: 'Location Flexible', desc: 'Location saisonnière ou longue durée' },
              { title: 'Gestion Complète', desc: 'Nous gérons l\'intégralité de votre bien' },
              { title: 'Services Premium', desc: 'Chef privé, spa à domicile, excursions' },
              { title: 'Check-in Express', desc: 'Arrivée et départ facilités' }
            ].map((service, i) => (
              <div key={i} className="card" style={{ 
                padding: '2rem', 
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: '#6b7280' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="section" style={{ padding: '4rem 0', background: '#f9fafb' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Lodges d'exception à découvrir
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Villa Sunset Paradise', price: '350€', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075' },
              { name: 'Lodge Tropical Garden', price: '280€', image: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?q=80&w=2070' },
              { name: 'Suite Ocean View', price: '450€', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070' },
              { name: 'Villa Mountain Retreat', price: '320€', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071' }
            ].map((property, i) => (
              <div key={i} style={{ 
                background: 'white', 
                borderRadius: '1rem', 
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <img src={property.image} alt={property.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{property.name}</h3>
                  <p style={{ fontSize: '1.5rem', color: '#6366f1', fontWeight: 'bold' }}>{property.price}<span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/nuit</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Prêt à vivre l'expérience Paradise ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3>Contactez-nous</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Nom" style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }} />
                <input type="email" placeholder="Email" style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }} />
                <textarea placeholder="Message" rows="4" style={{ padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ 
                  background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                  color: 'white',
                  padding: '0.875rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Envoyer le message
                </button>
              </form>
            </div>
            <div>
              <h3>Informations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <strong>Adresse:</strong><br />
                  77B Rue Adrien Lagourgue<br />
                  Saint-Gilles-les-Bains, La Réunion
                </div>
                <div>
                  <strong>Téléphone:</strong><br />
                  <a href="tel:+262692470141" style={{ color: '#6366f1' }}>+262 6 92 47 01 41</a>
                </div>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:contact@lodgeparadise.re" style={{ color: '#6366f1' }}>contact@lodgeparadise.re</a>
                </div>
                <div>
                  <strong>Horaires:</strong><br />
                  Lun - Dim : 8h - 20h<br />
                  Service conciergerie 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#111827', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ marginBottom: '1rem' }}>Lodge Paradise</h3>
          <p style={{ marginBottom: '2rem', opacity: 0.7 }}>
            Votre partenaire de confiance pour des séjours d'exception à La Réunion
          </p>
          <p style={{ opacity: 0.5 }}>
            © 2025 Lodge Paradise. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SimpleApp;