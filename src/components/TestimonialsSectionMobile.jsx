import React, { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSectionMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);
  
  const testimonials = [
    {
      name: "Jean-Marc Dubois",
      role: "Investisseur - Villa Premium à Saint-Gilles",
      content: "Lodges Paradise a transformé mon projet d'investissement en réalité. La gestion clé en main avec Île en Rêve est exceptionnelle. Rendement de 6,5% la première année !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      investment: "450 000€"
    },
    {
      name: "Sophie Martin",
      role: "Propriétaire - Immeuble de rapport à Saint-Pierre",
      content: "L'expertise fiscale de Lodges Paradise m'a permis d'optimiser mon investissement avec la défiscalisation CIOP. Service irréprochable du début à la fin du projet.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      investment: "680 000€"
    },
    {
      name: "Philippe Leroy",
      role: "Entrepreneur - Résidence de tourisme à l'Hermitage",
      content: "Un accompagnement personnalisé exceptionnel. Lodges Paradise a géré toutes les démarches administratives. Mon bien génère déjà 7% de rendement annuel.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      investment: "520 000€"
    },
    {
      name: "Marie Durand",
      role: "Médecin - Villa sur-mesure à Saint-Leu",
      content: "La qualité des matériaux et le savoir-faire de Lodges Paradise sont remarquables. Ma villa est un véritable bijou architectural avec vue sur l'océan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      investment: "750 000€"
    },
    {
      name: "Laurent Moreau",
      role: "Cadre dirigeant - Lotissement privé à La Saline",
      content: "Investissement sécurisé et rentable. L'équipe Lodges Paradise maîtrise parfaitement le marché réunionnais. Très satisfait de mon acquisition.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      investment: "380 000€"
    },
    {
      name: "Isabelle Petit",
      role: "Retraitée - Appartements à Saint-Denis",
      content: "Grâce à Lodges Paradise, j'ai pu diversifier mon patrimoine à La Réunion. La défiscalisation Denormandie a considérablement réduit mes impôts.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      investment: "290 000€"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const startAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000); // Change testimonial every 4 seconds
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handlePrevious = () => {
    stopAutoScroll();
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    stopAutoScroll();
    setCurrentIndex(index);
    startAutoScroll();
  };

  const handleTouchStart = (e) => {
    stopAutoScroll();
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) {
      startAutoScroll();
      return;
    }
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
    
    touchStartRef.current = null;
    startAutoScroll();
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-gold-500 font-semibold text-xs uppercase tracking-wider">
            TÉMOIGNAGES CLIENTS
          </span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            Ils Ont Investi avec<br/>Lodges Paradise
          </h2>
          <p className="text-base text-gray-600 mt-3 px-4">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        {/* Testimonial Card */}
        <div 
          className="relative px-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-4 right-4 text-gold-200 text-4xl opacity-50" />
            
            {/* Avatar and Info */}
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-16 w-16 border-3 border-gold-400 shadow-lg">
                <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                <AvatarFallback className="bg-gold-200 text-gray-800 text-lg font-bold">
                  {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">{currentTestimonial.name}</h3>
                <p className="text-sm text-gray-600 leading-tight">{currentTestimonial.role}</p>
                <p className="text-sm text-gold-500 font-bold mt-1">
                  {currentTestimonial.investment}
                </p>
              </div>
            </div>
            
            {/* Rating Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-6 w-6 text-gold-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            
            {/* Testimonial Content */}
            <blockquote className="text-gray-700 text-base italic leading-relaxed text-center mb-6">
              "{currentTestimonial.content}"
            </blockquote>
            
            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 opacity-10 blur-3xl" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
            aria-label="Témoignage suivant"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-gold-500 rounded-full' 
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-4">
            Rejoignez nos Investisseurs
          </h3>
          <a 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-darkblue-900 hover:text-white hover:shadow-lg transition-all transform hover:scale-105"
          >
            Démarrer Mon Projet →
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <p className="text-2xl font-bold text-gold-500">200+</p>
            <p className="text-xs text-gray-600">Projets Réalisés</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <p className="text-2xl font-bold text-gold-500">6.5%</p>
            <p className="text-xs text-gray-600">Rendement Moyen</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <p className="text-2xl font-bold text-gold-500">10 ans</p>
            <p className="text-xs text-gray-600">D'Expertise</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md">
            <p className="text-2xl font-bold text-gold-500">98%</p>
            <p className="text-xs text-gray-600">Clients Satisfaits</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Rejoignez nos investisseurs satisfaits
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionMobile;