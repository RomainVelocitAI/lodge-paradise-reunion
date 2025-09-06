import React, { useState } from 'react';
import { FaTree, FaMountain, FaLeaf, FaSnowflake, FaTools, FaPaintRoller, FaHome, FaUmbrella, FaChevronDown } from 'react-icons/fa';

const MaterialsInteractiveMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const options = [
    {
      title: "Bois Exotiques",
      description: "Essences premium sélectionnées pour leur durabilité",
      image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=800&q=80",
      icon: <FaTree size={24} className="text-yellow-600" />
    },
    {
      title: "Pierre de Lave",
      description: "Pierre volcanique locale authentique de La Réunion",
      image: "https://images.unsplash.com/photo-1632164951241-5e135f2d16ce?auto=format&fit=crop&w=800&q=80",
      icon: <FaMountain size={24} className="text-yellow-600" />
    },
    {
      title: "Construction Écologique",
      description: "Approche durable et respectueuse de l'environnement",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      icon: <FaLeaf size={24} className="text-yellow-600" />
    },
    {
      title: "Isolation Thermique",
      description: "Matériaux haute performance adaptés au climat tropical",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
      icon: <FaSnowflake size={24} className="text-yellow-600" />
    },
    {
      title: "Menuiseries Premium",
      description: "Bois nobles et aluminium haut de gamme",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80",
      icon: <FaTools size={24} className="text-yellow-600" />
    },
    {
      title: "Revêtements Naturels",
      description: "Finitions en matériaux bruts et authentiques",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
      icon: <FaPaintRoller size={24} className="text-yellow-600" />
    },
    {
      title: "Toiture Tropicale",
      description: "Conception adaptée aux conditions cycloniques",
      image: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=800&q=80",
      icon: <FaUmbrella size={24} className="text-yellow-600" />
    },
    {
      title: "Terrasses en Bois",
      description: "Decking en bois exotique résistant",
      image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80",
      icon: <FaHome size={24} className="text-yellow-600" />
    }
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            NOS MATÉRIAUX D'EXCEPTION
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            L'Excellence des Matériaux Nobles
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Une sélection rigoureuse de matériaux premium pour des constructions qui traversent le temps avec élégance.
          </p>
        </div>
        
        {/* Accordéon vertical pour mobile */}
        <div className="max-w-3xl mx-auto">
          {options.map((option, index) => (
            <div 
              key={index} 
              className="mb-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              style={{
                border: activeIndex === index ? '2px solid #F59E0B' : '2px solid transparent'
              }}
            >
              {/* En-tête cliquable */}
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{option.title}</h3>
                    <p className="text-gray-400 text-sm">{option.description}</p>
                  </div>
                </div>
                <FaChevronDown 
                  className={`text-yellow-500 transition-transform duration-300 ${
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
                    {option.description}. Notre expertise dans l'utilisation de ce matériau 
                    garantit une qualité exceptionnelle et une durabilité optimale pour votre 
                    projet immobilier à La Réunion.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton vers la page dédiée */}
        <div className="text-center mt-8">
          <a 
            href="/materiaux-nobles" 
            className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Découvrir tous nos matériaux d'exception →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MaterialsInteractiveMobile;