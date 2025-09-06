import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const InvestissementDefiscalisation = () => {
  const investImages = [
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073', alt: 'Investissement 1' },
    { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070', alt: 'Investissement 2' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087', alt: 'Investissement 3' },
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070', alt: 'Investissement 4' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070', alt: 'Investissement 5' }
  ];

  return (
    <>
      <SEO 
        title="Investissement & Défiscalisation | Loi Pinel DOM - Lodges Paradise"
        description="Optimisez votre investissement immobilier à La Réunion avec la défiscalisation : Loi Pinel DOM jusqu'à 32% de réduction, LMNP, rendement jusqu'à 6%."
        keywords="défiscalisation réunion, loi pinel dom, investissement immobilier, LMNP réunion, réduction impôts"
        canonical="https://lodgesparadise.com/investissement-defiscalisation"
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
              <li><Link to="/investissement-defiscalisation" style={{ textDecoration: 'none', color: '#f59e0b', fontWeight: 'bold' }}>Investir</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        <HeroGallery 
          title="Investissement & Défiscalisation"
          subtitle="Optimisez votre investissement immobilier à La Réunion grâce aux dispositifs de défiscalisation avantageux et à notre expertise en gestion locative."
          images={investImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Dispositifs de Défiscalisation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Loi Pinel DOM</h3>
              <p className="text-gray-600 mb-6">
                Bénéficiez jusqu'à 32% de réduction d'impôts sur votre investissement locatif à La Réunion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Réduction de 23% sur 6 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Réduction de 29% sur 9 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Réduction de 32% sur 12 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Plafond d'investissement : 300 000€</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-amber-500">LMNP / LMP</h3>
              <p className="text-gray-600 mb-6">
                Location Meublée Non Professionnelle pour des revenus locatifs optimisés.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Récupération de la TVA (20%)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Amortissement du bien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Revenus non imposés pendant 10-15 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Rendement jusqu'à 6% net</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Pourquoi Investir avec Lodges Paradise ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Rentabilité Garantie</h3>
                <p>Rendement locatif entre 4% et 6% par an</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Marché Porteur</h3>
                <p>Forte demande locative à La Réunion</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Accompagnement Total</h3>
                <p>Gestion locative clé en main</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Lodges Paradise - Promoteur Immobilier Premium à La Réunion</p>
          <p className="mt-2 opacity-80">
            2 rue Jean Paul Sartre, 97419 La Possession | Tél: 0262 66 79 88
          </p>
        </div>
      </footer>
    </>
  );
};

export default InvestissementDefiscalisation;