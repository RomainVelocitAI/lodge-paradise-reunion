import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryVillas from '../components/HeroGalleryVillas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';

const VillasPremium = () => {
  return (
    <>
      <SEO
        title="Villas Premium 4 Façades | Construction Haut de Gamme La Réunion"
        description="Découvrez nos villas premium 4 façades à La Réunion. Constructions haut de gamme de 90 à 200m², matériaux nobles, vue panoramique. Investissement CIOP jusqu'à 38,25% de crédit d'impôt."
        keywords="villas premium réunion, construction 4 façades, villa haut de gamme, investissement CIOP, lodge paradise, villa luxe réunion"
        canonical="https://lodgesparadise.com/villas-premium"
      />

      <Header />

      {/* Hero Section avec animation */}
      <div className="pt-20">
        <HeroGalleryVillas />
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Le Summum du Luxe Résidentiel</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Nos villas premium 4 façades incarnent l'excellence de la construction haut de gamme à La Réunion.
            Chaque villa est une œuvre architecturale unique, conçue pour offrir un cadre de vie exceptionnel
            alliant confort, élégance et durabilité.
          </p>
        </div>
      </section>

      {/* Les 3 Gammes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Trois Gammes de Villas Premium</h2>

          {/* Gamme Essentielle */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Gamme Essentielle</h3>
                  <p className="text-3xl font-bold mb-6">90 - 120 m²</p>
                  <p className="text-gray-700 mb-6">
                    Parfaite pour les jeunes familles ou les couples recherchant leur première villa premium.
                    Un équilibre idéal entre espace, confort et investissement maîtrisé.
                  </p>
                  <h4 className="font-semibold mb-4">Caractéristiques principales :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>3 chambres spacieuses dont une suite parentale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salon/séjour lumineux de 40-50m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Cuisine équipée haut de gamme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Jardin privatif de 200-400m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Terrasse couverte et varangue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Garage pour 2 véhicules</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-primary-900">
                    À partir de 450 000 € - Éligible CIOP
                  </p>
                </div>
                <ImageCarousel
                  className="relative h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/villas/essentielle-plan.jpg", alt: "Plan Villa Essentielle" },
                    { src: "/images/projets/villas/essentielle-3d.jpg", alt: "Vue 3D Villa Essentielle" },
                    { src: "/images/projets/villas/essentielle-real.jpg", alt: "Villa Essentielle Réelle" }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Gamme Prestige */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <ImageCarousel
                  className="relative h-96 lg:h-auto order-2 lg:order-1"
                  images={[
                    { src: "/images/projets/villas/prestige-plan.jpg", alt: "Plan Villa Prestige" },
                    { src: "/images/projets/villas/prestige-3d.jpg", alt: "Vue 3D Villa Prestige" },
                    { src: "/images/projets/villas/prestige-real.jpg", alt: "Vue réelle Villa Prestige" }
                  ]}
                />
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Gamme Prestige</h3>
                  <p className="text-3xl font-bold mb-6">120 - 160 m²</p>
                  <p className="text-gray-700 mb-6">
                    Conçue pour les familles établies qui recherchent espace et raffinement.
                    Une architecture sophistiquée avec des prestations haut de gamme.
                  </p>
                  <h4 className="font-semibold mb-4">Caractéristiques principales :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>4 chambres dont suite parentale avec dressing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Double séjour de 60-70m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Bureau ou salle de jeux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Piscine privée avec pool house</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Jardin paysager de 500-800m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Double garage et espaces de rangement</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-primary-900">
                    À partir de 650 000 € - Éligible CIOP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gamme Exception */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Gamme Exception</h3>
                  <p className="text-3xl font-bold mb-6">160 m² et plus</p>
                  <p className="text-gray-700 mb-6">
                    Le summum du luxe résidentiel pour ceux qui ne font aucun compromis.
                    Des villas d'exception entièrement personnalisables selon vos désirs.
                  </p>
                  <h4 className="font-semibold mb-4">Caractéristiques principales :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>5 chambres et plus avec suites indépendantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Espaces de réception de 80m² et plus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Home cinéma et salle de sport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Piscine à débordement avec spa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Cave à vin climatisée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Domotique complète et finitions sur-mesure</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-primary-900">
                    À partir de 850 000 € - Éligible CIOP
                  </p>
                </div>
                <ImageCarousel
                  className="relative h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/villas/exception-plan.jpg", alt: "Plan Villa Exception" },
                    { src: "/images/projets/villas/exception-3d.jpg", alt: "Vue 3D Villa Exception" },
                    { src: "/images/projets/villas/exception-real.jpg", alt: "Villa Exception Réelle" }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages & Caractéristiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir une Villa 4 Façades ?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Architecture Libre</h3>
              <p className="text-gray-700">
                Conception architecturale sans contrainte, permettant une personnalisation totale
                de votre espace de vie selon vos goûts et besoins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Luminosité Optimale</h3>
              <p className="text-gray-700">
                Les 4 façades permettent une exposition maximale à la lumière naturelle,
                créant des espaces lumineux et agréables toute la journée.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Jardin Périphérique</h3>
              <p className="text-gray-700">
                Profitez d'un jardin tout autour de votre villa, offrant intimité,
                espaces verts et multiples possibilités d'aménagement extérieur.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Matériaux Nobles</h3>
              <p className="text-gray-700">
                Construction avec des matériaux haut de gamme : pierre naturelle,
                bois précieux, marbre, garantissant durabilité et élégance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ventilation Naturelle</h3>
              <p className="text-gray-700">
                La configuration 4 façades favorise une circulation d'air optimale,
                essentielle au climat tropical de La Réunion.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Valeur Patrimoniale</h3>
              <p className="text-gray-700">
                Les villas 4 façades constituent un investissement patrimonial solide
                avec une excellente valorisation dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantage CIOP */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Investissement Défiscalisé CIOP</h2>
          <p className="text-xl mb-8 text-white font-medium">
            Toutes nos villas premium sont éligibles au Crédit d'Impôt Outre-Mer Production (CIOP),
            vous permettant de bénéficier d'un crédit d'impôt jusqu'à 38,25% de votre investissement.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">38,25%</p>
              <p className="text-white">Crédit d'impôt maximum</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">5 ans</p>
              <p className="text-white">Durée d'engagement locatif</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">100%</p>
              <p className="text-white">Accompagnement administratif</p>
            </div>
          </div>
          <Link
            to="/investissement-defiscalisation"
            className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
          >
            En savoir plus sur le CIOP
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Concrétisez Votre Projet de Villa Premium</h2>
          <p className="text-xl text-gray-700 mb-8">
            Nos experts sont à votre disposition pour étudier votre projet et vous proposer
            une villa parfaitement adaptée à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact-form"
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors"
            >
              Demander un Devis Personnalisé
            </a>
            <Link
              to="/nos-projets"
              className="inline-block bg-white text-primary-900 border-2 border-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Retour aux Projets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VillasPremium;