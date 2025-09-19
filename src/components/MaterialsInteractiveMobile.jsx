import React, { useState } from 'react';
import { FaTree, FaMountain, FaLeaf, FaSnowflake, FaTools, FaPaintRoller, FaHome, FaUmbrella, FaChevronDown } from 'react-icons/fa';

const MaterialsInteractiveMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const options = [
    {
      title: "Structure Métallique",
      description: "Robustesse face aux vents de 250 km/h",
      image: "/structure-metallique.jpg",
      icon: <FaTools size={24} className="text-gold-500" />
    },
    {
      title: "Bois Exotiques",
      description: "Bois précieux imputrescibles 50 ans minimum",
      image: "/bois-exotiques.jpg",
      icon: <FaTree size={24} className="text-gold-500" />
    },
    {
      title: "Pierre de Lave",
      description: "Roche du Piton de la Fournaise authentique",
      image: "/pierre-lave.jpg",
      icon: <FaMountain size={24} className="text-gold-500" />
    },
    {
      title: "Grandes Baies Vitrées",
      description: "Vue grand angle avec protection solaire intégrée",
      image: "/baies-vitrees.jpg",
      icon: <FaHome size={24} className="text-gold-500" />
    },
    {
      title: "Garde-Corps en Verre",
      description: "Sécurité invisible et design épuré minimaliste",
      image: "/garde-corps-verre.jpg",
      icon: <FaSnowflake size={24} className="text-gold-500" />
    },
    {
      title: "Construction Écologique",
      description: "Habitat responsable avec empreinte écologique minimale",
      image: "/construction-ecologique.jpg",
      icon: <FaLeaf size={24} className="text-gold-500" />
    },
    {
      title: "Panneaux et Chauffe-eau Solaire",
      description: "Production électrique solaire et eau chaude gratuite",
      image: "/panneaux-solaires.jpg",
      icon: <FaUmbrella size={24} className="text-gold-500" />
    },
    {
      title: "Aménagement Extérieur",
      description: "Jardins luxuriants avec piscine et spa privatifs",
      image: "/amenagement-exterieur.jpg",
      icon: <FaPaintRoller size={24} className="text-gold-500" />
    }
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section py-12" style={{ marginTop: '6rem', background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)' }}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4 block">
            NOS MATÉRIAUX D'EXCEPTION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            L'excellence des matériaux Nobles
          </h2>
          <p className="text-base md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-4">
            Tous nos projets sont <strong className="text-white">validés par des bureaux d'études spécialisés</strong> à La Réunion, <strong className="text-white">assurant une parfaite adaptation</strong> aux contraintes climatiques tropicales.
          </p>
        </div>
        
        {/* Accordéon vertical pour mobile */}
        <div className="max-w-3xl mx-auto">
          {options.map((option, index) => (
            <div 
              key={index} 
              className="mb-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              style={{
                border: activeIndex === index ? '2px solid #D4AF37' : '2px solid transparent'
              }}
            >
              {/* En-tête cliquable */}
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{option.title}</h3>
                    <p className="text-gray-400 text-sm">{option.description}</p>
                  </div>
                </div>
                <FaChevronDown 
                  className={`text-gold-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              {/* Contenu dépliable */}
              <div 
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-4 border-t border-gray-700">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Texte sous les images */}
        <div className="text-center mt-6 px-4">
          <p className="text-base md:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-4">
            Toutes nos constructions sont protégées par une <strong className="text-white">garantie décennale</strong> (matériaux et mise en œuvre), gage de <strong className="text-white">sécurité et de fiabilité</strong>.
          </p>
          <p className="text-base md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Nous réalisons systématiquement une <strong className="text-white">étude complète</strong>, couvrant l'architecture, la résistance, la durabilité et le confort, afin de garantir des projets haut de gamme conçus pour durer.
          </p>
        </div>

        {/* Bouton vers la page dédiée */}
        <div className="text-center mt-8">
          <a 
            href="/materiaux-nobles" 
            className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Découvrir tous nos matériaux d'exception →
          </a>
          <a 
            href="#contact" 
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 ml-3 mt-3"
          >
            Demander un devis →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MaterialsInteractiveMobile;