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
      title: "Structure Métallique Premium",
      description: "Charpentes métalliques galvanisées résistantes aux conditions cycloniques, ossatures en acier thermolaqué, structures porteuses garantissant stabilité et durabilité exceptionnelles.",
      features: ["Résistance cyclonique", "Galvanisation à chaud", "Garantie décennale", "Design sur-mesure"]
    },
    {
      title: "Bois Exotiques Nobles",
      description: "Essences rares sélectionnées : teck de Birmanie, ipé du Brésil, padouk d'Afrique. Bois imputrescibles naturellement résistants aux termites et à l'humidité tropicale.",
      features: ["Certification FSC", "Classe 4 naturelle", "Durée de vie 50+ ans", "Finition huilée naturelle"]
    },
    {
      title: "Pierre de Lave Authentique",
      description: "Pierre volcanique extraite localement à La Réunion. Matériau noble offrant une isolation thermique naturelle et une esthétique unique avec ses nuances de gris anthracite.",
      features: ["100% locale", "Isolation naturelle", "Résistance extrême", "Patine naturelle"]
    },
    {
      title: "Verre Architectural & Baies Vitrées",
      description: "Grandes baies vitrées coulissantes jusqu'à 6m d'ouverture, verres feuilletés sécurisés, double vitrage à contrôle solaire. Luminosité maximale et protection UV optimale.",
      features: ["Anti-UV", "Isolation acoustique", "Sécurité renforcée", "Motorisation possible"]
    },
    {
      title: "Garde-Corps en Verre Trempé",
      description: "Garde-corps minimalistes en verre trempé 12mm, fixations inox marine 316L. Design épuré offrant une vue dégagée tout en garantissant sécurité et conformité aux normes.",
      features: ["Verre securit 12mm", "Inox marine 316L", "Norme NF P01-012", "Transparence totale"]
    },
    {
      title: "Finitions & Assemblages Premium",
      description: "Assemblages traditionnels tenon-mortaise pour les structures bois, visserie inox marine, joints d'étanchéité EPDM. Chaque détail pensé pour la durabilité.",
      features: ["Assemblages traditionnels", "Visserie marine", "Joints haute performance", "Garantie 25 ans"]
    }
  ];

  return (
    <>
      <SEO 
        title="Matériaux Nobles | Structure Métallique, Bois Exotiques & Pierre de Lave - Lodges Paradise"
        description="Découvrez notre sélection exclusive de matériaux nobles : structure métallique galvanisée, bois exotiques premium (teck, ipé, padouk), pierre de lave locale de La Réunion, grandes baies vitrées et garde-corps en verre. Construction durable garantie 25 ans."
        keywords="matériaux nobles réunion, structure métallique, bois exotiques, teck, ipé, padouk, pierre de lave, grandes baies vitrées, garde-corps verre, construction durable, certification FSC, HQE réunion"
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
              <li><Link to="/materiaux-nobles" style={{ textDecoration: 'none', color: '#D4AF37', fontWeight: 'bold' }}>Matériaux</Link></li>
              <li><Link to="/zones-implantation" style={{ textDecoration: 'none', color: '#1f2937' }}>Zones</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', background: '#D4AF37', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', color: 'white' }}>Contact</Link></li>
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
                <div className="h-48 bg-gradient-to-br from-gold-400 to-gold-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mr-3"></span>
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
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-3">Durabilité Exceptionnelle</h3>
                <p className="text-gray-600">
                  Résistance aux conditions tropicales : humidité, UV intenses, variations thermiques et contraintes cycloniques.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-3">Esthétique Intemporelle</h3>
                <p className="text-gray-600">
                  Les matériaux nobles vieillissent avec grâce, développant une patine naturelle qui enrichit leur caractère.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
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