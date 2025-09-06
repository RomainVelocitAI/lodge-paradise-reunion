import React from 'react';
import * as Icons from 'lucide-react';
const { Award, TrendingUp, Heart, Globe } = Icons;
import './About.css';

const About = () => {
  const values = [
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "Standards de qualité les plus élevés pour chaque propriété"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "L'amour du détail et du service personnalisé"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Innovation",
      description: "Technologies modernes pour simplifier votre expérience"
    },
    {
      icon: <Globe size={24} />,
      title: "Durabilité",
      description: "Engagement écologique et respect de l'environnement"
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">À Propos</span>
            <h2 className="section-title">
              L'excellence au service de vos <span className="text-gradient">rêves tropicaux</span>
            </h2>
            <p className="about-text">
              Depuis 2015, Lodge Paradise redéfinit l'art de l'hospitalité à La Réunion. 
              Notre mission est simple : transformer chaque séjour en une expérience 
              inoubliable en alliant luxe, confort et authenticité.
            </p>
            <p className="about-text">
              Avec plus de <strong>47 propriétés d'exception</strong> et une équipe 
              passionnée de <strong>25 professionnels</strong>, nous créons des moments 
              magiques pour plus de <strong>2000 voyageurs</strong> chaque année.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">Années d'expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2000+</span>
                <span className="stat-label">Clients satisfaits</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Taux de satisfaction</span>
              </div>
            </div>

            <div className="about-values">
              <h3>Nos valeurs</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-icon">{value.icon}</div>
                    <div>
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-description">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-images">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070" 
                alt="Vue de La Réunion"
                className="about-image main-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">Île de La Réunion</span>
              </div>
            </div>
            <div className="secondary-images">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080" 
                alt="Intérieur lodge"
                className="about-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070" 
                alt="Piscine lodge"
                className="about-image"
              />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <blockquote>
            <p>"Une expérience absolument magique ! Le lodge était parfait, 
            la vue à couper le souffle et le service de conciergerie exceptionnel. 
            Nous reviendrons sans hésiter !"</p>
            <footer>
              <strong>Marie & Jean Dupont</strong>
              <span>Clients depuis 2019</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;