import React, { useState } from 'react';

const MaterialsSlideshowMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const materials = [
    {
      title: "Recherche & Acquisition de Terrains",
      description: "Identification de terrains dans les secteurs les plus dynamiques et à fort potentiel de valorisation de La Réunion",
      image: "/materials-5-zones-strategiques.webp"
    },
    {
      title: "Gestion Administrative Complète",
      description: "Prise en charge intégrale des démarches : permis de construire, autorisations, suivi administratif et juridique",
      image: "/materials-4-maitrise-oeuvre.webp"
    },
    {
      title: "Construction Premium",
      description: "Réalisation de villas haut de gamme avec matériaux nobles : bois exotiques, pierre de lave, finitions premium",
      image: "/materials-1-bois-exotiques.webp"
    },
    {
      title: "Optimisation Fiscale",
      description: "Accompagnement complet pour la défiscalisation : Pinel Outre-Mer, LMNP, montage des dossiers",
      image: "/materials-6-excellence-qualite.webp"
    },
    {
      title: "Service Après-Vente",
      description: "Maintenance, entretien et préservation de votre patrimoine avec garantie de qualité sur le long terme",
      image: "/materials-3-construction-ecologique.webp"
    },
    {
      title: "Conciergerie Premium Île en Rêve",
      description: "Service de conciergerie haut de gamme pour la gestion locative et l'accueil de vos locataires",
      image: "/materials-2-pierre-lave.webp"
    }
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white" style={{ minHeight: '400px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-yellow-600 font-semibold text-xs uppercase tracking-wider">NOTRE APPROCHE</span>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">
            Votre Investissement<br/>Clé en Main
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            <strong>Lodge Paradise</strong> accompagne les investisseurs de A à Z avec notre partenaire <strong>Île en Rêve</strong>.
          </p>
        </div>

        <div className="space-y-3">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-2 flex-1">
                  {material.title}
                </h3>
                <svg
                  className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="px-4 pb-4">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {material.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSlideshowMobile;