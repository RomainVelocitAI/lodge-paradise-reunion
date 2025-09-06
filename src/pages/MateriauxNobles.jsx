import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGallery from '../components/HeroGallery';

const MateriauxNobles = () => {
  const materialImages = [
    { src: 'https://images.unsplash.com/photo-1610421446243-c5b58fcb4228?q=80&w=2070', alt: 'Matériau 1' },
    { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070', alt: 'Matériau 2' },
    { src: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?q=80&w=2067', alt: 'Matériau 3' },
    { src: 'https://images.unsplash.com/photo-1600573472591-ee6bd3c12c3a?q=80&w=2070', alt: 'Matériau 4' },
    { src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2071', alt: 'Matériau 5' }
  ];

  const materiaux = [
    {
      title: "Aluminium & Menuiseries Haut de Gamme",
      description: "Menuiseries aluminium thermolaquées avec rupture de pont thermique, baies vitrées coulissantes grand format, pergolas bioclimatiques motorisées. Résistance optimale aux conditions tropicales et cycloniques.",
      features: ["Certification NF", "Garantie décennale", "Motorisation intégrée", "Finitions sur-mesure"]
    },
    {
      title: "Verre & Innovations Techniques",
      description: "Vitrages feuilletés sécurisés, verres à contrôle solaire, garde-corps en verre trempé, cloisons vitrées intérieures. Technologies de pointe pour luminosité et protection.",
      features: ["Protection UV", "Isolation acoustique", "Sécurité renforcée", "Traitement autonettoyant"]
    },
    {
      title: "Acier & Structures Métalliques",
      description: "Charpentes métalliques galvanisées, escaliers design en acier, structures pergolas, bardages métalliques ventilés. Durabilité et esthétique contemporaine garanties.",
      features: ["Galvanisation à chaud", "Résistance cyclonique", "Design personnalisé", "Maintenance réduite"]
    },
    {
      title: "Béton Architectonique & Enduits",
      description: "Béton matricé, béton ciré, enduits décoratifs à la chaux, revêtements minéraux. Finitions haut de gamme pour intérieurs et extérieurs d'exception.",
      features: ["Finitions artisanales", "Personnalisation totale", "Durabilité extrême", "Entretien facile"]
    },
    {
      title: "Composite & Matériaux Innovants",
      description: "Terrasses en composite haute densité, bardages fibro-ciment, panneaux stratifiés HPL, résines techniques. Alliance de performance et d'esthétique moderne.",
      features: ["Sans entretien", "Garantie 25 ans", "Résistance UV", "Écologique"]
    },
    {
      title: "Toiture & Étanchéité Premium",
      description: "Tuiles photovoltaïques, membranes EPDM, toitures végétalisées, systèmes d'étanchéité liquide. Solutions durables pour protection et performance énergétique.",
      features: ["Production d'énergie", "Isolation thermique", "Étanchéité garantie", "Longévité 30 ans"]
    }
  ];

  return (
    <>
      <SEO 
        title="Matériaux Nobles | Bois Exotiques & Pierre de Lave - Lodges Paradise"
        description="Découvrez notre sélection exclusive de matériaux nobles : bois exotiques premium (teck, ipé, padouk), pierre de lave locale de La Réunion. Construction écologique et durable garantie 25 ans."
        keywords="matériaux nobles réunion, bois exotiques, teck, ipé, padouk, pierre de lave, construction écologique, matériaux durables, certification FSC, HQE réunion"
        canonical="https://lodgesparadise.com/materiaux-nobles"
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
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#f59e0b', fontWeight: 'bold' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#f59e0b', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="pt-20">
        <HeroGallery 
          title="Matériaux Nobles & Excellence"
          subtitle="L'essence même de Lodges Paradise réside dans notre sélection rigoureuse de matériaux d'exception. Chaque matériau est choisi pour sa durabilité, son esthétique et son intégration harmonieuse dans l'environnement tropical de La Réunion."
          images={materialImages}
        />
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Une Philosophie de Construction Unique</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-16 text-gray-600">
            Chez Lodges Paradise, nous croyons que la qualité d'un projet immobilier commence par le choix des matériaux. 
            Notre approche combine tradition et innovation : nous puisons dans le savoir-faire ancestral de la construction 
            tropicale tout en intégrant les dernières innovations technologiques.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materiaux.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Les Avantages de Nos Matériaux Nobles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-3">Durabilité Exceptionnelle</h3>
                <p className="text-gray-600">
                  Résistance aux conditions tropicales : humidité, UV intenses, variations thermiques et contraintes cycloniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-3">Esthétique Intemporelle</h3>
                <p className="text-gray-600">
                  Les matériaux nobles vieillissent avec grâce, développant une patine naturelle qui enrichit leur caractère.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-3">Valeur Patrimoniale</h3>
                <p className="text-gray-600">
                  L'utilisation de matériaux premium augmente significativement la valeur de revente de votre bien.
                </p>
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

export default MateriauxNobles;