import React from 'react';
import { CircularProjects } from './CircularProjects';

const ProjectCatalog = () => {
  const projectTypes = [
    {
      name: "Villas Individuelles Premium",
      designation: "Investissement locatif haut de gamme",
      quote: "Villas d'exception avec piscine privée, matériaux nobles et finitions luxueuses. Idéales pour la location saisonnière avec des rendements optimisés.",
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      link: "/nos-projets"
    },
    {
      name: "Immeubles de Rapport",
      designation: "Rentabilité optimale en Pinel Outre-Mer",
      quote: "Programmes collectifs de 6 à 12 logements, parfaitement dimensionnés pour maximiser votre défiscalisation tout en garantissant une gestion simplifiée.",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      link: "/nos-projets"
    },
    {
      name: "Résidences de Tourisme",
      designation: "LMNP avec services de conciergerie",
      quote: "Résidences services avec gestion locative déléguée, services hôteliers et conciergerie premium Île en Rêve pour un investissement sans contrainte.",
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      link: "/nos-projets"
    },
    {
      name: "Projets Sur-Mesure",
      designation: "Conception personnalisée selon vos besoins",
      quote: "Développement de projets uniques adaptés à vos objectifs patrimoniaux spécifiques. De la villa d'architecte au complexe résidentiel exclusif.",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      link: "/nos-projets"
    },
    {
      name: "Lotissements Privés",
      designation: "Programmes d'ensemble harmonieux",
      quote: "Ensembles résidentiels fermés et sécurisés avec espaces communs aménagés, parfaits pour créer des communautés exclusives dans les meilleurs quartiers.",
      src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&h=600&fit=crop",
      link: "/nos-projets"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">NOTRE CATALOGUE</span>
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