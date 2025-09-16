import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryProjets from '../components/HeroGalleryProjets';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NosProjets = () => {
  return (
    <>
      <SEO
        title="Nos Projets de Construction | Lodges Paradise La Réunion"
        description="Découvrez nos projets de construction à La Réunion : villas premium 4 façades, maisons d'habitation 3 façades et bâtiments à appartements multiples. Matériaux nobles et finitions haut de gamme."
        keywords="projets construction réunion, villas premium, maisons habitation, appartements multiples, lodges paradise, investissement CIOP"
        canonical="https://lodgesparadise.com/nos-projets"
      />

      <Header />

      {/* Hero avec animation de scroll */}
      <HeroGalleryProjets />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Nos Projets de Construction Premium</h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            Lodges Paradise vous propose trois gammes de projets immobiliers d'exception à La Réunion.
            Chaque projet est conçu avec des matériaux nobles, une architecture moderne et des finitions
            haut de gamme, tout en étant éligible au crédit d'impôt CIOP jusqu'à 38,25%.
          </p>
        </div>
      </section>

      {/* Les 3 catégories de projets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Villas Premium 4 Façades */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Villas Premium 4 Façades</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Découvrez l'excellence architecturale avec nos villas premium 4 façades. Ces propriétés
                  d'exception offrent une liberté architecturale totale, une luminosité optimale et des
                  espaces de vie généreux. Disponibles en trois gammes adaptées à vos besoins.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Gamme Essentielle (90-120m²)</strong> : Idéale pour les jeunes familles,
                      avec 3 chambres, salon spacieux et jardin privatif.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Gamme Prestige (120-160m²)</strong> : Pour les familles établies,
                      4 chambres, suite parentale, bureau et piscine.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Gamme Exception (160m²+)</strong> : Le summum du luxe avec 5+ chambres,
                      espaces de réception, home cinéma et aménagements sur-mesure.
                    </div>
                  </div>
                </div>
                <Link
                  to="/villas-premium"
                  className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
                >
                  Découvrir nos Villas Premium
                </Link>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071"
                  alt="Villa Premium 4 façades"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Maisons d'Habitation 3 Façades */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
                  alt="Maison d'habitation 3 façades"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Maisons d'Habitation 3 Façades</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nos maisons 3 façades représentent le parfait équilibre entre confort moderne et
                  optimisation de l'espace. Conçues pour s'intégrer harmonieusement dans les quartiers
                  résidentiels, elles offrent intimité et fonctionnalité.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>T2 Compact (45-55m²)</strong> : Parfait pour un premier investissement,
                      avec séjour lumineux, chambre confortable et terrasse.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>T3 Familial (70-85m²)</strong> : Idéal pour les petites familles,
                      2 chambres, cuisine ouverte et jardin privatif.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>T4+ Spacieux (100m²+)</strong> : Pour les grandes familles,
                      3+ chambres, double séjour et aménagements extérieurs.
                    </div>
                  </div>
                </div>
                <Link
                  to="/maisons-3-facades"
                  className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
                >
                  Découvrir nos Maisons 3 Façades
                </Link>
              </div>
            </div>
          </div>

          {/* Bâtiments à Appartements Multiples */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bâtiments à Appartements Multiples</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Investissez dans nos programmes d'appartements multiples, conçus pour maximiser
                  la rentabilité locative. Architecture moderne, espaces optimisés et gestion
                  simplifiée pour un investissement serein et performant.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Studios T2 (35-45m²)</strong> : Forte demande locative,
                      idéal pour jeunes actifs et étudiants.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Appartements T3-T4 (60-85m²)</strong> : Pour familles,
                      excellente rentabilité et occupation stable.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold-500 mr-3">▸</span>
                    <div>
                      <strong>Grands T5 (95m²+)</strong> : Standing élevé,
                      pour cadres supérieurs et grandes familles.
                    </div>
                  </div>
                </div>
                <Link
                  to="/batiments-multiples"
                  className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
                >
                  Découvrir nos Programmes Multiples
                </Link>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
                  alt="Bâtiment à appartements multiples"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-900">Concrétisez Votre Projet Immobilier</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium">
            Tous nos projets sont éligibles au crédit d'impôt CIOP jusqu'à 38,25%.
            <br />
            Contactez-nous pour une étude personnalisée de votre projet.
          </p>
          <a
            href="/#contact-form"
            className="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors"
          >
            Demander un Devis Gratuit
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosProjets;