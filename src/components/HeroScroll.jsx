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
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-darkblue-500/60 via-gold-500/10 to-darkblue-500/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <motion.div style={{ y: isMobile ? 0 : y, opacity: isMobile ? 1 : opacity }} className="relative z-10 text-white text-center px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase">
            Investissement Premium • Rendement Garanti
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`font-bold mb-6 leading-[0.9] tracking-tighter ${
            isMobile ? 'text-4xl' : 'text-7xl md:text-8xl lg:text-9xl'
          }`}
        >
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37, #F4E4BC)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline'
          }}>
            Votre Paradis
          </span>
          <br />
          <span className={`font-light text-white opacity-90 ${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl lg:text-7xl'
          }`}>
            Tropical à La Réunion
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 opacity-90 font-light max-w-3xl mx-auto"
        >
          Jusqu'à 7% de rendement locatif • Défiscalisation optimisée<br />
          Votre patrimoine clés en main avec gestion 5 étoiles
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-6 justify-center mb-12"
        >
          <a href="#lodges" className="px-8 py-4 bg-white text-darkblue-500 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            Découvrir les Lodges
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
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
  
  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
  ];

  return (
    <motion.section
      style={{ 
        scale: isMobile ? 1 : scale, 
        rotate: isMobile ? 0 : rotate,
        position: 'relative',
        zIndex: 10
      }}
      className={`relative bg-gradient-to-b from-gray-50 to-white ${isMobile ? 'py-16 pb-24' : 'py-20 min-h-screen'}`}
    >
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Votre Partenaire Investissement</span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
              Lodge Paradise
            </h2>
            <p className="text-2xl text-gray-600 mb-6">
              N°1 de l'Immobilier Locatif Premium à La Réunion
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>10 ans d'expertise.</strong> Nous transformons votre capital 
              en patrimoine rentable avec des rendements garantis jusqu'à 7% et une défiscalisation 
              optimisée (CIOP, LMNP).
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              De l'acquisition du terrain à la gestion locative avec notre partenaire <strong>Île en Rêve</strong>, 
              nous maîtrisons chaque étape. Zones Ouest et Sud exclusivement : Saint-Gilles, Saint-Pierre, 
              les marchés les plus dynamiques de l'île.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-emerald-500">-35%</h3>
                <p className="text-gray-600 mt-2">Réduction d'impôts CIOP</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gold-500">98%</h3>
                <p className="text-gray-600 mt-2">Taux satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-500">10 ans</h3>
                <p className="text-gray-600 mt-2">D'expertise</p>
              </div>
            </div>
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
                    alt={`Lodge Paradise ${i + 1}`}
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
              className="mt-8 mb-8 grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop" 
                alt="Lodge Paradise 1" 
                className="w-full h-32 object-cover shadow-lg"
                style={{ borderRadius: '50%', aspectRatio: '1/1' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop" 
                alt="Lodge Paradise 2" 
                className="w-full h-32 object-cover shadow-lg"
                style={{ borderRadius: '50%', aspectRatio: '1/1' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop" 
                alt="Lodge Paradise 3" 
                className="w-full h-32 object-cover shadow-lg"
                style={{ borderRadius: '50%', aspectRatio: '1/1' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=300&h=300&fit=crop" 
                alt="Lodge Paradise 4" 
                className="w-full h-32 object-cover shadow-lg"
                style={{ borderRadius: '50%', aspectRatio: '1/1' }}
              />
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
      height: '200vh',
      overflow: 'hidden'
    }}>
      <HeroSection scrollYProgress={scrollYProgress} />
      <EnterpriseSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default HeroScroll;