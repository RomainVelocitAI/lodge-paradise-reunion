import React, { useState, useEffect } from 'react';
import { FaTree, FaMountain, FaLeaf, FaSnowflake, FaTools, FaPaintRoller, FaHome, FaUmbrella } from 'react-icons/fa';

const MaterialsInteractive = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  const options = [
    {
      title: "Bois Exotiques",
      description: "Essences premium sélectionnées pour leur durabilité",
      image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?auto=format&fit=crop&w=800&q=80",
      icon: <FaTree size={24} className="text-white" />
    },
    {
      title: "Pierre de Lave",
      description: "Pierre volcanique locale authentique de La Réunion",
      image: "https://images.unsplash.com/photo-1632164951241-5e135f2d16ce?auto=format&fit=crop&w=800&q=80",
      icon: <FaMountain size={24} className="text-white" />
    },
    {
      title: "Construction Écologique",
      description: "Approche durable et respectueuse de l'environnement",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
      icon: <FaLeaf size={24} className="text-white" />
    },
    {
      title: "Isolation Thermique",
      description: "Matériaux haute performance adaptés au climat tropical",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80",
      icon: <FaSnowflake size={24} className="text-white" />
    },
    {
      title: "Menuiseries Premium",
      description: "Bois nobles et aluminium haut de gamme",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=800&q=80",
      icon: <FaTools size={24} className="text-white" />
    },
    {
      title: "Revêtements Naturels",
      description: "Finitions en matériaux bruts et authentiques",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
      icon: <FaPaintRoller size={24} className="text-white" />
    },
    {
      title: "Toiture Tropicale",
      description: "Conception adaptée aux conditions cycloniques",
      image: "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=800&q=80",
      icon: <FaUmbrella size={24} className="text-white" />
    },
    {
      title: "Terrasses en Bois",
      description: "Decking en bois exotique résistant",
      image: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800&q=80",
      icon: <FaHome size={24} className="text-white" />
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
    <section id="prestations" className="section" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)' }}>
      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-8 text-center">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4 block animate-fadeInTop delay-300">
            NOS MATÉRIAUX D'EXCEPTION
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
            L'Excellence des Matériaux Nobles
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto animate-fadeInTop delay-600">
            Une sélection rigoureuse de matériaux premium pour des constructions qui traversent le temps avec élégance.
          </p>
        </div>
        
        <div className="h-8"></div>
        
        {/* Options Container */}
        <div className="flex justify-center">
          <div
            className="options flex w-full max-w-[1200px] min-w-[800px] h-[500px] mx-0 items-stretch overflow-hidden relative rounded-xl">
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
                  minWidth: '80px',
                  minHeight: '100px',
                  margin: 0,
                  borderRadius: 0,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: activeIndex === index ? '#F59E0B' : '#3d3d3d',
                  cursor: 'pointer',
                  backgroundColor: '#18181b',
                  boxShadow: activeIndex === index 
                    ? '0 20px 60px rgba(245, 158, 11, 0.3)' 
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
                      background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                      borderColor: '#F59E0B',
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
        
        {/* Bouton vers la page dédiée */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/materiaux-nobles" style={{ 
            display: 'inline-block',
            background: 'linear-gradient(135deg, #F59E0B, #D97706)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.125rem',
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
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
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