import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

// Composant pour le modèle 3D de La Réunion
function ReunionModel({ onZoneClick, selectedZone }) {
  const { scene } = useGLTF('/la_reunion_zones_web.glb');
  const modelRef = useRef();
  const [hovered, setHovered] = useState(null);
  const [clickableZones, setClickableZones] = useState([]);
  
  // Appliquer les matériaux et rendre les zones cliquables
  useEffect(() => {
    if (scene) {
      const zones = [];
      scene.traverse((child) => {
        if (child.isMesh) {
          // Activer les ombres
          child.castShadow = true;
          child.receiveShadow = true;
          
          // S'assurer que le matériau est visible
          if (child.material) {
            child.material.needsUpdate = true;
            // Forcer le rendu double face pour voir les textures
            child.material.side = THREE.DoubleSide;
          }
          
          // Marquer les zones cliquables
          // Zone_Sud et Zone_Ouest doivent être cliquables
          if (child.name === 'Zone_Sud' || child.name === 'Zone_Ouest') {
            zones.push(child);
            child.userData.clickable = true;
            
            // Mapper les zones selon leur fonction dans l'app
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

  // Gestion du clic sur les zones
  const handleClick = (event) => {
    event.stopPropagation();
    const object = event.object;
    
    // Vérifier si l'objet ou ses parents sont cliquables
    let currentObj = object;
    while (currentObj) {
      if (currentObj.userData && currentObj.userData.clickable) {
        onZoneClick(currentObj.userData.zoneName);
        return;
      }
      // Vérifier aussi par le nom
      if (currentObj.name === 'Zone_Ouest') {
        onZoneClick('ouest');
        return;
      } else if (currentObj.name === 'Zone_Sud') {
        onZoneClick('sud');
        return;
      }
      currentObj = currentObj.parent;
    }
  };

  // Gestion du survol
  const handlePointerOver = (event) => {
    event.stopPropagation();
    const object = event.object;
    
    // Chercher dans toute la hiérarchie
    let currentObj = object;
    while (currentObj) {
      if (currentObj.userData && currentObj.userData.clickable) {
        setHovered(currentObj.name);
        document.body.style.cursor = 'pointer';
        // Effet de surbrillance
        if (currentObj.material) {
          currentObj.material.emissive = new THREE.Color(0x444444);
          currentObj.material.emissiveIntensity = 0.3;
        }
        return;
      }
      // Vérifier aussi par le nom
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
    // Retirer la surbrillance uniquement des zones cliquables
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
      
      {/* Marqueur Saint-Gilles (Zone Ouest) */}
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
          Saint-Gilles
        </div>
      </Html>
      
      {/* Marqueur Saint-Pierre (Zone Sud) */}
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
          Saint-Pierre
        </div>
      </Html>
    </group>
  );
}

// Composant principal
export default function LaReunion3D({ onZoneSelect }) {
  const [selectedZone, setSelectedZone] = useState('ouest');

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
    if (onZoneSelect) {
      onZoneSelect(zone);
    }
  };

  return (
    <div style={{ width: '100%', height: window.innerWidth < 768 ? '350px' : '700px', position: 'relative', minHeight: '350px' }}>
      <Canvas
        camera={{ position: [-8, 8, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Éclairage amélioré */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={0.8} />
        <pointLight position={[0, -10, 0]} intensity={0.5} />
        
        {/* Modèle 3D avec suspense pour le chargement */}
        <Suspense fallback={
          <Html center>
            <div style={{ color: '#4B5563', fontSize: '18px', fontWeight: '500' }}>
              Chargement du modèle 3D...
            </div>
          </Html>
        }>
          <ReunionModel 
            onZoneClick={handleZoneClick}
            selectedZone={selectedZone}
          />
        </Suspense>
        
        {/* Pas de contrôles de caméra - vue fixe */}
      </Canvas>
      
      {/* Légende des zones */}
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
              background: selectedZone === 'ouest' ? '#DC2626' : '#EF4444', 
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
      
      {/* Instructions */}
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
    </div>
  );
}

// Précharger le modèle GLB
useGLTF.preload('/la_reunion_zones_web.glb');