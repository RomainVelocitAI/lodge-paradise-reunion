import React, { useState } from 'react';
import { X, Shield, BarChart, Settings, Megaphone, Info } from 'lucide-react';

const CookieModal = ({ onClose, onSave }) => {
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    performance: false,
    functional: false,
    marketing: false
  });

  const togglePreference = (type) => {
    if (type !== 'necessary') { // Les cookies nécessaires ne peuvent pas être désactivés
      setPreferences(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const acceptAll = () => {
    const allEnabled = {
      necessary: true,
      performance: true,
      functional: true,
      marketing: true
    };
    setPreferences(allEnabled);
    onSave(allEnabled);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      performance: false,
      functional: false,
      marketing: false
    };
    setPreferences(onlyNecessary);
    onSave(onlyNecessary);
  };

  const savePreferences = () => {
    onSave(preferences);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Cookies strictement nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site. Ils permettent la navigation entre les pages, la sécurisation de votre compte et l\'utilisation des formulaires.',
      examples: 'Authentification, sécurité, panier d\'achat',
      canDisable: false
    },
    {
      id: 'performance',
      icon: BarChart,
      title: 'Cookies de performance et statistiques',
      description: 'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant des informations anonymes.',
      examples: 'Google Analytics, statistiques de visite',
      canDisable: true
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Cookies de personnalisation',
      description: 'Ces cookies mémorisent vos préférences et permettent une expérience personnalisée lors de vos visites.',
      examples: 'Langue préférée, région, préférences d\'affichage',
      canDisable: true
    },
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Cookies publicitaires et marketing',
      description: 'Ces cookies sont utilisés pour vous proposer des publicités pertinentes et mesurer l\'efficacité de nos campagnes.',
      examples: 'Publicités ciblées, remarketing, réseaux sociaux',
      canDisable: true
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-modalAppear">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Gérer mes préférences cookies</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="mt-2 text-white/90">
            Personnalisez vos préférences pour contrôler les cookies utilisés sur notre site
          </p>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto max-h-[50vh] p-6">
          {/* Information générale */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-400 mt-0.5 mr-2" />
              <div>
                <p className="text-sm text-gray-700">
                  Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à améliorer
                  votre expérience de navigation. Vous pouvez modifier vos préférences à tout moment.
                </p>
              </div>
            </div>
          </div>

          {/* Liste des types de cookies */}
          <div className="space-y-4">
            {cookieTypes.map((cookieType) => {
              const Icon = cookieType.icon;
              return (
                <div
                  key={cookieType.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-gold-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-4">
                      <div className="flex items-center mb-2">
                        <Icon className="w-5 h-5 text-gold-500 mr-2" />
                        <h3 className="font-semibold text-gray-900">{cookieType.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {cookieType.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">Exemples : </span>
                        {cookieType.examples}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => togglePreference(cookieType.id)}
                        disabled={!cookieType.canDisable}
                        className={`
                          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                          ${!cookieType.canDisable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                          ${preferences[cookieType.id] ? 'bg-gold-500' : 'bg-gray-300'}
                        `}
                      >
                        <span
                          className={`
                            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                            ${preferences[cookieType.id] ? 'translate-x-6' : 'translate-x-1'}
                          `}
                        />
                      </button>
                    </div>
                  </div>
                  {!cookieType.canDisable && (
                    <p className="text-xs text-amber-600 mt-2 font-medium">
                      ⚠ Ces cookies sont essentiels et ne peuvent pas être désactivés
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pied de page avec les boutons */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3 justify-between">
            <button
              onClick={rejectAll}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
            >
              Refuser tout
            </button>
            <div className="flex gap-3 flex-1 sm:flex-initial">
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Accepter tout
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 sm:flex-initial px-6 py-2.5 bg-gold-500 text-white rounded-lg font-medium hover:bg-gold-600 transition-all duration-300 transform hover:scale-105"
              >
                Enregistrer mes préférences
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour l'animation */}
      <style jsx>{`
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-modalAppear {
          animation: modalAppear 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieModal;