import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CatalogueLodges = () => {
  const catalogImages = [
    { src: '/catalogue-lodges.jpg', alt: 'Showroom de lodges premium' },
    { src: '/villa1.jpg', alt: 'Lodge Compact moderne' },
    { src: '/villa2.jpg', alt: 'Lodge Famille spacieux' },
    { src: '/villa3.jpg', alt: 'Lodge Prestige avec piscine' },
    { src: '/villa4.jpg', alt: 'Villa d\'exception' }
  ];

  return (
    <>
      <SEO 
        title="Catalogue Lodges | Villas & Immeubles de Rapport - Lodges Paradise"
        description="Découvrez notre catalogue de lodges premium à La Réunion : villas individuelles, immeubles de rapport, programmes sur-mesure. Investissement défiscalisé."
        keywords="catalogue lodges réunion, villas individuelles, immeubles rapport, investissement défiscalisé"
        canonical="https://lodgesparadise.com/catalogue-lodges"
      />
      
      <Header />

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
              <img src="/villa1.jpg" alt="Lodge Compact" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Compact</h3>
                <p className="text-gray-600 mb-4">40-60m², idéal pour jeunes couples ou investissement locatif</p>
                <p className="text-3xl font-bold text-gold-500">À partir de 250 000€</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/villa2.jpg" alt="Lodge Famille" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Lodge Famille</h3>
                <p className="text-gray-600 mb-4">80-120m², 3-4 chambres, parfait pour familles</p>
                <p className="text-3xl font-bold text-gold-500">À partir de 450 000€</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/villa3.jpg" alt="Lodge Prestige" className="w-full h-64 object-cover" />
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

      <Footer />
    </>
  );
};

export default CatalogueLodges;