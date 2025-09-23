import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, UserCheck, AlertCircle, Cookie } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEO
        title="Politique de Confidentialité - Lodges Paradise | Protection des Données RGPD"
        description="Découvrez comment Lodges Paradise protège vos données personnelles conformément au RGPD. Transparence totale sur la collecte, l'utilisation et la sécurisation de vos informations."
        keywords="politique confidentialité, RGPD, protection données, cookies, vie privée, lodges paradise réunion"
        canonical="https://lodgesparadise.com/politique-confidentialite"
      />

      <Header />

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600">
              Protection des données personnelles
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Chez <strong>Lodges Paradise</strong>, nous accordons une importance essentielle à la protection de vos données personnelles.
              Conformément au <strong>Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</strong>,
              nous veillons à ce que vos informations soient collectées, utilisées et protégées en toute transparence.
            </p>
          </div>

          {/* Données collectées */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-gold-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Données collectées</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Nous collectons uniquement les données nécessaires à nos activités :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>Données d'identification</strong> (nom, prénom, coordonnées, email, téléphone, adresse)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>Données liées à la relation commerciale</strong> (demandes via le formulaire de contact, devis, contrats, facturation)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>Données de navigation</strong> (adresse IP, cookies, statistiques de visite)
                </span>
              </li>
            </ul>
          </section>

          {/* Finalités du traitement */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <UserCheck className="w-6 h-6 text-gold-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Finalités du traitement</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Répondre à vos demandes via le site</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Gérer nos relations commerciales et contractuelles</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Effectuer la facturation et la comptabilité</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Envoyer des informations promotionnelles (newsletter, offres) avec votre consentement</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Améliorer nos services et l'expérience utilisateur</span>
              </li>
            </ul>
          </section>

          {/* Bases légales */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bases légales</h2>
            <p className="text-gray-700 mb-4">
              Le traitement de vos données repose sur :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">L'exécution d'un contrat</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Votre consentement</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Le respect d'obligations légales</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">L'intérêt légitime de l'entreprise</span>
              </li>
            </ul>
          </section>

          {/* Conservation */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservation</h2>
            <p className="text-gray-700">
              Vos données sont conservées pendant une durée maximale de <strong>5 ans après le dernier contact</strong>,
              sauf obligation légale contraire ou litige nécessitant leur conservation.
            </p>
          </section>

          {/* Vos droits */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Accès</strong>
                    <p className="text-gray-600 text-sm">Savoir quelles données nous détenons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Rectification</strong>
                    <p className="text-gray-600 text-sm">Corriger ou compléter vos données</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Effacement</strong>
                    <p className="text-gray-600 text-sm">Demander la suppression de vos données (droit à l'oubli)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Limitation</strong>
                    <p className="text-gray-600 text-sm">Suspendre temporairement le traitement</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Portabilité</strong>
                    <p className="text-gray-600 text-sm">Recevoir vos données dans un format lisible</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Opposition</strong>
                    <p className="text-gray-600 text-sm">Refuser certains traitements, notamment marketing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong className="text-gray-900">Réclamation</strong>
                    <p className="text-gray-600 text-sm">Déposer plainte auprès de la CNIL (www.cnil.fr)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-gold-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Sécurité</h2>
            </div>
            <p className="text-gray-700">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir
              un <strong>haut niveau de sécurité et de confidentialité</strong> de vos données.
              En cas de violation de données, vous serez informé conformément à la réglementation.
            </p>
          </section>

          {/* Utilisation des cookies */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Cookie className="w-6 h-6 text-gold-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Utilisation des cookies</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Lorsque vous visitez le site Lodges Paradise, des cookies peuvent être enregistrés sur votre ordinateur ou votre appareil mobile.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 mr-2" />
                <p className="text-gray-700">
                  Un cookie est un petit fichier texte qui permet de reconnaître votre navigateur et de faciliter
                  votre navigation (soit le temps de votre visite – cookie de session, soit lors de visites futures – cookie permanent).
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types de cookies utilisés</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Cookies strictement nécessaires</h4>
                <p className="text-gray-600 text-sm">
                  Essentiels au bon fonctionnement du site (navigation entre les pages, sécurisation de votre compte,
                  formulaires, panier…). Sans eux, certaines fonctionnalités ne sont pas accessibles.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Cookies de performance et statistiques</h4>
                <p className="text-gray-600 text-sm">
                  Nous aident à mesurer l'audience du site (pages visitées, temps passé, origine de la visite)
                  afin d'améliorer nos services.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Cookies de personnalisation</h4>
                <p className="text-gray-600 text-sm">
                  Mémorisent vos préférences et facilitent vos futures visites.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">Cookies publicitaires et marketing</h4>
                <p className="text-gray-600 text-sm">
                  Utilisés uniquement avec votre consentement, ils permettent de vous proposer
                  du contenu et des offres adaptées.
                </p>
              </div>
            </div>
          </section>

          {/* Gestion des choix */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestion de vos choix</h2>
            <p className="text-gray-700 mb-4">
              Lors de votre première visite, un bandeau d'information vous permet de choisir entre :
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Accepter tous les cookies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Configurer vos préférences</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Vous pouvez également modifier vos choix à tout moment en cliquant sur « Gérer mes cookies » (en bas de page).
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Durée de conservation</h3>
              <p className="text-gray-700">
                Les cookies sont conservés pour une durée maximale de <strong>13 mois</strong> après leur dépôt sur votre appareil.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pour exercer vos droits ou toute question
            </h2>
            <p className="text-gray-700 mb-6">
              Contactez-nous à tout moment pour exercer vos droits ou pour toute question concernant vos données personnelles.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Nous contacter
            </Link>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;