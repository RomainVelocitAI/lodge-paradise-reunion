import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
const { MapPin, Phone, Mail, Clock, Send, Check } = Icons;
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [location, setLocation] = useState('reunion'); // 'reunion', 'france', 'belgique'

  useEffect(() => {
    // Détection de la géolocalisation basée sur l'IP
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        // Détection selon le pays
        if (data.country_code === 'BE') {
          setLocation('belgique');
        } else if (data.country_code === 'FR' && data.region !== 'Réunion' && data.region !== 'La Réunion') {
          setLocation('france');
        } else {
          setLocation('reunion'); // Réunion et reste du monde
        }
      })
      .catch(error => {
        console.log('Erreur géolocalisation:', error);
        // En cas d'erreur, on reste sur Réunion par défaut
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 500);
  };

  const getContactInfo = () => {
    let addressContent, addressSubtitle, phoneContent;

    if (location === 'belgique') {
      addressContent = [
        { label: "Belgique :", value: "Avenue G. Bovesse 112 bte 17, 5100 Jambes-Namur" },
        { label: "La Réunion :", value: "8, ruelle boulot, 97 400 SAINT-DENIS" }
      ];
      phoneContent = [
        { label: "Réunion :", value: "+262(0)262 667988", href: "tel:+262262667988" },
        { label: "Belgique :", value: "+32(0)81 680441", href: "tel:+3281680441" }
      ];
    } else if (location === 'france') {
      addressContent = "8, ruelle boulot";
      addressSubtitle = "97 400 SAINT-DENIS, La Réunion";
      phoneContent = [
        { label: "Réunion :", value: "+262(0)262 667988", href: "tel:+262262667988" },
        { label: "France :", value: "+33(0)5 54544795", href: "tel:+33554544795" }
      ];
    } else {
      addressContent = "8, ruelle boulot";
      addressSubtitle = "97 400 SAINT-DENIS, La Réunion";
      phoneContent = "+262(0)262 667988";
    }

    return { addressContent, addressSubtitle, phoneContent };
  };

  const { addressContent, addressSubtitle, phoneContent } = getContactInfo();

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: "Adresse",
      content: addressContent,
      subtitle: addressSubtitle
    },
    {
      icon: <Phone size={20} />,
      title: "Téléphone",
      content: phoneContent,
      subtitle: "Sur rendez-vous"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "info@lodgesparadise.com",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: <Clock size={20} />,
      title: "Horaires",
      content: "Lun - Sam : 9h - 18h",
      subtitle: "Bureau de Vente sur RDV"
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Prêt à vivre <span className="text-gradient">l'expérience Paradise</span> ?
          </h2>
          <p className="section-description">
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans la préparation de votre séjour.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+262 6 92 00 00 00"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button type="submit" className={`btn btn-primary form-submit ${isSubmitted ? 'submitted' : ''}`}>
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Informations de contact</h3>
            <p className="contact-intro">
              Préférez-vous nous contacter directement ? 
              Voici toutes nos coordonnées.
            </p>

            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {Array.isArray(info.content) ? (
                      info.content.map((item, idx) => (
                        <div key={idx} style={{ marginBottom: idx < info.content.length - 1 ? '8px' : '0' }}>
                          {item.href ? (
                            <p className="info-main">
                              <strong>{item.label}</strong>
                              <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                                {item.value}
                              </a>
                            </p>
                          ) : (
                            <p className="info-main">
                              <strong>{item.label}</strong> {item.value}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="info-main">{info.content}</p>
                    )}
                    {info.subtitle && <p className="info-sub">{info.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-cta">
              <h4>Contact urgent ?</h4>
              <p>Appelez-nous directement pour une assistance immédiate</p>
              <a href={location === 'belgique' ? "tel:+3281680441" : location === 'france' ? "tel:+33554544795" : "tel:+262262667988"} className="btn btn-primary">
                <Phone size={20} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;