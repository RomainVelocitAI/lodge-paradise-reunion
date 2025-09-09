import React from 'react';
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from './animated-slideshow';

const MaterialsSlideshow = () => {
  const materials = [
    {
      title: "Recherche & Acquisition de Terrains",
      description: "Identification de terrains dans les secteurs les plus dynamiques et à fort potentiel de valorisation de La Réunion",
      image: "/materials-5-zones-strategiques.webp"
    },
    {
      title: "Gestion Administrative Complète",
      description: "Prise en charge intégrale des démarches : permis de construire, autorisations, suivi administratif et juridique",
      image: "/materials-4-maitrise-oeuvre.webp"
    },
    {
      title: "Construction Premium",
      description: "Réalisation de villas haut de gamme avec matériaux nobles : structure métallique, bois exotiques, pierre de lave, grandes baies vitrées et garde-corps en verre",
      image: "/materials-1-bois-exotiques.webp"
    },
    {
      title: "Optimisation Fiscale",
      description: "Accompagnement complet pour la défiscalisation : Pinel Outre-Mer, LMNP, montage des dossiers",
      image: "/materials-6-excellence-qualite.webp"
    },
    {
      title: "Service Après-Vente",
      description: "Maintenance, entretien et préservation de votre patrimoine avec garantie de qualité sur le long terme",
      image: "/materials-3-construction-ecologique.webp"
    },
    {
      title: "Conciergerie Premium Île en Rêve",
      description: "Service de conciergerie haut de gamme pour la gestion locative et l'accueil de vos locataires",
      image: "/materials-2-pierre-lave.webp"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">NOTRE APPROCHE</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Votre Investissement Clé en Main
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            <strong>Lodge Paradise</strong> accompagne les investisseurs de A à Z : identification de terrains 
            dans des secteurs dynamiques à fort potentiel, gestion complète des démarches administratives et de construction, 
            optimisation fiscale et service de conciergerie premium avec notre partenaire <strong>Île en Rêve</strong>.
          </p>
        </div>

        <HoverSlider>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Side */}
            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    <TextStaggerHover
                      text={material.title}
                      index={index}
                      className="cursor-pointer hover:text-gold-500 transition-colors"
                    />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {material.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Side */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
              <HoverSliderImageWrap className="w-full h-full">
                {materials.map((material, index) => (
                  <HoverSliderImage
                    key={index}
                    index={index}
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ))}
              </HoverSliderImageWrap>
            </div>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
};

export default MaterialsSlideshow;