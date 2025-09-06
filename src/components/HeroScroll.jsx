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
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const headerHeight = isMobile ? '80px' : '100px';
  
  return (
    <motion.section
      style={{ 
        scale, 
        top: headerHeight, 
        height: `calc(100vh - ${headerHeight})`,
        clipPath: 'inset(0 0 0 0)'
      }}
      className='sticky flex flex-col items-center justify-center overflow-hidden bg-gray-900'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-yellow-600/10 to-blue-900/40" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-white text-center px-8 max-w-6xl mx-auto">
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
            background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
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
          <a href="#lodges" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            Découvrir les Lodges
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
            Prendre RDV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <div className="text-4xl font-bold mb-1">200+</div>
            <div className="text-sm opacity-80">Projets réalisés</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">6.5%</div>
            <div className="text-sm opacity-80">Rendement moyen</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">98%</div>
            <div className="text-sm opacity-80">Clients satisfaits</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
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
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, 0]);
  
  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"
  ];

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section
      style={{ 
        scale, 
        rotate,
        marginTop: '2rem',
        position: 'relative',
        zIndex: 10
      }}
      className={`relative bg-gradient-to-b from-gray-50 to-white ${isMobile ? 'py-12' : 'py-20 min-h-screen'}`}
    >
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Votre Partenaire Investissement</span>
            <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
              Lodge Paradise
            </h2>
            <p className="text-2xl text-gray-600 mb-6">
              N°1 de l'Immobilier Locatif Premium à La Réunion
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>10 ans d'expertise, 200+ projets réussis.</strong> Nous transformons votre capital 
              en patrimoine rentable avec des rendements garantis jusqu'à 7% et une défiscalisation 
              optimisée (Pinel Outre-Mer, LMNP).
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              De l'acquisition du terrain à la gestion locative avec notre partenaire <strong>Île en Rêve</strong>, 
              nous maîtrisons chaque étape. Zones Ouest et Sud exclusivement : Saint-Gilles, Saint-Pierre, 
              les marchés les plus dynamiques de l'île.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">7%</h3>
                <p className="text-gray-600 mt-2">Rendement max</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-500">-40%</h3>
                <p className="text-gray-600 mt-2">Réduction d'impôts</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
                <p className="text-gray-600 mt-2">Taux satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-emerald-500">10 ans</h3>
                <p className="text-gray-600 mt-2">D'expertise</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <svg className='absolute -top-[999px] -left-[999px] w-0 h-0'>
              <defs>
                <clipPath id='mask-1' clipPathUnits={'objectBoundingBox'}>
                  <path
                    d='M0.997417 0.541807C1.02854 0.316235 0.773628 -0.00919936 0.492039 0.000199072C0.249199 0.00830422 0 0.217547 0 0.539457C0.0251948 0.836695 0.248984 1 0.492039 1C0.745469 1 0.982596 0.83787 0.997417 0.541807Z'
                    fill='#D9D9D9' />
                </clipPath>
                <clipPath id='mask-2' clipPathUnits={'objectBoundingBox'}>
                  <path
                    d='M0.00886287 0.313679C0.0269396 0.216981 0.172073 0 0.502947 0C0.798211 0 0.962906 0.196934 0.992581 0.318396C1.02374 0.511792 0.937683 0.525943 0.921363 0.625C0.921363 0.716981 1 0.746462 1 0.833726C0.988294 0.89801 0.974952 0.93728 0.949553 1H0.0504066C0.0237622 0.936348 0.00886178 0.908019 0.00292682 0.834906C-0.0104279 0.748821 0.0726626 0.735849 0.0771149 0.625C0.0696933 0.525943 -0.0297155 0.520047 0.00886287 0.313679Z'
                    fill='#D9D9D9' />
                </clipPath>
                <clipPath id='mask-3' clipPathUnits={'objectBoundingBox'}>
                  <path
                    d='M0 1H0.152466C0.185351 0.960002 0.327354 0.884713 0.505232 0.884713C0.683109 0.884713 0.818635 0.968237 0.849028 1H1V0.347104C0.985052 0.222406 0.838565 0.00477544 0.497758 6.98837e-05C0.156951 -0.00463567 0.0239163 0.229466 0 0.347104V1Z'
                    fill='#D9D9D9' />
                </clipPath>
                <clipPath id='mask-4' clipPathUnits={'objectBoundingBox'}>
                  <path
                    d='M1 1H0V0.365648C0.0111437 0.322987 0.0446555 0.306894 0.110945 0.298564C0 0.231481 0.0794603 0.107906 0.22039 0.166751C0.157421 0.0690679 0.296852 -0.0156706 0.398801 0.0855445C0.407796 -0.0215584 0.578711 -0.0356796 0.604198 0.0867166C0.673163 -0.00154936 0.836582 0.0502345 0.782609 0.163217C0.890555 0.113787 1.01499 0.220886 0.887556 0.302092C0.957241 0.303259 0.983419 0.319478 1 0.365648V1Z'
                    fill='#D9D9D9' />
                </clipPath>
              </defs>
            </svg>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <motion.figure
                  key={i}
                  style={{ clipPath: `url(#mask-${i + 1})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 shadow-lg"
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

  return (
    <main ref={container} className='relative overflow-hidden' style={{ 
      height: isMobile ? '150vh' : '200vh',
      marginTop: headerHeight,
      background: '#f9fafb'
    }}>
      <HeroSection scrollYProgress={scrollYProgress} />
      <EnterpriseSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default HeroScroll;