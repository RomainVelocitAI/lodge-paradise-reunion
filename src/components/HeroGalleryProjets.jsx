import React, { useState, useEffect, useContext } from 'react';
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from './hero-gallery-scroll-animation';
import { motion, useScroll, useTransform } from "motion/react";

const HeroGalleryProjets = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const title = "Nos Projets";
  const subtitle = "Découvrez nos réalisations exceptionnelles à La Réunion";
  
  const images = [
    { src: '/client-image-1.jpg', alt: 'Projet Lodge Paradise 1' },
    { src: '/client-image-2.jpg', alt: 'Projet Lodge Paradise 2' },
    { src: '/client-image-3.jpg', alt: 'Projet Lodge Paradise 3' },
    { src: '/client-image-4.jpg', alt: 'Projet Lodge Paradise 4' },
    { src: '/villa1.jpg', alt: 'Projet Lodge Paradise 5' }
  ];

  // On mobile, show a simple hero without animations
  if (isMobile) {
    return (
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4 text-center">
            {title}
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-center mb-8">
            {subtitle}
          </p>
          <div className="grid grid-cols-1 gap-4">
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.alt || `Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop version with animations
  return (
    <>
      <ContainerScroll>
        <ContainerScale>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ContainerScale>

        <div className="h-[200vh] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center px-4">
            <BentoGrid className="max-w-7xl mx-auto">
              {images.map((image, index) => {
                // Distribute images around the text
                const positions = [
                  { initialX: "-150%", initialY: "-100%" }, // Top-left
                  { initialX: "150%", initialY: "-100%" },  // Top-right
                  { initialX: "200%", initialY: "0%" },     // Right
                  { initialX: "150%", initialY: "100%" },    // Bottom-right
                  { initialX: "-150%", initialY: "100%" }    // Bottom-left
                ];
                const pos = positions[index] || { initialX: "0%", initialY: "0%" };
                
                return (
                  <BentoCell key={index} initialX={pos.initialX} initialY={pos.initialY}>
                    <img 
                      src={image.src} 
                      alt={image.alt || `Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                  </BentoCell>
                );
              })}
            </BentoGrid>
          </div>
        </div>
      </ContainerScroll>
      {/* Spacer to prevent overlap with next section on desktop */}
      <div className="h-64" />
    </>
  );
};

export default HeroGalleryProjets;