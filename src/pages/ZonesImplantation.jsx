import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const ZonesImplantation = () => {
  const zoneImages = [
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070', alt: 'Zone 1' },
    { src: 'https://images.unsplash.com/photo-1540202404-a2f29a6b4524?q=80&w=2069', alt: 'Zone 2' },
    { src: 'https://images.unsplash.com/photo-1584536286788-9c3604e09857?q=80&w=2070', alt: 'Zone 3' },
    { src: 'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?q=80&w=2070', alt: 'Zone 4' },
    { src: 'https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=2074', alt: 'Zone 5' }
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
      
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        background: 'white', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#1f2937', fontSize: '1.5rem', fontWeight: 'bold' }}>
              LODGES PARADISE
            </Link>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}>
              <li><Link to="/nos-projets" style={{ textDecoration: 'none', color: '#1f2937' }}>Nos Projets</Link></li>
              <li><Link to="/catalogue-lodges" style={{ textDecoration: 'none', color: '#1f2937' }}>Catalogue</Link></li>
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#1f2937' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#f59e0b', fontWeight: 'bold' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

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
                        <span className="text-amber-500 mr-2">✓</span>
                        <span className="text-gray-700">{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-white">
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

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Lodges Paradise - Promoteur Immobilier Premium à La Réunion</p>
          <p className="mt-2 opacity-80">
            2 rue Jean Paul Sartre, 97419 La Possession | Tél: 0262 66 79 88
          </p>
        </div>
      </footer>
    </>
  );
};

export default ZonesImplantation;