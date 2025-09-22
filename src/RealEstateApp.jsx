import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import HeroScroll from './components/HeroScroll';
import MaterialsSlideshow from './components/MaterialsSlideshow';
import MaterialsSlideshowMobile from './components/MaterialsSlideshowMobile';
import LaReunion3DOptimized from './components/LaReunion3DOptimized';
import ProjectCatalog from './components/ProjectCatalog';
import MaterialsInteractive from './components/MaterialsInteractive';
import MaterialsInteractiveMobile from './components/MaterialsInteractiveMobile';
import DefiscalisationSection from './components/DefiscalisationSection';
import Footer from './components/Footer';

function RealEstateApp() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedZone, setSelectedZone] = useState('ouest');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const images = [
    { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", caption: "Piscine privée et terrasse" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", caption: "Chambre principale avec vue" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", caption: "Salle de bain moderne" },
    { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", caption: "Espace de vie lumineux" }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        background: 'white', 
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)', 
        zIndex: 1000,
        padding: isMobile ? '0.75rem 0' : '1rem 0'
      }}>
        <div className="container" style={{ padding: isMobile ? '0 1rem' : '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem' }}>
              <img 
                src="/logo.jpg" 
                alt="Lodges Paradise" 
                style={{ 
                  height: isMobile ? '40px' : '50px', 
                  width: isMobile ? '40px' : '50px', 
                  objectFit: 'cover',
                  borderRadius: '8px'
                }} 
              />
              <div>
                <h2 style={{ 
                  margin: 0, 
                  color: '#0a0f1c',
                  fontSize: isMobile ? '1.25rem' : '1.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.05em'
                }}>
                  LODGES PARADISE
                </h2>
                {!isMobile && <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Votre Paradis Tropical à La Réunion</span>}
              </div>
            </div>
            {!isMobile && (
              <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/nos-projets" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Nos Lodges</Link>
                <Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Prestations</Link>
                <Link to="/investissement-defiscalisation" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Fiscalité</Link>
                <a href="#contact"
                  className="bg-gold-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
                  style={{ textDecoration: 'none' }}>Contact</a>
              </nav>
            )}
            {isMobile && (
              <a href="#contact"
                className="bg-gold-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gold-600 transition-all duration-300"
                style={{ textDecoration: 'none' }}>Contact</a>
            )}
          </div>
        </div>
      </header>

      {/* Nouveau Hero avec animation de scroll */}
      <HeroScroll />

      {/* Ancien Hero Section Immobilier - Désactivé */}
      {false && (
      <section id="hero" style={{ 
        minHeight: '100vh', 
        background: `linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(16, 185, 129, 0.9)), url(${images[0].url}) center/cover`,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        marginTop: '72px',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <div style={{ 
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              marginBottom: '1.5rem'
            }}>
              NOUVEAU PROGRAMME IMMOBILIER
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1rem', lineHeight: '1.1', fontWeight: '700' }}>
              Votre Paradis Tropical à La Réunion
            </h1>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: '1.2', fontWeight: '400', opacity: 0.95 }}>
              Devenez Propriétaire d'un Lodge d'Exception
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6', opacity: 0.9 }}>
              Programme neuf de villas premium avec piscine privée, dans un cadre tropical unique. 
              Investissement idéal pour résidence principale ou rentabilité locative.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <Link to="/catalogue-lodges" style={{ 
                background: 'white', 
                color: '#0a0f1c', 
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block'
              }}>
                Découvrir les Lodges
              </Link>
              <a href="#contact" style={{ 
                background: 'transparent', 
                color: 'white', 
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block'
              }}>
                Prendre RDV
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>12</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Lodges disponibles</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>T3-T5</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Typologies variées</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2025</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Livraison prévue</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
        </div>
      </section>
      )}

      {/* Section Présentation de l'Entreprise - Désactivée car intégrée dans HeroScroll */}
      {false && (
      <section id="entreprise" className="section" style={{ padding: '5rem 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <span style={{ 
                color: '#0a0f1c', 
                fontWeight: '600', 
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                L'ENTREPRISE
              </span>
              <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                Lodges Paradise<br/>
                <span style={{ fontSize: '1.5rem', fontWeight: '400', color: '#6b7280' }}>
                  Constructeur d'Exception à La Réunion
                </span>
              </h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', color: '#374151' }}>
                Depuis sa création, <strong>Lodges Paradise</strong> s'est imposé comme le référent de la construction 
                de lodges premium à La Réunion. Notre expertise unique allie savoir-faire local et standards 
                internationaux pour créer des espaces de vie exceptionnels.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem', color: '#374151' }}>
                Spécialisés dans la construction de villas haut de gamme, nous maîtrisons chaque étape 
                de votre projet : de la conception architecturale à la livraison clé en main, en passant 
                par le choix des matériaux nobles et des finitions d'exception.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '0.5rem', fontWeight: '700' }}>15+</h3>
                  <p style={{ color: '#6b7280' }}>Années d'expérience</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '0.5rem', fontWeight: '700' }}>47</h3>
                  <p style={{ color: '#6b7280' }}>Lodges construits</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '0.5rem', fontWeight: '700' }}>100%</h3>
                  <p style={{ color: '#6b7280' }}>Clients satisfaits</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: '#D4AF37', marginBottom: '0.5rem', fontWeight: '700' }}>AAA</h3>
                  <p style={{ color: '#6b7280' }}>Certification qualité</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img 
                src={images[3].url} 
                alt="Lodges Paradise Construction" 
                style={{ 
                  width: '100%', 
                  borderRadius: '1rem',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 style={{ marginBottom: '0.5rem', color: '#111827' }}>Notre Engagement</h4>
                <p style={{ fontSize: '0.9375rem', color: '#6b7280', margin: 0 }}>
                  "Construire votre paradis avec passion, expertise et excellence"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Section avec Slideshow animé des Matériaux - Notre Approche */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        marginTop: isMobile ? '3rem' : '0'
      }}>
        {isMobile ? <MaterialsSlideshowMobile /> : <MaterialsSlideshow />}
      </div>

      {/* Section Notre Catalogue */}
      <ProjectCatalog />


      {/* Section Matériaux Interactifs */}
      {isMobile ? <MaterialsInteractiveMobile /> : <MaterialsInteractive />}

      {/* Section Zones Géographiques avec Carte Interactive */}
      <section id="zones" className="section" style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container">
          {/* Section desktop avec texte à gauche et carte 3D à droite */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3rem',
            maxWidth: '1200px',
            margin: '0 auto 3rem'
          }}>
            {/* Texte à gauche */}
            <div style={{ 
              flex: window.innerWidth > 768 ? '1' : 'none',
              padding: window.innerWidth > 768 ? '2rem' : '1rem',
              textAlign: window.innerWidth > 768 ? 'left' : 'center'
            }}>
              <span style={{ 
                color: '#0a0f1c', 
                fontWeight: '600', 
                fontSize: '0.875rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '1rem'
              }}>ZONES STRATÉGIQUES</span>
              <h2 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Ouest et Sud de La Réunion
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#4b5563', 
                lineHeight: '1.8',
                marginBottom: '2rem',
                fontWeight: '500'
              }}>
                Nous concentrons nos développements dans les zones à forte croissance de l'île,
                offrant le meilleur potentiel d'investissement et de qualité de vie.
              </p>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Cliquez sur les zones de la carte pour découvrir nos projets en Zone Ouest et Zone Sud,
                les deux territoires stratégiques du développement immobilier réunionnais.
              </p>
            </div>
            
            {/* Carte 3D à droite */}
            <div style={{ 
              flex: window.innerWidth > 768 ? '1.2' : 'none',
              width: '100%'
            }}>
              <LaReunion3DOptimized onZoneSelect={setSelectedZone} />
            </div>
          </div>
          
          {/* Contenu dynamique selon la zone sélectionnée */}
          <div id="zone-content-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {selectedZone === 'ouest' ? (
              <div style={{
                background: 'white',
                padding: isMobile ? '1.5rem' : '3rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  marginBottom: '1.5rem',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.5rem' : '1rem',
                  flexWrap: isMobile ? 'wrap' : 'nowrap'
                }}>
                  <span style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>O</span>
                  Zone Ouest - Côte sous le vent
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                  Le littoral ouest représente le cœur touristique et résidentiel premium de La Réunion. 
                  Cette zone bénéficie d'un ensoleillement exceptionnel et abrite les plus belles plages de l'île.
                  <strong>De La Possession à Saint-Leu</strong>, un territoire d'exception pour votre investissement.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '1rem' : '2rem', marginBottom: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Plages et lagons</strong> : Accès direct aux spots de baignade protégés</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Infrastructures premium</strong> : Centres commerciaux, restaurants</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Fort potentiel locatif</strong> : Demande touristique et résidentielle élevée</span>
                    </li>
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Zone la plus prisée</strong> : Valorisation constante de l'immobilier</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Climat idéal</strong> : Faible pluviométrie, températures agréables</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#1a1f2c', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Proximité aéroport</strong> : 15 minutes de l'aéroport Roland Garros</span>
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/nos-projets" style={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)',
                    transition: 'transform 0.3s'
                  }}>
                    Découvrir nos projets dans l'Ouest →
                  </Link>
                  <a href="#contact" style={{ 
                    display: 'inline-block',
                    background: '#D4AF37',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                    transition: 'transform 0.3s'
                  }}>
                    Prendre RDV →
                  </a>
                </div>
              </div>
            ) : (
              <div style={{
                background: 'white',
                padding: isMobile ? '1.5rem' : '3rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  marginBottom: '1.5rem',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.5rem' : '1rem',
                  flexWrap: isMobile ? 'wrap' : 'nowrap'
                }}>
                  <span style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>S</span>
                  Zone Sud - Dynamisme et expansion
                </h3>
                <p style={{ color: '#4b5563', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                  Le sud de l'île connaît une croissance exceptionnelle portée par le développement économique 
                  et l'expansion urbaine. Cette zone offre un excellent rapport qualité-prix pour les investisseurs.
                  <strong>De l'Étang-Salé à Saint-Philippe</strong>, un territoire en pleine expansion.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '1rem' : '2rem', marginBottom: '2rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Croissance démographique</strong> : +2,5% par an, la plus forte de l'île</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Pôle économique</strong> : Zone d'activités, commerces, université</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Prix attractifs</strong> : Meilleur rapport surface/prix de l'île</span>
                    </li>
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Potentiel de plus-value</strong> : Zone en pleine transformation</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Projets structurants</strong> : Nouvelle route du littoral, éco-quartiers</span>
                    </li>
                    <li style={{ marginBottom: '1rem', color: '#374151', display: 'flex', alignItems: 'start' }}>
                      <span style={{ color: '#D4AF37', marginRight: '0.5rem' }}>✓</span>
                      <span><strong>Vie culturelle</strong> : Marchés, festivals, animations toute l'année</span>
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/nos-projets" style={{ 
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #D4AF37, #BF9830)',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
                    transition: 'transform 0.3s'
                  }}>
                    Découvrir nos projets dans le Sud →
                  </Link>
                  <a href="#contact" style={{ 
                    display: 'inline-block',
                    background: '#1a1f2c',
                    color: 'white',
                    padding: '1rem 2.5rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)',
                    transition: 'transform 0.3s'
                  }}>
                    Prendre RDV →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Annonce Défiscalisation CIOP */}
      <section className="section" style={{ padding: '3rem 0', background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)' }}>
        <div className="container mx-auto px-8">
          <div className="text-center text-white">
            <div className="inline-block px-6 py-2 bg-gold-500/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
              <span className="text-gold-500">Nouveau : CIOP 2025-2029</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500">
              Optimisation Fiscale Exceptionnelle
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Profitez de <strong className="text-gold-500">35% de crédit d'impôt</strong> avec le nouveau dispositif CIOP.
              <br/>Plus que <strong className="text-gold-500">4 ans pour en bénéficier</strong> (jusqu'en 2029).
            </p>
            <Link to="/investissement-defiscalisation" className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-darkblue-900 px-8 py-3 rounded-full text-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-105 shadow-lg">
              Calculer mes économies d'impôts →
            </Link>
            <p className="text-sm mt-4 opacity-70">
              Étude personnalisée gratuite • Nos experts vous rappellent sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* Section Défiscalisation - Désactivée (section descriptive et calculateur supprimés)
      <DefiscalisationSection /> */}


      {/* Section Contact Immobilier */}
      <section id="contact" className="section" style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#D4AF37', fontWeight: '600', fontSize: '0.875rem' }}>CONTACT</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>
              Concrétisez Votre Projet Immobilier
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginTop: '1rem' }}>
              Prenez rendez-vous avec notre conseiller commercial
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Demande d'Information</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                  type="text" 
                  placeholder="Nom et Prénom *" 
                  required
                  style={{ 
                    padding: '0.875rem', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }} 
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required
                  style={{ 
                    padding: '0.875rem', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }} 
                />
                <input 
                  type="tel" 
                  placeholder="Téléphone *" 
                  required
                  style={{ 
                    padding: '0.875rem', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }} 
                />
                <select style={{ 
                  padding: '0.875rem', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>
                  <option>Type de lodge intéressé</option>
                  <option>Lodge T3 - 85m²</option>
                  <option>Lodge T4 - 110m²</option>
                  <option>Lodge T5 - 135m²</option>
                  <option>Je ne sais pas encore</option>
                </select>
                <textarea 
                  placeholder="Votre projet (optionnel)" 
                  rows="4" 
                  style={{ 
                    padding: '0.875rem', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
                <button type="submit" style={{ 
                  background: 'linear-gradient(135deg, #D4AF37, #BF9830)',
                  color: 'white',
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}>
                  Demander une brochure
                </button>
              </form>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>Bureau de Vente</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <strong style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Adresse</strong><br />
                  2 rue Jean Paul Sartre<br />
                  97419 La Possession<br />
                  La Réunion
                </div>
                <div>
                  <strong style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Téléphone</strong><br />
                  <a href="tel:+262262667988" style={{ color: '#374151', fontSize: '1.25rem', fontWeight: '600' }}>
                    0262 66 79 88
                  </a>
                </div>
                <div>
                  <strong style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Email</strong><br />
                  <a href="mailto:Info@lodgesparadise.com" style={{ color: '#374151' }}>
                    Info@lodgesparadise.com
                  </a>
                </div>
                <div>
                  <strong style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Horaires Bureau de Vente</strong><br />
                  Lundi - Samedi : 9h - 18h<br />
                  <span style={{ color: '#D4AF37', fontWeight: '600' }}>Sur rendez-vous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default RealEstateApp;