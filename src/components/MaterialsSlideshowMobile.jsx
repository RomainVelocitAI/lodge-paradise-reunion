import React, { useState } from 'react';

const MaterialsSlideshowMobile = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const materials = [
    {
      title: "Recherche & Acquisition de Terrains",
      description: "Identification de terrains dans les secteurs les plus dynamiques et à fort potentiel de valorisation de La Réunion",
      image: "/materials-5-zones-strategiques.webp"
    },
    {
      title: "Gestion Administrative Complète",
      description: "Prise en charge intégrale des démarches : permis de construire, autorisations, suivi administratif et juridique",
      image: "/materials-4-gestion-administrative.webp"
    },
    {
      title: "Construction Premium",
      description: "Savoir-faire local et qualité irréprochable pour des réalisations haut de gamme pensées pour durer",
      image: "/materials-1-construction-premium.webp"
    },
    {
      title: "Optimisation Fiscale",
      description: "Accompagnement complet pour la défiscalisation : bénéficiez d'une fiscalité avantageuse dans les Dom Tom, (CIOP et montage de dossier jusqu'en 2029)",
      image: "/materials-6-optimisation-fiscale.webp"
    },
    {
      title: "Service Après-Vente",
      description: "Maintenance, entretien et préservation de votre patrimoine avec garantie de qualité sur le long terme",
      image: "/materials-3-service-apres-vente.webp"
    },
    {
      title: "Conciergerie Premium Île en Rêve",
      description: "Service de conciergerie haut de gamme pour la gestion locative et l'accueil de vos locataires",
      image: "/materials-2-conciergerie-premium.webp"
    }
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white" style={{
      minHeight: '500px',
      zIndex: 10,
      position: 'relative'
    }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-10">
          <span className="text-gold-500 font-bold text-xl uppercase tracking-wider block mb-3">NOTRE APPROCHE</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Votre Investissement<br/>Clé en Main
          </h2>
          <p className="text-base text-gray-600 px-4">
            <strong>Lodges Paradise</strong> accompagne les investisseurs de A à Z avec notre partenaire <strong>Île en Rêve</strong>.
          </p>
        </div>

        <div className="space-y-4">
          {materials.map((material, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" style={{
              border: activeIndex === index ? '2px solid #D4AF37' : '2px solid transparent'
            }}>
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full p-5 text-left flex items-center justify-between hover:bg-gold-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset"
                aria-expanded={activeIndex === index}
                aria-controls={`content-${index}`}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {material.title}
                    </h3>
                    {activeIndex !== index && (
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {material.description}
                      </p>
                    )}
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 text-gold-500 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                id={`content-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5">
                  <img 
                    src={material.image} 
                    alt={material.title}
                    className="w-full h-56 object-cover rounded-lg mb-4 shadow-md"
                    loading="lazy"
                  />
                  <p className="text-base text-gray-700 leading-relaxed">
                    {material.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-gold-500 font-semibold text-sm hover:text-gold-600 transition-colors flex items-center gap-2">
                      En savoir plus
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
            Commencez votre projet d'investissement
          </a>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSlideshowMobile;