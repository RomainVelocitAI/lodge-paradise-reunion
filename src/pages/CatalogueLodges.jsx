import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const CatalogueLodges = () => {
  const catalogImages = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070', alt: 'Lodge 1' },
    { src: 'https://images.unsplash.com/photo-1600573472591-ee6bd3c12c3a?q=80&w=2070', alt: 'Lodge 2' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070', alt: 'Lodge 3' },
    { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070', alt: 'Lodge 4' },
    { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2071', alt: 'Lodge 5' }
  ];

  return (
    <>
      <SEO 
        title="Catalogue Lodges | Villas & Immeubles de Rapport - Lodges Paradise"
        description="Découvrez notre catalogue de lodges premium à La Réunion : villas individuelles, immeubles de rapport, programmes sur-mesure. Investissement défiscalisé."
        keywords="catalogue lodges réunion, villas individuelles, immeubles rapport, investissement défiscalisé"
        canonical="https://lodgesparadise.com/catalogue-lodges"
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
              <li><Link to="/catalogue-lodges" style={{ textDecoration: 'none', color: '#D4AF37', fontWeight: 'bold' }}>Catalogue</Link></li>
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#1f2937' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#D4AF37', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        <HeroGallery 
          title="Catalogue de Nos Lodges"
          subtitle="Une palette diversifiée de produits immobiliers conçus avec des matériaux nobles et adaptés à tous les projets d'investissement à La Réunion."
          images={catalogImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Notre Gamme Premium</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075" alt="Lodge Compact" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Compact</h3>
                <p className="text-gray-600 mb-4">40-60m², idéal pour jeunes couples ou investissement locatif</p>
                <p className="text-3xl font-bold text-gold-500">À partir de 250 000€</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053" alt="Lodge Famille" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Famille</h3>
                <p className="text-gray-600 mb-4">80-120m², 3-4 chambres, parfait pour familles</p>
                <p className="text-3xl font-bold text-gold-500">À partir de 450 000€</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071" alt="Lodge Prestige" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Prestige</h3>
                <p className="text-gray-600 mb-4">150m²+, villa d'exception avec piscine et vue mer</p>
                <p className="text-3xl font-bold text-gold-500">À partir de 750 000€</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Programmes d'Investissement</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Défiscalisation Pinel/Girardin</h4>
                <p className="text-gray-600">Optimisez votre fiscalité avec nos programmes éligibles aux dispositifs de défiscalisation</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Immeubles de Rapport</h4>
                <p className="text-gray-600">Investissez dans des programmes collectifs à fort rendement locatif</p>
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

export default CatalogueLodges;