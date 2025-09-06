import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import MaterialsSlideshow from '../components/MaterialsSlideshow';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Lodges Paradise - Promoteur Immobilier Premium La Réunion | Matériaux Nobles"
        description="Lodges Paradise, promoteur immobilier spécialisé dans les matériaux nobles à La Réunion. Bois exotiques, pierre de lave locale. Investissement défiscalisé Ouest et Sud. Maîtrise d'œuvre intégrée."
        keywords="lodges paradise, promoteur immobilier réunion, matériaux nobles, bois exotiques, pierre de lave, défiscalisation réunion, immobilier ouest réunion, immobilier sud réunion"
        canonical="https://lodgesparadise.com/"
      />
      
      {/* Header avec navigation */}
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
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <LazyImage 
                src="/lodge-logo.png" 
                alt="Lodges Paradise Logo" 
                style={{ height: '50px' }}
              />
              <div>
                <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1f2937' }}>LODGES PARADISE</h2>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Promotion Immobilière à La Réunion</p>
              </div>
            </Link>
            
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
              <li><Link to="/nos-projets" style={{ textDecoration: 'none', color: '#1f2937' }}>Nos Projets</Link></li>
              <li><Link to="/catalogue-lodges" style={{ textDecoration: 'none', color: '#1f2937' }}>Catalogue</Link></li>
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#1f2937' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/investissement-defiscalisation" style={{ textDecoration: 'none', color: '#1f2937' }}>Investir</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: '#1f2937', background: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        marginTop: '80px',
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
        color: 'white', 
        padding: '6rem 2rem',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              background: '#f59e0b', 
              padding: '0.5rem 1rem', 
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              Matériaux Nobles & Construction Premium
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              marginTop: '2rem',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Votre Paradis Tropical à La Réunion avec Lodges Paradise
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              <strong>Lodges Paradise</strong> révolutionne la promotion immobilière à La Réunion. 
              Spécialisés dans l'utilisation exclusive de matériaux nobles - bois exotiques premium 
              et pierre de lave locale - nous créons des projets d'exception dans les zones 
              stratégiques de l'Ouest et du Sud de l'île.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/catalogue-lodges" style={{ 
                padding: '1rem 2rem', 
                background: '#f59e0b',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '600',
                fontSize: '1.125rem'
              }}>
                Découvrir nos Lodges
              </Link>
              <Link to="/contact" style={{ 
                padding: '1rem 2rem', 
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                border: '2px solid white',
                fontWeight: '600',
                fontSize: '1.125rem'
              }}>
                Prendre RDV
              </Link>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              marginTop: '4rem'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>3</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Types de produits</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>Ouest & Sud</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Zones stratégiques</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>100%</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Maîtrise interne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Présentation détaillée */}
      <section style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: '#f59e0b', fontWeight: '600', fontSize: '0.875rem' }}>L'ENTREPRISE</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '2rem' }}>
              Lodges Paradise : L'Excellence Immobilière
            </h2>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'left' }}>
              <strong>Lodges Paradise</strong> est le premier promoteur immobilier de La Réunion 
              à faire le choix exclusif des matériaux nobles et exotiques. Notre approche unique 
              combine l'utilisation de bois exotiques soigneusement sélectionnés pour leur durabilité 
              et leur esthétique, avec la pierre de lave locale, matériau emblématique de notre île.
            </p>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'left' }}>
              Notre palette de produits diversifiée répond à tous les besoins d'investissement : 
              des villas individuelles aux immeubles de rapport, en passant par des programmes 
              sur-mesure. Chaque projet est conçu avec une attention méticuleuse aux détails, 
              intégrant harmonieusement les constructions dans l'environnement tropical unique 
              de La Réunion.
            </p>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'left' }}>
              Grâce à notre maîtrise d'œuvre intégrée, nous contrôlons chaque étape du processus 
              de construction, garantissant ainsi une qualité irréprochable et le respect des délais. 
              Cette approche nous permet d'offrir à nos clients une tranquillité d'esprit totale 
              et des projets qui dépassent leurs attentes.
            </p>
          </div>
        </div>
      </section>

      {/* Section Matériaux avec Slideshow */}
      <MaterialsSlideshow />

      {/* Section CTA */}
      <section style={{ 
        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)', 
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1.5rem' }}>
            Prêt à Investir dans l'Excellence ?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'white', marginBottom: '2rem', opacity: 0.95 }}>
            Découvrez comment Lodges Paradise peut transformer votre projet d'investissement 
            en une réalité exceptionnelle.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            background: 'white',
            color: '#f59e0b',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}>
            Contactez-nous Maintenant
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1f2937', color: 'white', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            <div>
              <h3>Lodges Paradise</h3>
              <p>Promoteur immobilier premium à La Réunion, spécialisé dans les matériaux nobles.</p>
            </div>
            <div>
              <h3>Liens Rapides</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/nos-projets" style={{ color: 'white', textDecoration: 'none' }}>Nos Projets</Link></li>
                <li><Link to="/catalogue-lodges" style={{ color: 'white', textDecoration: 'none' }}>Catalogue</Link></li>
                <li><Link to="/materiaux-nobles" style={{ color: 'white', textDecoration: 'none' }}>Matériaux</Link></li>
                <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <p>2 rue Jean Paul Sartre<br />97419 La Possession<br />La Réunion</p>
              <p>Tél: 0262 66 79 88</p>
              <p>Email: info@lodgesparadise.com</p>
            </div>
          </div>
          <hr style={{ margin: '2rem 0', opacity: 0.2 }} />
          <p style={{ textAlign: 'center', opacity: 0.7 }}>
            © 2025 Lodges Paradise - Tous droits réservés
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;