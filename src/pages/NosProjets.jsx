import React from 'react';
import SEO from '../components/SEO';
import HeroGalleryProjets from '../components/HeroGalleryProjets';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NosProjets = () => {
  const projectImages = [
    { src: '/projet-construction.jpg', alt: 'Construction de lodges premium' },
    { src: '/villa1.jpg', alt: 'Villa avec vue océan' },
    { src: '/villa2.jpg', alt: 'Lodge tropical moderne' },
    { src: '/villa3.jpg', alt: 'Résidence de standing' },
    { src: '/villa4.jpg', alt: 'Projet haut de gamme' }
  ];

  return (
    <>
      <SEO 
        title="Nos Projets Immobiliers | Lodges Paradise La Réunion"
        description="Découvrez nos projets immobiliers en cours et réalisés à La Réunion. Villas premium, immeubles de rapport, programmes sur-mesure avec matériaux nobles."
        keywords="projets immobiliers réunion, villas premium, immeubles rapport, lodges paradise projets"
        canonical="https://lodgesparadise.com/nos-projets"
      />
      
      <Header />

      {/* Hero avec animation de scroll */}
      <HeroGalleryProjets />

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

      <Footer />
    </>
  );
};

export default NosProjets;