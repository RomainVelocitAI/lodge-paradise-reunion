'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';

const HeroSection = ({ scrollYProgress }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Désactiver les animations au scroll sur mobile
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], isMobile ? [1, 1] : [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -100]);
  
  const headerHeight = isMobile ? '80px' : '100px';
  
  return (
    <motion.section
      style={{ 
        scale: isMobile ? 1 : scale, 
        top: 0, 
        marginTop: headerHeight,
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? '100vh' : 'auto',
        clipPath: 'inset(0 0 0 0)',
        position: isMobile ? 'relative' : 'sticky'
      }}
      className={`${isMobile ? 'relative' : 'sticky'} flex flex-col items-center justify-center overflow-hidden bg-gray-900`}
    >
      {/* Background avec vidéo et overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        >
          <source src="/LODGES PARADISE - DIGIQO - Chat.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-darkblue-500/60 via-gold-500/10 to-darkblue-500/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <motion.div style={{ y: isMobile ? 0 : y, opacity: isMobile ? 1 : opacity }} className="relative z-10 text-white text-center px-8 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className={`font-bold mb-4 ${
            isMobile ? 'text-4xl' : 'text-6xl md:text-7xl lg:text-8xl'
          }`}>
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F4E4BC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block'
            }}>
              Créateurs
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F4E4BC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'block',
              whiteSpace: 'nowrap'
            }}>
              d'habitats uniques
            </span>
          </h1>
          <p className={`text-white opacity-90 font-light ${
            isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
          }`}>
            au cœur des paysages Réunionnais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <a href="#contact" className="px-8 py-4 bg-gold-500 text-white rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Prendre RDV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: isMobile ? 1 : opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Découvrir</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

const EnterpriseSection = ({ scrollYProgress }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reductionValue, setReductionValue] = useState(0);
  const [experienceValue, setExperienceValue] = useState(0);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Désactiver les animations au scroll sur mobile
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [2, 0]);
  
  // Animation des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animation pour -35%
            let reductionCounter = 0;
            const reductionInterval = setInterval(() => {
              reductionCounter += 1;
              setReductionValue(reductionCounter);
              if (reductionCounter >= 35) {
                clearInterval(reductionInterval);
              }
            }, 40);
            
            // Animation pour 40 ans
            let experienceCounter = 0;
            const experienceInterval = setInterval(() => {
              experienceCounter += 1;
              setExperienceValue(experienceCounter);
              if (experienceCounter >= 40) {
                clearInterval(experienceInterval);
              }
            }, 35);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const metricsSection = document.getElementById('metrics-section');
    if (metricsSection) {
      observer.observe(metricsSection);
    }
    
    return () => {
      if (metricsSection) {
        observer.unobserve(metricsSection);
      }
    };
  }, [hasAnimated]);
  
  const images = [
    "/client-image-1.jpg",
    "/client-image-2.jpg",
    "/client-image-3.jpg",
    "/client-image-4.jpg"
  ];

  return (
    <motion.section
      style={{ 
        scale: isMobile ? 1 : scale, 
        rotate: isMobile ? 0 : rotate,
        position: 'relative',
        zIndex: 10
      }}
      className={`relative bg-gradient-to-b from-gray-50 to-white ${isMobile ? 'py-16' : 'py-20 min-h-screen'}`}
      style={{ paddingBottom: '10rem' }}
    >
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-bold text-xl uppercase tracking-wider">Votre Partenaire</span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
              Lodges Paradise
            </h2>
            <p className="text-2xl text-gray-600 mb-6">
              N°1 de l'<strong>Immobilier Premium</strong> à La Réunion
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Lodges Paradise</strong> maîtrise l'ensemble du processus immobilier, <strong>de l'acquisition foncière à la gestion locative</strong>,
              nous avons développé une solution <strong>clé en main</strong> pour construire, investir et rentabiliser votre patrimoine immobilier à La Réunion.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La majeure partie de nos activités sont concentrées dans les <strong>zones Ouest et Sud de L'Ile</strong>,
              réputées pour leur attractivité et leur fort potentiel de développement.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Chaque projet de <strong>Lodges Paradise</strong> devient une réalisation exclusive, conçue pour offrir <strong>sécurité,
              performance et élégance architecturale</strong> tout en assurant une rentabilité durable de votre patrimoine immobilier à La Réunion.
            </p>
            
            <div id="metrics-section" className="grid grid-cols-2 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold text-darkblue-500 tabular-nums">
                  {reductionValue || 0}%
                </h3>
                <p className="text-gray-600 mt-2">Réduction d'impôts CIOP</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-4xl font-bold text-darkblue-500 tabular-nums">
                  {experienceValue || 0} ans
                </h3>
                <p className="text-gray-600 mt-2">D'expertise</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Découvrez votre potentiel d'investissement
              </a>
            </motion.div>
          </motion.div>

          {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <motion.figure
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 shadow-lg overflow-hidden"
                  style={{ 
                    borderRadius: '50%',
                    aspectRatio: '1/1'
                  }}
                >
                  <img
                    src={img}
                    alt={`Lodges Paradise ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.figure>
              ))}
            </div>
          </motion.div>
          )}

          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 mb-8 grid grid-cols-2 gap-6 px-4"
            >
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <img
                  src="/client-image-1.jpg"
                  alt="Lodges Paradise 1"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <img
                  src="/client-image-2.jpg"
                  alt="Lodges Paradise 2"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <img
                  src="/client-image-3.jpg"
                  alt="Lodges Paradise 3"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                <img
                  src="/client-image-4.jpg"
                  alt="Lodges Paradise 4"
                  className="absolute inset-0 w-full h-full object-cover shadow-xl"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

const HeroScroll = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  
  const headerHeight = isMobile ? '80px' : '100px';

  // Sur mobile, on rend le scroll normal sans animation ni effet de parallaxe
  if (isMobile) {
    return (
      <main className='relative'>
        <HeroSection scrollYProgress={scrollYProgress} />
        <EnterpriseSection scrollYProgress={scrollYProgress} />
      </main>
    );
  }

  // Sur desktop, on garde les animations
  return (
    <main ref={container} className='relative' style={{
      height: '220vh',
      overflow: 'hidden'
    }}>
      <HeroSection scrollYProgress={scrollYProgress} />
      <EnterpriseSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default HeroScroll;