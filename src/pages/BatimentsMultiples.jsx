import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryBatiments from '../components/HeroGalleryBatiments';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';

const BatimentsMultiples = () => {
  return (
    <>
      <SEO
        title="Bâtiments à Appartements Multiples | Investissement Locatif La Réunion"
        description="Investissez dans nos programmes d'appartements T2 à T5 à La Réunion. Rentabilité locative optimisée, gestion simplifiée. Défiscalisation CIOP jusqu'à 35%."
        keywords="appartements multiples réunion, investissement locatif, T2 T3 T4 T5, programme immobilier, CIOP réunion, rentabilité locative"
        canonical="https://lodgesparadise.com/batiments-multiples"
      />

      <Header />

      {/* Hero Section avec animation */}
      <div className="pt-20">
        <HeroGalleryBatiments />
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">L'Investissement Locatif Intelligent</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Nos programmes de bâtiments à appartements multiples sont conçus pour maximiser votre
            rentabilité locative. Architecture moderne, espaces optimisés et gestion simplifiée
            font de ces investissements une opportunité unique sur le marché réunionnais.
          </p>
        </div>
      </section>

      {/* Les 4 Types d'Appartements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Gamme d'Appartements</h2>

          {/* T2 Studio */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Studios T2</h3>
                  <p className="text-3xl font-bold mb-6">35 - 45 m²</p>
                  <p className="text-gray-700 mb-6">
                    Forte demande locative, parfaits pour jeunes actifs, étudiants et célibataires.
                    Un investissement sûr avec une rotation locative minimale.
                  </p>
                  <h4 className="font-semibold mb-4">Aménagement type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Pièce de vie lumineuse de 20-25m² avec coin cuisine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Chambre séparée de 10-12m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salle d'eau avec douche moderne</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Balcon ou loggia de 5-8m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Rangements intégrés optimisés</span>
                    </li>
                  </ul>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-gold-600">7-9%</p>
                        <p className="text-sm text-gray-700">Rentabilité brute</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gold-600">650-750€</p>
                        <p className="text-sm text-gray-700">Loyer mensuel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ImageCarousel
                  className="h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/batiments/t2-studio-plan.jpg", alt: "Plan T2 Studio" },
                    { src: "/images/projets/batiments/t2-studio-3d.jpg", alt: "Vue 3D T2 Studio" },
                    { src: "/images/projets/batiments/t2-studio-real.jpg", alt: "T2 Studio Réel" }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* T3 */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <ImageCarousel
                    className="h-96 lg:h-auto"
                    images={[
                      { src: "/images/projets/batiments/t3-appartement-plan.jpg", alt: "Appartement T3 - Plan" },
                      { src: "/images/projets/batiments/t3-appartement-3d.jpg", alt: "Appartement T3 - Vue 3D" },
                      { src: "/images/projets/batiments/t3-appartement-real.jpg", alt: "Appartement T3 - Vue réelle" }
                    ]}
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Appartements T3</h3>
                  <p className="text-3xl font-bold mb-6">60 - 70 m²</p>
                  <p className="text-gray-700 mb-6">
                    Idéaux pour couples et petites familles. Excellent équilibre entre
                    investissement et rentabilité avec une demande locative constante.
                  </p>
                  <h4 className="font-semibold mb-4">Aménagement type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Séjour spacieux de 25-30m² avec cuisine américaine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>2 chambres de 10-12m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salle de bain complète</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>WC séparé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Balcon ou terrasse de 8-12m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Place de parking sécurisée</span>
                    </li>
                  </ul>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-gold-600">6-8%</p>
                        <p className="text-sm text-gray-700">Rentabilité brute</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gold-600">850-1000€</p>
                        <p className="text-sm text-gray-700">Loyer mensuel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* T4 */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Appartements T4</h3>
                  <p className="text-3xl font-bold mb-6">75 - 85 m²</p>
                  <p className="text-gray-700 mb-6">
                    Pour familles moyennes recherchant confort et espace. Segment très
                    demandé avec excellente stabilité locative.
                  </p>
                  <h4 className="font-semibold mb-4">Aménagement type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Grand séjour de 30-35m² avec cuisine ouverte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>3 chambres dont une suite parentale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Salle de bain + salle d'eau</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>WC séparé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Grande terrasse de 12-15m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Cave ou cellier + parking</span>
                    </li>
                  </ul>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-gold-600">5-7%</p>
                        <p className="text-sm text-gray-700">Rentabilité brute</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gold-600">1100-1300€</p>
                        <p className="text-sm text-gray-700">Loyer mensuel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ImageCarousel
                  className="h-96 lg:h-auto"
                  images={[
                    { src: "/images/projets/batiments/t4-appartement-plan.jpg", alt: "Appartement T4 - Plan" },
                    { src: "/images/projets/batiments/t4-appartement-3d.jpg", alt: "Appartement T4 - Vue 3D" },
                    { src: "/images/projets/batiments/t4-appartement-real.jpg", alt: "Appartement T4 - Vue réelle" }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* T5 */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <ImageCarousel
                    className="h-96 lg:h-auto"
                    images={[
                      { src: "/images/projets/batiments/t5-grand-plan.jpg", alt: "Appartement T5 - Plan" },
                      { src: "/images/projets/batiments/t5-grand-3d.jpg", alt: "Appartement T5 - Vue 3D" },
                      { src: "/images/projets/batiments/t5-grand-real.jpg", alt: "Appartement T5 - Vue réelle" }
                    ]}
                  />
                </div>
                <div className="p-8 lg:p-12 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gold-500">Grands T5</h3>
                  <p className="text-3xl font-bold mb-6">95 m² et plus</p>
                  <p className="text-gray-700 mb-6">
                    Standing élevé pour grandes familles et cadres supérieurs. Segment
                    premium avec locataires solvables et baux longue durée.
                  </p>
                  <h4 className="font-semibold mb-4">Aménagement type :</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Vaste séjour de 40-45m² avec cuisine équipée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>4 chambres dont suite parentale avec dressing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>2 salles de bains complètes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Bureau ou 5ème chambre</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Grande terrasse de 15-20m²</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      <span>Cave + 2 places de parking</span>
                    </li>
                  </ul>
                  <div className="bg-gold-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-gold-600">5-6%</p>
                        <p className="text-sm text-gray-700">Rentabilité brute</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gold-600">1400-1700€</p>
                        <p className="text-sm text-gray-700">Loyer mensuel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Investisseur */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Avantages pour l'Investisseur</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rentabilité Optimisée</h3>
              <p className="text-gray-700">
                Rendements locatifs de 5 à 9% selon les typologies,
                supérieurs aux moyennes métropolitaines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestion Simplifiée</h3>
              <p className="text-gray-700">
                Un seul bâtiment, plusieurs appartements : économies d'échelle
                sur la gestion et l'entretien.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diversification</h3>
              <p className="text-gray-700">
                Plusieurs typologies dans un même programme permettent
                de toucher différents segments de marché.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité Locative</h3>
              <p className="text-gray-700">
                Mutualisation des risques avec plusieurs locataires,
                réduction du risque de vacance locative.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction Moderne</h3>
              <p className="text-gray-700">
                Normes RT 2020, matériaux durables, équipements
                économes réduisant les charges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-gold-500">■</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Emplacements Prime</h3>
              <p className="text-gray-700">
                Zones à forte demande locative, proximité commerces,
                écoles et transports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services de Gestion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services de Gestion Inclus</h2>

          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Gestion Locative Complète</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Recherche de locataires</strong>
                      <p className="text-gray-700">Sélection rigoureuse, vérification solvabilité</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Gestion administrative</strong>
                      <p className="text-gray-700">Baux, quittances, déclarations fiscales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Encaissement des loyers</strong>
                      <p className="text-gray-700">Suivi, relances, garantie loyers impayés</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>États des lieux</strong>
                      <p className="text-gray-700">Entrée/sortie, suivi des travaux</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Services Premium</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Conciergerie 24/7</strong>
                      <p className="text-gray-700">Assistance locataires, urgences</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Entretien préventif</strong>
                      <p className="text-gray-700">Maintenance régulière, valorisation du bien</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Reporting mensuel</strong>
                      <p className="text-gray-700">Tableau de bord, indicateurs de performance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Optimisation fiscale</strong>
                      <p className="text-gray-700">Accompagnement CIOP, déclarations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantage CIOP */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Défiscalisation CIOP Maximum</h2>
          <p className="text-xl mb-8 text-white">
            Nos programmes d'appartements multiples sont spécialement conçus pour
            maximiser vos avantages fiscaux avec le dispositif CIOP.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">35%</p>
              <p className="text-white">Crédit d'impôt sur l'investissement</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">5-9%</p>
              <p className="text-white">Rentabilité locative brute</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-500 mb-2">100%</p>
              <p className="text-white">Accompagnement fiscal inclus</p>
            </div>
          </div>
          <Link
            to="/investissement-defiscalisation"
            className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
          >
            Simuler Mon Investissement CIOP
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Investissez dans l'Immobilier Locatif Rentable</h2>
          <p className="text-xl text-gray-700 mb-8">
            Nos experts vous accompagnent dans votre projet d'investissement locatif
            pour optimiser votre rentabilité et votre défiscalisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact-form"
              className="inline-block bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors"
            >
              Recevoir une Étude Personnalisée
            </a>
            <Link
              to="/nos-projets"
              className="inline-block bg-white text-primary-900 border-2 border-primary-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Découvrir Tous Nos Projets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BatimentsMultiples;