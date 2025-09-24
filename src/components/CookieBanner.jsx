import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import CookieModal from './CookieModal';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Afficher la bannière après un court délai pour une meilleure UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAllCookies = () => {
    const consent = {
      necessary: true,
      performance: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);

    // Initialiser les cookies acceptés (Google Analytics, etc.)
    initializeCookies(consent);
  };

  const manageCookies = () => {
    setShowModal(true);
  };

  const handleModalSave = (preferences) => {
    const consent = {
      necessary: true, // Toujours activé
      performance: preferences.performance,
      functional: preferences.functional,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowModal(false);

    // Initialiser les cookies selon les préférences
    initializeCookies(consent);
  };

  const initializeCookies = (consent) => {
    // Ici vous pouvez initialiser vos scripts de tracking selon les préférences
    if (consent.performance) {
      // Initialiser Google Analytics ou autres outils de performance
      console.log('Performance cookies enabled');
    }
    if (consent.marketing) {
      // Initialiser les cookies marketing
      console.log('Marketing cookies enabled');
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bannière principale */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slideUp">
        <div className="bg-white border-t-4 border-gold-500 shadow-2xl">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Icône et texte */}
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Vos données sont précieuses
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nous utilisons uniquement des cookies nécessaires au bon fonctionnement du site et,
                    avec votre accord, pour améliorer nos services.
                    <Link to="/politique-confidentialite" className="text-gold-600 hover:text-gold-700 ml-1 underline">
                      En savoir plus
                    </Link>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Gérez vos préférences en toute simplicité.
                  </p>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex items-center gap-3">
                <button
                  onClick={manageCookies}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Gérer mes cookies</span>
                  <span className="sm:hidden">Gérer</span>
                </button>
                <button
                  onClick={acceptAllCookies}
                  className="flex items-center gap-2 px-5 py-2.5 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: '#D4AF37'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#B8941F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#D4AF37';
                  }}
                >
                  <Check className="w-4 h-4" />
                  <span>J'accepte</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de gestion des cookies */}
      {showModal && (
        <CookieModal
          onClose={() => setShowModal(false)}
          onSave={handleModalSave}
        />
      )}

      {/* Styles pour l'animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;