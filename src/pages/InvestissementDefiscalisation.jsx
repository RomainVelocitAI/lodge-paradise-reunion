import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryInvestissement from '../components/HeroGalleryInvestissement';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvestissementDefiscalisation = () => {
  const investImages = [
    { src: '/investissement.jpg', alt: 'Conseil en investissement' },
    { src: '/villa1.jpg', alt: 'Projet défiscalisation' },
    { src: '/villa2.jpg', alt: 'Programme CIOP' },
    { src: '/villa3.jpg', alt: 'Investissement locatif' },
    { src: '/villa4.jpg', alt: 'Patrimoine immobilier' }
  ];

  return (
    <>
      <SEO 
        title="Investissement & Défiscalisation | Loi Pinel DOM - Lodges Paradise"
        description="Optimisez votre investissement immobilier à La Réunion avec la défiscalisation : Loi Pinel DOM jusqu'à 32% de réduction, LMNP, rendement jusqu'à 6%."
        keywords="défiscalisation réunion, loi pinel dom, investissement immobilier, LMNP réunion, réduction impôts"
        canonical="https://lodgesparadise.com/investissement-defiscalisation"
      />
      
      <Header />

      {/* Hero avec animation de scroll */}
      <HeroGalleryInvestissement />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Dispositifs de Défiscalisation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gold-500">Loi Pinel DOM</h3>
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
              <h3 className="text-2xl font-bold mb-4 text-gold-500">LMNP / LMP</h3>
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

          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-white text-center">
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

      <Footer />
    </>
  );
};

export default InvestissementDefiscalisation;