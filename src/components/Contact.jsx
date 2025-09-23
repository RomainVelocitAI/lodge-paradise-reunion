import React, { useState } from 'react';
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

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      title: "Adresse",
      content: "2 rue Jean Paul Sartre",
      subtitle: "97419 La Possession, La Réunion"
    },
    {
      icon: <Phone size={20} />,
      title: "Téléphone",
      content: "0262 66 79 88",
      subtitle: "Disponible 7j/7"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      content: "contact@lodgesparadise.com",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: <Clock size={20} />,
      title: "Horaires",
      content: "Lun - Dim : 8h - 20h",
      subtitle: "Service conciergerie 24/7"
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
                    <p className="info-main">{info.content}</p>
                    <p className="info-sub">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-cta">
              <h4>Réservation urgente ?</h4>
              <p>Appelez-nous directement pour une assistance immédiate</p>
              <a href="tel:+262262667988" className="btn btn-primary">
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