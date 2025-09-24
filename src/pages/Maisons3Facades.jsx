import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryMaisons from '../components/HeroGalleryMaisons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';

const Maisons3Facades = () => {
  return (
    <>
      <SEO
        title="Maisons d'Habitation 3 Façades | Lodges Paradise La Réunion"
        description="Maisons 3 façades T2 à T4+ à La Réunion. Construction optimisée, confort moderne, jardins privatifs. Éligible CIOP avec crédit d'impôt de 35%."
        keywords="maisons 3 façades réunion, T2 T3 T4 réunion, maison habitation, construction optimisée, investissement CIOP, lodge paradise"
        canonical="https://lodgesparadise.com/maisons-3-facades"
      />

      <Header />

      {/* Hero Section avec animation */}
      <div className="pt-20">
        <HeroGalleryMaisons />
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">L'Habitat Optimisé pour La Réunion</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Nos maisons 3 façades représentent la solution idéale pour ceux qui recherchent un habitat
            confortable et fonctionnel. Conçues pour s'intégrer parfaitement dans les quartiers résidentiels
            de La Réunion, elles offrent un excellent rapport qualité-prix tout en conservant des prestations
            haut de gamme.
          </p>
        </div>
      </section>

      {/* Les 3 Formats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Trois Formats de Maisons</h2>

          {/* T2 Compact */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">T2 Compact</h3>
                  <p className="text-3xl font-bold mb-6">45 - 55 m²</p>
                  <p className="text-gray-700 mb-6">
                    Idéal pour un premier investissement ou pour un couple. Chaque espace est optimisé
                    pour offrir un maximum de confort dans une surface maîtrisée.
                  </p>
                  <h4 className="font-semibold mb-4">Configuration type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Séjour lumineux de 25-30m² avec cuisine américaine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>1 chambre spacieuse de 12-15m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salle d'eau moderne avec douche à l'italienne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Terrasse ou varangue de 10-15m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Jardin privatif de 50-100m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Place de parking privative</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Rentabilité locative excellente</p>
                    <p className="text-lg font-semibold text-primary-900">
                      À partir de 220 000 € - Éligible CIOP
                    </p>
                  </div>
                </div>
                <ImageCarousel
                  className="h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/maisons/t2-compact-plan.jpg", alt: "Plan T2 Compact" },
                    { src: "/images/projets/maisons/t2-compact-3d.jpg", alt: "Vue 3D T2 Compact" },
                    { src: "/images/projets/maisons/t2-compact-real.jpg", alt: "T2 Compact Réel" }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* T3 Familial */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <ImageCarousel
                    className="h-96 lg:h-auto"
                    images={[
                      { src: "/images/projets/maisons/t3-familial-plan.jpg", alt: "Plan T3 Familial" },
                      { src: "/images/projets/maisons/t3-familial-3d.jpg", alt: "Vue 3D T3 Familial" },
                      { src: "/images/projets/maisons/t3-familial-real.jpg", alt: "T3 Familial Réel" }
                    ]}
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">T3 Familial</h3>
                  <p className="text-3xl font-bold mb-6">70 - 85 m²</p>
                  <p className="text-gray-700 mb-6">
                    Parfait pour les petites familles ou les couples souhaitant plus d'espace.
                    Un agencement intelligent qui privilégie la convivialité et le bien-être.
                  </p>
                  <h4 className="font-semibold mb-4">Configuration type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Grand séjour de 35-40m² avec cuisine ouverte équipée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>2 chambres confortables de 11-14m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salle de bain complète avec baignoire et douche</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>WC séparé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Terrasse couverte de 15-20m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Jardin privatif de 150-250m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Garage ou carport</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Le meilleur rapport qualité/prix</p>
                    <p className="text-lg font-semibold text-primary-900">
                      À partir de 320 000 € - Éligible CIOP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* T4+ Spacieux */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">T4+ Spacieux</h3>
                  <p className="text-3xl font-bold mb-6">100 m² et plus</p>
                  <p className="text-gray-700 mb-6">
                    Conçu pour les grandes familles qui ne veulent pas faire de compromis sur l'espace.
                    Des volumes généreux et une organisation pensée pour le confort de tous.
                  </p>
                  <h4 className="font-semibold mb-4">Configuration type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Double séjour de 45-55m² avec cuisine ouverte haut de gamme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>3 à 4 chambres dont une suite parentale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>2 salles d'eau + 1 salle de bain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Bureau ou salle de jeux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Grande terrasse de 25-35m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Jardin de 300-500m² avec possibilité piscine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Double garage avec espace de rangement</span>
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">Confort familial optimal</p>
                    <p className="text-lg font-semibold text-primary-900">
                      À partir de 420 000 € - Éligible CIOP
                    </p>
                  </div>
                </div>
                <ImageCarousel
                  className="h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/maisons/t4-spacieux-plan.jpg", alt: "Plan T4+ Spacieux" },
                    { src: "/images/projets/maisons/t4-spacieux-3d.jpg", alt: "Vue 3D T4+ Spacieux" },
                    { src: "/images/projets/maisons/t4-spacieux-real.jpg", alt: "T4+ Spacieux Réel" }
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
          <h2 className="text-3xl font-bold text-center mb-12">Les Avantages des Maisons 3 Façades</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimisation Budgétaire</h3>
              <p className="text-gray-700">
                Un excellent rapport qualité-prix grâce à l'optimisation de la construction
                sans compromis sur la qualité des matériaux et finitions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intégration Harmonieuse</h3>
              <p className="text-gray-700">
                Parfaitement adaptées aux lotissements et quartiers résidentiels,
                nos maisons s'intègrent naturellement dans leur environnement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intimité Préservée</h3>
              <p className="text-gray-700">
                La mitoyenneté sur un côté permet de préserver l'intimité
                tout en conservant luminosité et aération naturelle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Jardin Privatif</h3>
              <p className="text-gray-700">
                Chaque maison dispose de son jardin privatif,
                permettant de profiter d'un espace extérieur personnel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Énergétique</h3>
              <p className="text-gray-700">
                Construction aux normes RT 2020 avec isolation renforcée
                et équipements économes en énergie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Évolutivité</h3>
              <p className="text-gray-700">
                Possibilité d'extensions et d'aménagements futurs
                selon l'évolution de vos besoins familiaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantage CIOP */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Investissement Intelligent avec le CIOP</h2>
          <p className="text-xl mb-8 text-white">
            Nos maisons 3 façades sont éligibles au Crédit d'Impôt Outre-Mer Production,
            offrant une opportunité unique d'investissement défiscalisé.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">35%</p>
              <p className="text-white">Crédit d'impôt sur votre investissement</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">6-8%</p>
              <p className="text-white">Rentabilité locative moyenne</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">5 ans</p>
              <p className="text-white">Engagement locatif minimum</p>
            </div>
          </div>
          <Link
            to="/investissement-defiscalisation"
            className="inline-block text-white px-8 py-3 rounded-lg transition-colors"
            style={{
              background: '#D4AF37'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B8941F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D4AF37';
            }}
          >
            Découvrir les avantages fiscaux
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Votre Maison 3 Façades Sur-Mesure</h2>
          <p className="text-xl text-gray-700 mb-8">
            Nos conseillers sont à votre écoute pour concevoir la maison qui correspond
            parfaitement à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact-form"
              className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              style={{
                background: '#D4AF37'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#B8941F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#D4AF37';
              }}
            >
              Étudier Mon Projet
            </a>
            <Link
              to="/nos-projets"
              className="inline-block bg-white text-primary-900 border-2 border-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Voir Tous Nos Projets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Maisons3Facades;