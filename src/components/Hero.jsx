import React from 'react';
import * as Icons from 'lucide-react';
const { ChevronRight, Star, MapPin } = Icons;
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070" 
          alt="Lodge Paradise - Vue panoramique"
          className="hero-image"
        />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            <Star size={16} fill="currentColor" />
            <span>Expérience Premium depuis 2015</span>
          </div>
          
          <h1 className="hero-title">
            Votre Paradis Tropical 
            <span className="text-gradient"> à La Réunion</span>
          </h1>
          
          <p className="hero-description">
            Découvrez l'excellence du luxe tropical dans nos lodges d'exception. 
            Une expérience unique où confort haut de gamme et nature spectaculaire 
            se rencontrent pour créer des souvenirs inoubliables.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">47</span>
              <span className="stat-label">Lodges Premium</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clients Satisfaits</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Conciergerie</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#properties" className="btn btn-primary">
              Découvrir nos lodges
              <ChevronRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Réserver maintenant
            </a>
          </div>

          <div className="hero-location">
            <MapPin size={16} />
            <span>Saint-Gilles-les-Bains, La Réunion</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;