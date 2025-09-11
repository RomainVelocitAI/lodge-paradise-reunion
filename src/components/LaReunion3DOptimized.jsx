import React, { useState, useRef, Suspense, useEffect, lazy } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

// Image de fallback pour mobile et chargement
const MapFallback = ({ onZoneClick, selectedZone }) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'relative',
      background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      {/* Image de la carte */}
      <img 
        src="https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=600&fit=crop"
        alt="Île de La Réunion"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9
        }}
      />
      
      {/* Overlay avec zones cliquables */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Zone Ouest - Saint-Gilles */}
        <div 
          onClick={() => {
            onZoneClick('ouest');
            // Auto-scroll vers la card
            setTimeout(() => {
              const zoneCard = document.querySelector('#zone-content-card');
              if (zoneCard) {
                zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 100);
          }}
          style={{
            position: 'absolute',
            left: '20%',
            top: '40%',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{
            background: selectedZone === 'ouest' ? '#0a0f1c' : '#1a1f2c',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 'bold',
            fontSize: '14px',
            transform: selectedZone === 'ouest' ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}>
            <div>Zone Ouest</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Secteur Littoral</div>
          </div>
          <div style={{
            width: '12px',
            height: '12px',
            background: selectedZone === 'ouest' ? '#0a0f1c' : '#1a1f2c',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid white'
          }}></div>
        </div>

        {/* Zone Sud - Saint-Pierre */}
        <div 
          onClick={() => {
            onZoneClick('sud');
            // Auto-scroll vers la card
            setTimeout(() => {
              const zoneCard = document.querySelector('#zone-content-card');
              if (zoneCard) {
                zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 100);
          }}
          style={{
            position: 'absolute',
            right: '25%',
            bottom: '30%',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <div style={{
            background: selectedZone === 'sud' ? '#BF9830' : '#D4AF37',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 'bold',
            fontSize: '14px',
            transform: selectedZone === 'sud' ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}>
            <div>Zone Sud</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Secteur Dynamique</div>
          </div>
          <div style={{
            width: '12px',
            height: '12px',
            background: selectedZone === 'sud' ? '#BF9830' : '#D4AF37',
            borderRadius: '50%',
            position: 'absolute',
            top: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '2px solid white'
          }}></div>
        </div>
      </div>

      {/* Titre */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '10px 25px',
        borderRadius: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: '18px', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #6366F1, #10B981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Nos Zones d'Investissement
        </h3>
      </div>

      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        color: '#4B5563',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        Cliquez sur une zone pour découvrir nos projets
      </div>
    </div>
  );
};

// Composant pour le modèle 3D (desktop uniquement)
function ReunionModel({ onZoneClick, selectedZone }) {
  const { scene } = useGLTF('/la_reunion_zones_web.glb');
  const modelRef = useRef();
  const [hovered, setHovered] = useState(null);
  const [clickableZones, setClickableZones] = useState([]);
  
  useEffect(() => {
    if (scene) {
      const zones = [];
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            child.material.needsUpdate = true;
            child.material.side = THREE.DoubleSide;
          }
          
          if (child.name === 'Zone_Sud' || child.name === 'Zone_Ouest') {
            zones.push(child);
            child.userData.clickable = true;
            
            if (child.name === 'Zone_Ouest') {
              child.userData.zoneName = 'ouest';
            } else if (child.name === 'Zone_Sud') {
              child.userData.zoneName = 'sud';
            }
          }
        }
      });
      setClickableZones(zones);
    }
  }, [scene]);

  const handleClick = (event) => {
    event.stopPropagation();
    const object = event.object;
    
    let currentObj = object;
    while (currentObj) {
      if (currentObj.userData && currentObj.userData.clickable) {
        onZoneClick(currentObj.userData.zoneName);
        // Auto-scroll vers la card
        setTimeout(() => {
          const zoneCard = document.querySelector('#zone-content-card');
          if (zoneCard) {
            zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return;
      }
      if (currentObj.name === 'Zone_Ouest') {
        onZoneClick('ouest');
        // Auto-scroll vers la card
        setTimeout(() => {
          const zoneCard = document.querySelector('#zone-content-card');
          if (zoneCard) {
            zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return;
      } else if (currentObj.name === 'Zone_Sud') {
        onZoneClick('sud');
        // Auto-scroll vers la card
        setTimeout(() => {
          const zoneCard = document.querySelector('#zone-content-card');
          if (zoneCard) {
            zoneCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return;
      }
      currentObj = currentObj.parent;
    }
  };

  const handlePointerOver = (event) => {
    event.stopPropagation();
    const object = event.object;
    
    let currentObj = object;
    while (currentObj) {
      if (currentObj.userData && currentObj.userData.clickable) {
        setHovered(currentObj.name);
        document.body.style.cursor = 'pointer';
        if (currentObj.material) {
          currentObj.material.emissive = new THREE.Color(0x444444);
          currentObj.material.emissiveIntensity = 0.3;
        }
        return;
      }
      if (currentObj.name === 'Zone_Ouest' || currentObj.name === 'Zone_Sud') {
        setHovered(currentObj.name);
        document.body.style.cursor = 'pointer';
        if (currentObj.material) {
          currentObj.material.emissive = new THREE.Color(0x444444);
          currentObj.material.emissiveIntensity = 0.3;
        }
        return;
      }
      currentObj = currentObj.parent;
    }
  };

  const handlePointerOut = (event) => {
    setHovered(null);
    document.body.style.cursor = 'default';
    clickableZones.forEach((zone) => {
      if (zone.material) {
        zone.material.emissive = new THREE.Color(0x000000);
        zone.material.emissiveIntensity = 0;
      }
    });
  };

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene} 
        scale={[10, 10, 10]}
        position={[0, 0, 0]}
        rotation={[0, 3 * Math.PI / 4 + Math.PI / 6 + Math.PI / 18, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      
      <Html position={[-3.5, 0.5, -1]} center>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '6px 10px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 'bold',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          Zone Ouest
        </div>
      </Html>
      
      <Html position={[0, -3, 2]} center>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '6px 10px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 'bold',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          Zone Sud
        </div>
      </Html>
    </group>
  );
}

// Composant principal optimisé
export default function LaReunion3DOptimized({ onZoneSelect }) {
  const [selectedZone, setSelectedZone] = useState('ouest');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Timeout pour éviter le blocage
    timeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setLoadError(true);
        setIsLoading(false);
      }
    }, 15000); // 15 secondes max pour charger le modèle 3D

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading]);

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
    if (onZoneSelect) {
      onZoneSelect(zone);
    }
  };

  // Sur mobile ou si erreur de chargement, utiliser l'image
  if (isMobile || loadError) {
    return (
      <div style={{ width: '100%', height: '350px', position: 'relative' }}>
        <MapFallback onZoneClick={handleZoneClick} selectedZone={selectedZone} />
      </div>
    );
  }

  // Sur desktop, charger le modèle 3D avec lazy loading
  return (
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
          borderRadius: '12px',
          zIndex: 10
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '4px solid #E5E7EB',
              borderTopColor: '#6366F1',
              borderRadius: '50%',
              margin: '0 auto 20px',
              animation: 'spin 1s linear infinite'
            }}></div>
            <div style={{ color: '#4B5563', fontSize: '18px', fontWeight: '500' }}>
              Chargement de la carte 3D...
            </div>
            <div style={{ color: '#9CA3AF', fontSize: '14px', marginTop: '8px' }}>
              Cela peut prendre quelques secondes
            </div>
          </div>
        </div>
      )}
      
      <Canvas
        camera={{ position: [-8, 8, 8], fov: 50 }}
        style={{ 
          background: 'transparent',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease'
        }}
        onCreated={() => {
          clearTimeout(timeoutRef.current);
          setIsLoading(false);
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.8} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <ReunionModel 
            onZoneClick={handleZoneClick}
            selectedZone={selectedZone}
          />
        </Suspense>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#374151' }}>Zones cliquables</h4>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={() => handleZoneClick('ouest')}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              background: selectedZone === 'ouest' ? '#0a0f1c' : '#1a1f2c', 
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}></div>
            <span style={{ fontSize: '12px', color: '#4B5563', fontWeight: selectedZone === 'ouest' ? 'bold' : 'normal' }}>Zone Ouest</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={() => handleZoneClick('sud')}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              background: selectedZone === 'sud' ? '#BF9830' : '#D4AF37', 
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}></div>
            <span style={{ fontSize: '12px', color: '#4B5563', fontWeight: selectedZone === 'sud' ? 'bold' : 'normal' }}>Zone Sud</span>
          </div>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '12px',
        color: '#4B5563',
        maxWidth: '180px'
      }}>
        <strong style={{ color: '#374151' }}>Cliquez sur une zone</strong><br/>
        pour afficher ses propriétés
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Précharger le modèle GLB uniquement sur desktop
if (typeof window !== 'undefined' && window.innerWidth >= 768) {
  useGLTF.preload('/la_reunion_zones_web.glb');
}