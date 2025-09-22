import React from 'react';
import { CircularProjects } from './CircularProjects';

const ProjectCatalog = () => {
  const projectTypes = [
    {
      name: "Villas Premium 4 Façades",
      designation: "Construction haut de gamme avec piscine",
      quote: "Villas d'exception de 110 à 180m² avec piscine privée, domotique et finitions luxueuses. 3 modèles disponibles : Moderne, Prestige et Grand Prestige.",
      src: "/images/projets/villas/essentielle-real.jpg",
      link: "/villas-premium"
    },
    {
      name: "Maisons 3 Façades",
      designation: "Solutions adaptées à tous les budgets",
      quote: "Maisons de 45 à 95m² parfaitement conçues. 3 types disponibles : T2 Compact idéal investissement, T3 Famille avec garage, T4+ Confort avec grand jardin.",
      src: "/villa3.jpg",
      link: "/maisons-3-facades"
    },
    {
      name: "Bâtiments Multiples",
      designation: "Appartements du T2 au T5 en résidence",
      quote: "Appartements de 35 à 105m² en résidence standing. Du studio optimisé au T5 avec vue mer. Parkings, terrasses et prestations premium.",
      src: "/images/projets/batiments/t4-appartement-real.jpg",
      link: "/batiments-multiples"
    },
    {
      name: "Projets Sur-Mesure",
      designation: "Conception personnalisée selon vos besoins",
      quote: "Développement de projets uniques adaptés à vos objectifs patrimoniaux. De la villa d'architecte au complexe résidentiel exclusif.",
      src: "/images/projets/villas/exception-real.jpg",
      link: "/contact"
    },
    {
      name: "Programme Défiscalisation CIOP",
      designation: "Jusqu'à 35% de crédit d'impôt",
      quote: "Optimisez votre fiscalité avec nos programmes éligibles CIOP. Gestion locative clé en main avec notre partenaire Île en Rêve.",
      src: "/images/projets/batiments/t5-grand-real.jpg",
      link: "/investissement-defiscalisation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-bold text-xl uppercase tracking-wider">Notre catalogue</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Palette Produits Diversifiée
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Immeubles de rapport, villas individuelles et projets sur-mesure.
            Découvrez notre catalogue en développement constant, conçu avec des matériaux d'exception.
          </p>
        </div>

        <div className="flex justify-center">
          <CircularProjects
            projects={projectTypes}
            autoplay={true}
            colors={{
              name: "#111827",
              designation: "#BF9830",
              testimony: "#4B5563",
              arrowBackground: "#D4AF37",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#BF9830"
            }}
            fontSizes={{
              name: "1.875rem",
              designation: "1rem",
              quote: "1.125rem"
            }}
          />
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discutez de votre projet avec nos experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCatalog;