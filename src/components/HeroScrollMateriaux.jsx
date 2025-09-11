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
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase">
            Excellence • Durabilité • Innovation
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
            Matériaux Nobles
          </span>
          <br />
          <span className={`font-light text-white opacity-90 ${
            isMobile ? 'text-3xl' : 'text-5xl md:text-6xl lg:text-7xl'
          }`}>
            & Excellence
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 opacity-90 font-light max-w-3xl mx-auto"
        >
          L'essence même de Lodges Paradise<br />
          Sélection rigoureuse pour l'environnement tropical
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <a href="#materiaux" className="px-8 py-4 bg-white text-darkblue-500 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            Découvrir nos matériaux
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: isMobile ? 1 : opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Explorer</span>
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

const HeroScrollMateriaux = () => {
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
      </main>
    );
  }

  // Sur desktop, on garde les animations
  return (
    <main ref={container} className='relative' style={{ 
      height: '100vh',
      overflow: 'hidden'
    }}>
      <HeroSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default HeroScrollMateriaux;