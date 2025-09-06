import React from 'react';
import * as Icons from 'lucide-react';
const { Bed, Users, Wifi, Car, Pool, Mountain } = Icons;
import './Properties.css';

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "Villa Sunset Paradise",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      price: "350€",
      period: "/ nuit",
      beds: 4,
      guests: 8,
      features: ["Piscine privée", "Vue océan", "Jacuzzi"],
      popular: true
    },
    {
      id: 2,
      name: "Lodge Tropical Garden",
      image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?q=80&w=2070",
      price: "280€",
      period: "/ nuit",
      beds: 3,
      guests: 6,
      features: ["Jardin tropical", "Piscine", "Terrasse"]
    },
    {
      id: 3,
      name: "Suite Ocean View",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      price: "450€",
      period: "/ nuit",
      beds: 5,
      guests: 10,
      features: ["Vue panoramique", "Spa privé", "Beach access"]
    },
    {
      id: 4,
      name: "Villa Mountain Retreat",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      price: "320€",
      period: "/ nuit",
      beds: 3,
      guests: 6,
      features: ["Vue montagne", "Cheminée", "Terrasse BBQ"]
    }
  ];

  const amenities = [
    { icon: <Wifi size={20} />, name: "WiFi Fibre" },
    { icon: <Car size={20} />, name: "Parking privé" },
    { icon: <Pool size={20} />, name: "Piscine chauffée" },
    { icon: <Mountain size={20} />, name: "Vue exceptionnelle" }
  ];

  return (
    <section id="properties" className="section properties">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nos Propriétés</span>
          <h2 className="section-title">
            Lodges d'exception <span className="text-gradient">à découvrir</span>
          </h2>
          <p className="section-description">
            Chaque lodge a été sélectionné pour son caractère unique, 
            son confort exceptionnel et ses prestations haut de gamme.
          </p>
        </div>

        <div className="properties-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              {property.popular && (
                <span className="property-badge">Populaire</span>
              )}
              <div className="property-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-content">
                <h3 className="property-name">{property.name}</h3>
                <div className="property-price">
                  <span className="price">{property.price}</span>
                  <span className="period">{property.period}</span>
                </div>
                <div className="property-info">
                  <div className="info-item">
                    <Bed size={16} />
                    <span>{property.beds} chambres</span>
                  </div>
                  <div className="info-item">
                    <Users size={16} />
                    <span>{property.guests} personnes</span>
                  </div>
                </div>
                <div className="property-features">
                  {property.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="btn btn-primary property-btn">
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="amenities">
          <h3 className="amenities-title">Équipements standards dans tous nos lodges</h3>
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <span className="amenity-name">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="properties-cta">
          <a href="#contact" className="btn btn-primary">
            Voir toutes les propriétés
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;