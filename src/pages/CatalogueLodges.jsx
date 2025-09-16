import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';

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
          title="Catalogue de Nos Réalisations"
          subtitle="Une palette diversifiée de produits immobiliers conçus avec des matériaux nobles et adaptés à tous les projets d'investissement à La Réunion."
          images={catalogImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Catégories de Projets</h2>

          {/* Villas 4 Façades */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gold-500">Villas Premium 4 Façades</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/villas/essentielle-plan.jpg", alt: "Villa Essentielle - Plan" },
                    { src: "/images/projets/villas/essentielle-3d.jpg", alt: "Villa Essentielle - 3D" },
                    { src: "/images/projets/villas/essentielle-real.jpg", alt: "Villa Essentielle - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Villa Essentielle</h4>
                  <p className="text-gray-600 mb-4">110m², 3 chambres, piscine privée, finitions haut de gamme</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 450 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/villas/prestige-plan.jpg", alt: "Villa Prestige - Plan" },
                    { src: "/images/projets/villas/prestige-3d.jpg", alt: "Villa Prestige - 3D" },
                    { src: "/images/projets/villas/prestige-real.jpg", alt: "Villa Prestige - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Villa Prestige</h4>
                  <p className="text-gray-600 mb-4">140m², 4 chambres, grande piscine, vue panoramique</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 650 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/villas/exception-plan.jpg", alt: "Villa Exception - Plan" },
                    { src: "/images/projets/villas/exception-3d.jpg", alt: "Villa Exception - 3D" },
                    { src: "/images/projets/villas/exception-real.jpg", alt: "Villa Exception - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Villa Exception</h4>
                  <p className="text-gray-600 mb-4">180m², 5 chambres, piscine à débordement, domotique</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 850 000€</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maisons 3 Façades */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gold-500">Maisons 3 Façades</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/maisons/t2-compact-plan.jpg", alt: "Maison T2 - Plan" },
                    { src: "/images/projets/maisons/t2-compact-3d.jpg", alt: "Maison T2 - 3D" },
                    { src: "/images/projets/maisons/t2-compact-real.jpg", alt: "Maison T2 - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Maison T2 Compact</h4>
                  <p className="text-gray-600 mb-4">45m², 1 chambre, jardin privé, idéal investissement locatif</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 250 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/maisons/t3-familial-plan.jpg", alt: "Maison T3 - Plan" },
                    { src: "/images/projets/maisons/t3-familial-3d.jpg", alt: "Maison T3 - 3D" },
                    { src: "/images/projets/maisons/t3-familial-real.jpg", alt: "Maison T3 - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Maison T3 Famille</h4>
                  <p className="text-gray-600 mb-4">70m², 2 chambres, terrasse, garage, parfait pour couple</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 350 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-64"
                  images={[
                    { src: "/images/projets/maisons/t4-spacieux-plan.jpg", alt: "Maison T4+ - Plan" },
                    { src: "/images/projets/maisons/t4-spacieux-3d.jpg", alt: "Maison T4+ - 3D" },
                    { src: "/images/projets/maisons/t4-spacieux-real.jpg", alt: "Maison T4+ - Réelle" }
                  ]}
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Maison T4+ Confort</h4>
                  <p className="text-gray-600 mb-4">95m², 3+ chambres, grand jardin, possibilité piscine</p>
                  <p className="text-3xl font-bold text-gold-500">À partir de 450 000€</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bâtiments Multiples */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gold-500">Bâtiments Multiples</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-48"
                  images={[
                    { src: "/images/projets/batiments/t2-studio-plan.jpg", alt: "T2 Studio - Plan" },
                    { src: "/images/projets/batiments/t2-studio-3d.jpg", alt: "T2 Studio - 3D" },
                    { src: "/images/projets/batiments/t2-studio-real.jpg", alt: "T2 Studio - Réel" }
                  ]}
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">T2 Studio</h4>
                  <p className="text-sm text-gray-600 mb-2">35m², rentabilité optimale</p>
                  <p className="text-2xl font-bold text-gold-500">180 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-48"
                  images={[
                    { src: "/images/projets/batiments/t3-appartement-plan.jpg", alt: "T3 Familial - Plan" },
                    { src: "/images/projets/batiments/t3-appartement-3d.jpg", alt: "T3 Familial - 3D" },
                    { src: "/images/projets/batiments/t3-appartement-real.jpg", alt: "T3 Familial - Réel" }
                  ]}
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">T3 Familial</h4>
                  <p className="text-sm text-gray-600 mb-2">65m², terrasse, parking</p>
                  <p className="text-2xl font-bold text-gold-500">280 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-48"
                  images={[
                    { src: "/images/projets/batiments/t4-appartement-plan.jpg", alt: "T4 Spacieux - Plan" },
                    { src: "/images/projets/batiments/t4-appartement-3d.jpg", alt: "T4 Spacieux - 3D" },
                    { src: "/images/projets/batiments/t4-appartement-real.jpg", alt: "T4 Spacieux - Réel" }
                  ]}
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">T4 Spacieux</h4>
                  <p className="text-sm text-gray-600 mb-2">85m², balcon, 2 parkings</p>
                  <p className="text-2xl font-bold text-gold-500">350 000€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageCarousel
                  className="h-48"
                  images={[
                    { src: "/images/projets/batiments/t5-grand-plan.jpg", alt: "T5 Grand - Plan" },
                    { src: "/images/projets/batiments/t5-grand-3d.jpg", alt: "T5 Grand - 3D" },
                    { src: "/images/projets/batiments/t5-grand-real.jpg", alt: "T5 Grand - Réel" }
                  ]}
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">T5 Grand</h4>
                  <p className="text-sm text-gray-600 mb-2">105m², vue mer, standing</p>
                  <p className="text-2xl font-bold text-gold-500">450 000€</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Programmes d'Investissement</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Défiscalisation CIOP/Pinel/Girardin</h4>
                <p className="text-gray-600">Optimisez votre fiscalité avec nos programmes éligibles aux dispositifs de défiscalisation. Jusqu'à 35% de crédit d'impôt avec le CIOP.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">Gestion Locative Intégrée</h4>
                <p className="text-gray-600">Bénéficiez de notre partenariat avec Île en Rêve pour une gestion locative clé en main garantissant des rendements optimisés.</p>
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