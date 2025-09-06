import React from 'react';
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from './hero-gallery-scroll-animation';

const HeroGallery = ({ title, subtitle, images }) => {
  return (
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
          <BentoGrid className="max-w-7xl mx-auto w-full h-[600px] md:h-[700px]">
            {images.map((image, index) => (
              <BentoCell key={index}>
                <img 
                  src={image.src} 
                  alt={image.alt || `Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </BentoCell>
            ))}
          </BentoGrid>
        </div>
      </div>
    </ContainerScroll>
  );
};

export default HeroGallery;