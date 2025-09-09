import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const Galerie = () => {
  const galerieImages = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070', alt: 'Galerie 1' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053', alt: 'Galerie 2' },
    { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071', alt: 'Galerie 3' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070', alt: 'Galerie 4' },
    { src: 'https://images.unsplash.com/photo-1600573472591-ee6bd3c12c3a?q=80&w=2070', alt: 'Galerie 5' }
  ];

  const realisations = [
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075', title: 'Villa Horizon', location: 'Saint-Gilles' },
    { src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2071', title: 'Lodge Tropical', location: 'La Possession' },
    { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070', title: 'Résidence Palm', location: 'Saint-Paul' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070', title: 'Villa Lagon', location: 'Saint-Leu' },
    { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070', title: 'Lodge Émeraude', location: 'L\'Étang-Salé' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070', title: 'Villa Paradise', location: 'La Saline' }
  ];

  return (
    <>
      <SEO 
        title="Galerie Photos | Réalisations Lodges Paradise La Réunion"
        description="Découvrez en images nos réalisations de lodges premium à La Réunion. Photos de villas, intérieurs, piscines et jardins tropicaux."
        keywords="galerie lodges paradise, photos villas réunion, réalisations immobilières"
        canonical="https://lodgesparadise.com/galerie"
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
              <li><Link to="/galerie" style={{ textDecoration: 'none', color: '#D4AF37', fontWeight: 'bold' }}>Galerie</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#D4AF37', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        <HeroGallery 
          title="Galerie de Nos Réalisations"
          subtitle="Découvrez en images l'excellence de nos réalisations et l'harmonie parfaite entre matériaux nobles et architecture tropicale."
          images={galerieImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio de Nos Projets</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((real, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={real.src} 
                  alt={real.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="text-white p-6">
                    <h3 className="text-2xl font-bold mb-1">{real.title}</h3>
                    <p className="text-gold-300">{real.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-8">Intérieurs & Aménagements</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="aspect-square bg-gradient-to-br from-gold-200 to-gold-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-red-200 to-red-400 rounded-lg"></div>
              <div className="aspect-square bg-gradient-to-br from-gold-200 to-gold-400 rounded-lg"></div>
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

export default Galerie;