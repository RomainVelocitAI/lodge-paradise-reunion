import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroGalleryInvestissement from '../components/HeroGalleryInvestissement';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, CheckCircle, AlertCircle, TrendingUp, Shield, Clock, Euro, Home, FileText, Users, ArrowRight, ChevronDown, Factory, Cog } from 'lucide-react';

const InvestissementDefiscalisation = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [taxRate, setTaxRate] = useState(30); // Taux d'imposition de l'entreprise
  const [showCalculator, setShowCalculator] = useState(false);

  // Calcul du crédit d'impôt CIOP
  const calculateCIOP = () => {
    // Taux CIOP selon le montant d'investissement
    let ciopRate = 0.3825; // 38,25% pour les investissements productifs

    const creditImpot = investmentAmount * ciopRate;
    const economieReelle = creditImpot; // Le crédit d'impôt est directement déduit
    const investissementNet = investmentAmount - creditImpot;
    const reportPossible = creditImpot > (investmentAmount * taxRate / 100) ? creditImpot - (investmentAmount * taxRate / 100) : 0;

    return {
      creditImpot: Math.round(creditImpot),
      economieReelle: Math.round(economieReelle),
      investissementNet: Math.round(investissementNet),
      tauxEffectif: ((creditImpot / investmentAmount) * 100).toFixed(2),
      reportPossible: Math.round(reportPossible)
    };
  };

  const gains = calculateCIOP();

  return (
    <>
      <SEO
        title="CIOP - Crédit d'Impôt Outre-Mer Production | Lodges Paradise"
        description="Bénéficiez du CIOP jusqu'à 38,25% de crédit d'impôt pour vos investissements productifs à La Réunion. Lodges Paradise vous accompagne dans vos projets."
        keywords="CIOP réunion, crédit impôt outre-mer, investissement productif, défiscalisation entreprise, équipements neufs"
        canonical="https://lodgesparadise.com/investissement-defiscalisation"
      />

      <Header />

      {/* Hero avec animation de scroll - ON NE TOUCHE PAS */}
      <HeroGalleryInvestissement />

      {/* Section CIOP */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gold-500">CIOP</span> - Crédit d'Impôt Outre-Mer Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bénéficiez jusqu'à 38,25% de crédit d'impôt pour vos investissements productifs neufs à La Réunion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Avantages CIOP */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Avantages du CIOP</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Crédit d'impôt jusqu'à 38,25%</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Applicable sur l'IS ou l'IR</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Report possible sur 5 ans</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Cumulable avec d'autres aides</p>
                </div>
              </div>
            </div>

            {/* Équipements éligibles */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Équipements Éligibles</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Matériel de construction BTP</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Équipements industriels neufs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Véhicules utilitaires</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Outils de production</p>
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conditions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">5 ans de location non meublée</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Location longue durée</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Pas d'autres conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur CIOP */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <Calculator className="inline-block w-10 h-10 text-gold-500 mr-3" />
              Calculateur CIOP
            </h2>
            <p className="text-xl text-gray-600">
              Simulez votre crédit d'impôt pour vos investissements productifs
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Montant de l'investissement en équipements
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50000"
                      max="500000"
                      step="10000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>50 000€</span>
                      <span className="font-bold text-purple-600">{investmentAmount.toLocaleString('fr-FR')}€</span>
                      <span>500 000€</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Taux d'imposition de votre entreprise (%)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[15, 25, 30].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setTaxRate(rate)}
                        className={`py-3 px-4 rounded-lg font-medium transition-all ${
                          taxRate === rate
                            ? 'bg-purple-500 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-purple-100'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Conditions du CIOP</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">5 ans de location non meublée</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">Location longue durée</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">Pas d'autres conditions spécifiques</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Résultats */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Votre Crédit d'Impôt CIOP</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Crédit d'impôt total</span>
                    <span className="text-2xl font-bold text-green-600">
                      {gains.creditImpot.toLocaleString('fr-FR')}€
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-gray-700">Taux effectif CIOP</span>
                    <span className="text-xl font-bold text-purple-600">
                      {gains.tauxEffectif}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Investissement net après CIOP</span>
                    <span className="text-xl font-bold text-blue-600">
                      {gains.investissementNet.toLocaleString('fr-FR')}€
                    </span>
                  </div>

                  {gains.reportPossible > 0 && (
                    <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                      <span className="text-gray-700">Report possible sur 5 ans</span>
                      <span className="text-xl font-bold text-yellow-600">
                        {gains.reportPossible.toLocaleString('fr-FR')}€
                      </span>
                    </div>
                  )}

                  <div className="border-t-2 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Économie réelle</span>
                      <span className="text-3xl font-bold text-gold-600">
                        {gains.economieReelle.toLocaleString('fr-FR')}€
                      </span>
                    </div>
                  </div>
                </div>

                <a href="/#contact-form" className="block w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-center">
                  Demander une Étude Personnalisée
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Obligations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Vos <span className="text-gold-500">Obligations</span>
            </h2>
            <p className="text-xl text-gray-700">
              Des engagements simples pour des avantages durables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <FileText className="w-8 h-8 text-gold-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Engagement de Location</h3>
                  <p className="text-gray-600 mb-4">
                    Location du bien pendant toute la durée choisie (6, 9 ou 12 ans)
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Location nue (non meublée) obligatoire</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Résidence principale du locataire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <Euro className="w-8 h-8 text-gold-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Plafonds de Loyer</h3>
                  <p className="text-gray-600 mb-4">
                    Respect des plafonds fixés par zone géographique
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Zone A : 13,04€/m² maximum</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Zone B : 10,70€/m² maximum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <Users className="w-8 h-8 text-gold-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Conditions Locataires</h3>
                  <p className="text-gray-600 mb-4">
                    Plafonds de ressources selon la composition du foyer
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Personne seule : 43 472€/an max</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Couple : 65 048€/an max</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <Clock className="w-8 h-8 text-gold-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Délais à Respecter</h3>
                  <p className="text-gray-600 mb-4">
                    Timing crucial pour bénéficier des avantages
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Achèvement sous 30 mois</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Location sous 12 mois après livraison</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Votre Parcours <span className="text-gold-500">Investisseur</span>
            </h2>
            <p className="text-xl text-gray-700">
              De la première rencontre à la remise des clés
            </p>
          </div>

          <div className="relative">
            {/* Ligne centrale */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600"></div>

            {/* Étapes */}
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  step: 1,
                  title: "Premier Contact",
                  duration: "Jour 1",
                  description: "Échange téléphonique pour comprendre votre projet et vérifier votre éligibilité",
                  icon: <Users className="w-6 h-6" />,
                  side: "left"
                },
                {
                  step: 2,
                  title: "Étude Personnalisée",
                  duration: "Semaine 1",
                  description: "Simulation financière détaillée et sélection du programme adapté",
                  icon: <Calculator className="w-6 h-6" />,
                  side: "right"
                },
                {
                  step: 3,
                  title: "Réservation",
                  duration: "Semaine 2-3",
                  description: "Signature du contrat de réservation et versement de l'acompte (5%)",
                  icon: <FileText className="w-6 h-6" />,
                  side: "left"
                },
                {
                  step: 4,
                  title: "Financement",
                  duration: "Mois 1-3",
                  description: "Montage du dossier bancaire avec notre partenaire courtier",
                  icon: <Euro className="w-6 h-6" />,
                  side: "right"
                },
                {
                  step: 5,
                  title: "Signature Notaire",
                  duration: "Mois 3-4",
                  description: "Acte authentique chez le notaire et déblocage des fonds",
                  icon: <Shield className="w-6 h-6" />,
                  side: "left"
                },
                {
                  step: 6,
                  title: "Construction",
                  duration: "12-18 mois",
                  description: "Suivi régulier avec photos et visites de chantier",
                  icon: <Home className="w-6 h-6" />,
                  side: "right"
                },
                {
                  step: 7,
                  title: "Livraison",
                  duration: "Mois 18",
                  description: "Remise des clés et début de la gestion locative",
                  icon: <CheckCircle className="w-6 h-6" />,
                  side: "left"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    item.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Contenu */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all ${
                      item.side === 'right' ? 'md:col-start-2' : 'md:col-start-1 md:text-right'
                    }`}
                  >
                    <div className={`flex items-start ${item.side === 'right' ? '' : 'md:flex-row-reverse'}`}>
                      <div className="flex-1">
                        <span className="text-gold-500 font-semibold text-sm">{item.duration}</span>
                        <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                        item.side === 'right' ? 'mr-4' : 'ml-4 md:mr-4 md:ml-0'
                      }`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Point central */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-lg items-center justify-center top-8">
                    <span className="text-white text-xs font-bold">{item.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Prêt à Investir dans Votre Avenir ?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Nos experts vous accompagnent à chaque étape de votre projet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Demander un RDV
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:0262667988"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold-700 text-white rounded-xl font-semibold text-lg hover:bg-gold-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Appeler Maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InvestissementDefiscalisation;