import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ZonesImplantation = () => {
  const zoneImages = [
    { src: '/zones-implantation.jpg', alt: 'Vue aérienne des zones' },
    { src: '/villa1.jpg', alt: 'Zone Ouest' },
    { src: '/villa2.jpg', alt: 'Zone Sud' },
    { src: '/villa3.jpg', alt: 'Littoral' },
    { src: '/villa4.jpg', alt: 'Mi-hauteur' }
  ];

  const zones = [
    {
      name: "Saint-Gilles les Bains",
      description: "Station balnéaire prisée de l'ouest, offrant plages, lagons et activités nautiques",
      attractions: ["Plage de l'Hermitage", "Port de plaisance", "Aquarium", "Restaurants et commerces"]
    },
    {
      name: "La Possession",
      description: "Ville dynamique en plein développement, idéalement située entre mer et montagne",
      attractions: ["Proximité Saint-Denis", "Accès rapide littoral", "Zones commerciales", "Nouveaux quartiers"]
    },
    {
      name: "Saint-Paul",
      description: "Capitale historique de l'ouest, combinant patrimoine et modernité",
      attractions: ["Marché forain", "Front de mer", "Centre culturel", "Zones d'activités"]
    },
    {
      name: "L'Étang-Salé",
      description: "Commune du sud-ouest reconnue pour sa plage de sable noir et sa forêt littorale",
      attractions: ["Plage de sable noir", "Forêt de l'Étang-Salé", "Golf 18 trous", "Bassin pirogue"]
    },
    {
      name: "Saint-Leu",
      description: "Paradis des sports de glisse avec un cadre de vie exceptionnel",
      attractions: ["Spot de surf mondial", "Parapente", "Centre-ville historique", "Kélonia"]
    },
    {
      name: "La Saline",
      description: "Secteur résidentiel recherché, proche des plus belles plages de l'île",
      attractions: ["Plage de la Saline", "Trou d'Eau", "Zone commerciale", "Proximité aéroport"]
    }
  ];

  return (
    <>
      <SEO 
        title="Zones d'Implantation | Lodges Paradise La Réunion"
        description="Découvrez nos zones d'implantation privilégiées à La Réunion : Saint-Gilles, La Possession, Saint-Paul. Investissez dans les meilleurs emplacements de l'île."
        keywords="zones implantation réunion, immobilier saint-gilles, lodges la possession, investissement saint-paul"
        canonical="https://lodgesparadise.com/zones-implantation"
      />
      
      <Header />

      <div className="pt-20">
        <HeroGallery 
          title="Zones d'Implantation Privilégiées"
          subtitle="Lodges Paradise sélectionne avec soin les meilleurs emplacements de La Réunion pour vos projets immobiliers. Des sites d'exception alliant beauté naturelle, dynamisme économique et qualité de vie."
          images={zoneImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Zones d'Implantation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{zone.name}</h3>
                  <p className="text-gray-600 mb-4">{zone.description}</p>
                  <div className="space-y-2">
                    {zone.attractions.map((attraction, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-gold-500 mr-2">✓</span>
                        <span className="text-gray-700">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Pourquoi Ces Zones ?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-3">Proximité Littorale</h3>
                <p>Accès privilégié aux plus belles plages et lagons de l'île</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Zones en Développement</h3>
                <p>Investissement dans des secteurs à fort potentiel de valorisation</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Qualité de Vie</h3>
                <p>Infrastructures modernes, commerces et services à proximité</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ZonesImplantation;