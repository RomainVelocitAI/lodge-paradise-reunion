import React, { useState, useEffect } from 'react';
import { FaTree, FaMountain, FaLeaf, FaSnowflake, FaTools, FaPaintRoller, FaHome, FaUmbrella } from 'react-icons/fa';

const MaterialsInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  const options = [
    {
      title: "Structure Métallique",
      description: "Robustesse face aux vents de 300 km/h",
      image: "/structure-metallique.jpg",
      icon: <FaTools size={24} className="text-white" />
    },
    {
      title: "Bois Exotiques",
      description: "Bois précieux imputrescibles 50 ans minimum",
      image: "/bois-exotiques.jpg",
      icon: <FaTree size={24} className="text-white" />
    },
    {
      title: "Pierre de Lave",
      description: "Pierre volcanique locale de La Réunion",
      image: "/pierre-lave.jpg",
      icon: <FaMountain size={24} className="text-white" />
    },
    {
      title: "Grandes Baies Vitrées",
      description: "Vue grand angle avec protection solaire intégrée",
      image: "/baies-vitrees.jpg",
      icon: <FaHome size={24} className="text-white" />
    },
    {
      title: "Garde-Corps en Verre",
      description: "Sécurité invisible et design épuré minimaliste",
      image: "/garde-corps-verre.jpg",
      icon: <FaSnowflake size={24} className="text-white" />
    },
    {
      title: "Construction Écologique",
      description: "Habitat responsable avec empreinte écologique minimale",
      image: "/construction-ecologique.jpg",
      icon: <FaLeaf size={24} className="text-white" />
    },
    {
      title: "Panneaux et Chauffe-eau Solaire",
      description: "Production électrique solaire et eau chaude gratuite",
      image: "/panneaux-solaires.jpg",
      icon: <FaUmbrella size={24} className="text-white" />
    },
    {
      title: "Aménagement Extérieur",
      description: "Jardins luxuriants avec piscine et spa privatifs",
      image: "/amenagement-exterieur.jpg",
      icon: <FaPaintRoller size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 120 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="prestations" className="section" style={{ padding: '5rem 0', marginTop: '8rem', background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)' }}>
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-8 text-center">
          <span className="text-gold-500 font-bold text-xl uppercase tracking-wider mb-4 block animate-fadeInTop delay-300">
            NOS MATÉRIAUX D'EXCEPTION
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
            L'excellence des matériaux Nobles
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto animate-fadeInTop delay-600 mb-4">
            Tous nos projets sont <strong className="text-white">validés par des bureaux d'études spécialisés</strong> à La Réunion, <strong className="text-white">assurant une parfaite adaptation</strong> aux contraintes climatiques tropicales.
          </p>
        </div>
        
        <div className="h-8"></div>
        
        {/* Options Container */}
        <div className="flex justify-center px-4 md:px-0">
          <div
            className="options flex w-full max-w-[1200px] h-[300px] md:h-[400px] lg:h-[500px] mx-0 items-stretch overflow-x-auto md:overflow-hidden relative rounded-xl">
            {options.map((option, index) => (
              <div
                key={index}
                className={`
                  option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
                  ${activeIndex === index ? 'active' : ''}
                `}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url('${option.image}')`,
                  backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
                  backgroundPosition: 'center',
                  backfaceVisibility: 'hidden',
                  opacity: animatedOptions.includes(index) ? 1 : 0,
                  transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
                  minWidth: '60px',
                  minHeight: '100px',
                  margin: 0,
                  borderRadius: 0,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: activeIndex === index ? '#D4AF37' : '#3d3d3d',
                  cursor: 'pointer',
                  backgroundColor: '#18181b',
                  boxShadow: activeIndex === index 
                    ? '0 20px 60px rgba(212, 175, 55, 0.3)' 
                    : '0 10px 30px rgba(0,0,0,0.30)',
                  flex: activeIndex === index ? '6 1 0%' : '1 1 0%',
                  zIndex: activeIndex === index ? 10 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  overflow: 'hidden',
                  willChange: 'flex-grow, box-shadow, background-size, background-position'
                }}
                onClick={() => handleOptionClick(index)}>
                {/* Shadow effect */}
                <div
                  className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
                  style={{
                    bottom: activeIndex === index ? '0' : '-40px',
                    height: '120px',
                    boxShadow: activeIndex === index 
                      ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                      : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
                  }}></div>
                
                {/* Label with icon and info */}
                <div
                  className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
                  <div
                    className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 flex-shrink-0 flex-grow-0 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #BF9830)',
                      borderColor: '#D4AF37',
                      backdropFilter: 'blur(10px)'
                    }}>
                    {option.icon}
                  </div>
                  <div className="info text-white whitespace-pre relative">
                    <div
                      className="main font-bold text-lg transition-all duration-700 ease-in-out"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}>
                      {option.title}
                    </div>
                    <div
                      className="sub text-base text-gray-300 transition-all duration-700 ease-in-out"
                      style={{
                        opacity: activeIndex === index ? 1 : 0,
                        transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                      }}>
                      {option.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Texte sous les images */}
        <div className="w-full max-w-4xl mx-auto px-6 mt-8 text-center">
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto mb-4">
            Toutes nos constructions sont protégées par une <strong className="text-white">garantie décennale</strong> (matériaux et mise en œuvre), gage de <strong className="text-white">sécurité et de fiabilité</strong>.
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
            Nous réalisons systématiquement une <strong className="text-white">étude complète</strong>, couvrant l'architecture, la résistance, la durabilité et le confort, afin de garantir des projets haut de gamme conçus pour durer.
          </p>
        </div>

        {/* Bouton vers la page dédiée */}
        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
          <a href="/materiaux-nobles" style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #D4AF37, #BF9830)',
            color: 'white',
            padding: '0.875rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 40px rgba(245, 158, 11, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(245, 158, 11, 0.3)';
          }}>
            Découvrir tous nos matériaux d'exception →
          </a>
          <a href="#contact" style={{ 
            display: 'inline-block',
            background: '#111827',
            color: 'white',
            padding: '0.875rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 10px 30px rgba(17, 24, 39, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 40px rgba(17, 24, 39, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 30px rgba(17, 24, 39, 0.3)';
          }}>
            Demander un devis personnalisé →
          </a>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx="true">{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default MaterialsInteractive;