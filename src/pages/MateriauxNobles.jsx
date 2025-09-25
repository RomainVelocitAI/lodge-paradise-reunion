import { Shield, Sparkles, TrendingUp } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryMateriaux from '../components/HeroGalleryMateriaux';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MateriauxNobles = () => {
  const materialImages = [
    { src: '/materiaux-nobles.jpg', alt: 'Matériaux nobles premium' },
    { src: '/structure-metallique.jpg', alt: 'Structure métallique' },
    { src: '/bois-exotique.jpg', alt: 'Bois exotiques' },
    { src: '/pierre-de-lave.jpg', alt: 'Pierre de lave' },
    { src: '/baies-vitrees.jpg', alt: 'Baies vitrées' }
  ];

  const materiaux = [
    {
      title: "Structure Métallique Premium",
      description: "Charpentes métalliques galvanisées résistantes aux conditions cycloniques, ossatures en acier thermolaqué, structures porteuses garantissant stabilité et durabilité exceptionnelles.",
      features: ["Résistance cyclonique", "Galvanisation à chaud", "Garantie décennale", "Design sur-mesure"],
      image: "/structure-metallique.jpg"
    },
    {
      title: "Bois Exotiques Nobles",
      description: "Essences rares sélectionnées : teck de Birmanie, ipé du Brésil, padouk d'Afrique. Bois imputrescibles naturellement résistants aux termites et à l'humidité tropicale.",
      features: ["Certification FSC", "Classe 4 naturelle", "Durée de vie 50+ ans", "Finition huilée naturelle"],
      image: "/bois-exotiques.jpg"
    },
    {
      title: "Pierre de Lave Authentique",
      description: "Pierre volcanique extraite localement à La Réunion. Matériau noble offrant une isolation thermique naturelle et une esthétique unique avec ses nuances de gris anthracite.",
      features: ["100% locale", "Isolation naturelle", "Résistance extrême", "Patine naturelle"],
      image: "/pierre-lave.jpg"
    },
    {
      title: "Verre Architectural & Baies Vitrées",
      description: "Grandes baies vitrées coulissantes jusqu'à 6m d'ouverture, verres feuilletés sécurisés, double vitrage à contrôle solaire. Luminosité maximale et protection UV optimale.",
      features: ["Anti-UV", "Isolation acoustique", "Sécurité renforcée", "Motorisation possible"],
      image: "/baies-vitrees.jpg"
    },
    {
      title: "Garde-Corps en Verre Trempé",
      description: "Garde-corps minimalistes en verre trempé 12mm, fixations inox marine 316L. Design épuré offrant une vue dégagée tout en garantissant sécurité et conformité aux normes.",
      features: ["Verre securit 12mm", "Inox marine 316L", "Norme NF P01-012", "Transparence totale"],
      image: "/garde-corps-verre.jpg"
    },
    {
      title: "Construction Écologique",
      description: "Approche durable certifiée HQE tropicale. Matériaux biosourcés, isolation naturelle, gestion des eaux pluviales, ventilation naturelle optimisée pour le climat tropical.",
      features: ["Certification HQE", "Matériaux biosourcés", "Bilan carbone optimisé", "Ventilation naturelle"],
      image: "/construction-ecologique.jpg"
    },
    {
      title: "Panneaux et Chauffe-eau Solaire",
      description: "Installation photovoltaïque haute performance et chauffe-eau solaire pour une parfaite autonomie énergétique. Production adaptée à l'ensoleillement exceptionnel de La Réunion.",
      features: ["Autonomie énergétique", "Panneaux garantis 25 ans", "ROI < 7 ans", "Stockage batterie"],
      image: "/panneaux-solaires.jpg"
    },
    {
      title: "Aménagement Extérieur Premium",
      description: "Terrasses en bois exotique, spa et jacuzzi intégrés, cuisine d'été équipée, kiosques et gazebos. Création d'espaces de vie extérieurs luxueux adaptés au climat tropical.",
      features: ["Terrasses bois exotique", "Spa & jacuzzi", "Cuisine d'été", "Kiosques sur-mesure"],
      image: "/amenagement-exterieur.jpg"
    },
    {
      title: "Finitions & Assemblages Premium",
      description: "Assemblages traditionnels tenon-mortaise pour les structures bois, visserie inox marine, joints d'étanchéité EPDM. Chaque détail pensé pour la durabilité.",
      features: ["Assemblages traditionnels", "Visserie marine", "Joints haute performance", "Garantie 25 ans"],
      image: "/finitions-assemblages.jpg"
    }
  ];

  return (
    <>
      <SEO 
        title="Nos Matériaux Nobles | Structure Métallique, Bois Exotiques & Pierre de Lave - Lodges Paradise"
        description="Découvrez notre sélection exclusive de matériaux nobles : structure métallique galvanisée, bois exotiques premium (teck, ipé, padouk), pierre de lave locale de La Réunion, grandes baies vitrées et garde-corps en verre. Construction durable garantie 25 ans."
        keywords="matériaux nobles réunion, structure métallique, bois exotiques, teck, ipé, padouk, pierre de lave, grandes baies vitrées, garde-corps verre, construction durable, certification FSC, HQE réunion"
        canonical="https://lodgesparadise.com/materiaux-nobles"
      />
      
      <Header />

      {/* Hero avec animation de scroll */}
      <HeroGalleryMateriaux />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-gold-500 font-bold text-xl uppercase tracking-wider block mb-4">Notre approche</span>
            Une Philosophie de Construction Unique
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-8 text-gray-700">
            Chez Lodges Paradise, nous croyons que la qualité d'un projet immobilier commence par le choix des matériaux.
            Notre approche combine tradition et innovation : nous puisons dans le savoir-faire ancestral de la construction
            tropicale tout en intégrant les dernières innovations technologiques. <strong>Tous nos projets sont validés par des bureaux d'études spécialisés</strong> à La Réunion,
            garantissant une parfaite adaptation aux conditions climatiques tropicales.
          </p>
          <p className="text-lg text-center max-w-4xl mx-auto mb-16 text-gray-700">
            Chaque construction est couverte par une <strong>garantie décennale</strong> sur les matériaux et la mise en œuvre.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materiaux.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gold-500 font-bold text-xl uppercase tracking-wider block mb-4">Nos matériaux d'exception</span>
              Les Avantages de Nos Matériaux Nobles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Durabilité Exceptionnelle</h3>
                <p className="text-gray-600">
                  Résistance aux conditions tropicales : humidité, UV intenses, variations thermiques et contraintes cycloniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Esthétique Intemporelle</h3>
                <p className="text-gray-600">
                  Les matériaux nobles vieillissent avec grâce, développant une patine naturelle qui enrichit leur caractère.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Valeur Patrimoniale</h3>
                <p className="text-gray-600">
                  L'utilisation de matériaux premium augmente significativement la valeur de revente de votre bien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-900">Construisons Ensemble Votre Lodge d'Exception</h2>
          <p className="text-xl mb-8 text-gray-800 font-medium">
            Nos experts vous conseillent dans le choix des matériaux pour votre projet.
            <br />
            Contactez-nous pour découvrir notre sélection complète et obtenir un devis personnalisé.
          </p>
          <a
            href="/#contact"
            className="inline-block text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors"
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
            Demander un Devis Gratuit
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MateriauxNobles;
