import React from 'react';
import * as Icons from 'lucide-react';
const { Home, Users, Calendar, Shield, Sparkles, Clock } = Icons;
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Lodges Premium",
      description: "47 propriétés d'exception avec vue panoramique, piscine privée et équipements haut de gamme pour un séjour inoubliable.",
      features: ["Piscine privée", "Vue panoramique", "Design contemporain"]
    },
    {
      icon: <Users size={32} />,
      title: "Conciergerie 24/7",
      description: "Service de conciergerie personnalisé disponible à tout moment pour répondre à vos besoins et organiser vos activités.",
      features: ["Service personnalisé", "Réservations", "Assistance continue"]
    },
    {
      icon: <Calendar size={32} />,
      title: "Location Flexible",
      description: "Location saisonnière ou longue durée avec des formules adaptées à vos besoins et votre budget.",
      features: ["Court terme", "Long terme", "Tarifs dégressifs"]
    },
    {
      icon: <Shield size={32} />,
      title: "Gestion Complète",
      description: "Nous gérons l'intégralité de votre bien : entretien, ménage, check-in/out, maintenance technique.",
      features: ["Entretien régulier", "Ménage premium", "Maintenance 24/7"]
    },
    {
      icon: <Sparkles size={32} />,
      title: "Services Premium",
      description: "Chef privé, spa à domicile, excursions exclusives, transferts VIP pour une expérience sur mesure.",
      features: ["Chef privé", "Spa & bien-être", "Activités exclusives"]
    },
    {
      icon: <Clock size={32} />,
      title: "Check-in Express",
      description: "Arrivée et départ facilités avec notre système de check-in/out express et remise des clés sécurisée.",
      features: ["Arrivée flexible", "Départ simplifié", "Assistance dédiée"]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nos Services</span>
          <h2 className="section-title">
            Une expérience <span className="text-gradient">sur mesure</span>
          </h2>
          <p className="section-description">
            Découvrez notre gamme complète de services haut de gamme conçus 
            pour transformer votre séjour en une expérience exceptionnelle.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p className="cta-text">
            Besoin d'un service personnalisé ? Notre équipe est là pour vous.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;