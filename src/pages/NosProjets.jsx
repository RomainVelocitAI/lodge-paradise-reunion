import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const NosProjets = () => {
  const projectImages = [
    { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071', alt: 'Projet 1' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070', alt: 'Projet 2' },
    { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070', alt: 'Projet 3' },
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075', alt: 'Projet 4' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053', alt: 'Projet 5' }
  ];

  return (
    <>
      <SEO 
        title="Nos Projets Immobiliers | Lodges Paradise La Réunion"
        description="Découvrez nos projets immobiliers en cours et réalisés à La Réunion. Villas premium, immeubles de rapport, programmes sur-mesure avec matériaux nobles."
        keywords="projets immobiliers réunion, villas premium, immeubles rapport, lodges paradise projets"
        canonical="https://lodgesparadise.com/nos-projets"
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
              <li><Link to="/nos-projets" style={{ textDecoration: 'none', color: '#D4AF37', fontWeight: 'bold' }}>Nos Projets</Link></li>
              <li><Link to="/catalogue-lodges" style={{ textDecoration: 'none', color: '#1f2937' }}>Catalogue</Link></li>
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#1f2937' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#D4AF37', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        <HeroGallery 
          title="Nos Projets Immobiliers"
          subtitle="Chaque projet Lodges Paradise est une œuvre unique, conçue avec passion et expertise. Découvrez nos réalisations qui allient matériaux nobles, architecture tropicale et confort moderne."
          images={projectImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Réalisations Premium</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070" alt="Villa Océan" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Villa Océan</h3>
                <p className="text-gray-600 mb-4">Vue panoramique sur l'océan, 4 chambres, piscine à débordement</p>
                <p className="text-gold-500 font-semibold">Saint-Gilles les Bains</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071" alt="Lodge Tropical" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Tropical</h3>
                <p className="text-gray-600 mb-4">Architecture bioclimatique, 3 chambres, jardin tropical</p>
                <p className="text-gold-500 font-semibold">La Possession</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053" alt="Résidence Émeraude" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Résidence Émeraude</h3>
                <p className="text-gray-600 mb-4">Programme de 12 lodges, espaces communs, sécurisé</p>
                <p className="text-gold-500 font-semibold">Saint-Paul</p>
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

export default NosProjets;