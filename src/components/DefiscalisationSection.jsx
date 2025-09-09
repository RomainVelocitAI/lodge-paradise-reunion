import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DefiscalisationSection = () => {
  const [calculatorData, setCalculatorData] = useState({
    investissement: 300000,
    dispositif: 'ciop',
    dureeEngagement: 5,
    regimeFiscal: 'reel',
    trancheImposition: 30,
    loyerMensuel: 2500
  });

  const [results, setResults] = useState({
    economieAnnuelle: 0,
    economieTotale: 0,
    rendementNet: 0,
    cashFlowMensuel: 0
  });

  // Calcul des économies fiscales
  useEffect(() => {
    calculateSavings();
  }, [calculatorData]);

  const calculateSavings = () => {
    let economieAnnuelle = 0;
    let economieTotale = 0;
    let rendementNet = 0;
    let cashFlowMensuel = 0;

    const { investissement, dispositif, dureeEngagement, regimeFiscal, trancheImposition, loyerMensuel } = calculatorData;
    const loyerAnnuel = loyerMensuel * 12;

    if (dispositif === 'ciop') {
      // CIOP : 35% de crédit d'impôt
      const creditImpot = investissement * 0.35;
      economieAnnuelle = creditImpot / 5; // Étalé sur 5 ans
      economieTotale = creditImpot;
      
      // Calcul du rendement avec loyers plafonnés mais optimisés
      const loyerOptimise = loyerMensuel * 0.9; // Loyer plafonné mais optimisé
      const loyerAnnuelOptimise = loyerOptimise * 12;
      const chargesEstimees = loyerAnnuelOptimise * 0.2; // 20% de charges
      const impotLoyer = (loyerAnnuelOptimise - chargesEstimees) * (trancheImposition / 100);
      
      cashFlowMensuel = loyerOptimise - (chargesEstimees / 12) - (impotLoyer / 12) + (economieAnnuelle / 12);
      rendementNet = ((loyerAnnuelOptimise - chargesEstimees - impotLoyer + economieAnnuelle) / investissement) * 100;
      
    } else if (dispositif === 'lmnp') {
      if (regimeFiscal === 'micro') {
        // Micro-BIC : 50% d'abattement
        const revenuImposable = loyerAnnuel * 0.5;
        economieAnnuelle = revenuImposable * (trancheImposition / 100);
        cashFlowMensuel = loyerMensuel - (economieAnnuelle / 12);
      } else {
        // Régime réel : amortissement
        const amortissementAnnuel = investissement * 0.85 / 30; // 85% du bien sur 30 ans
        const chargesEstimees = loyerAnnuel * 0.25; // 25% de charges estimées
        const resultatFiscal = loyerAnnuel - chargesEstimees - amortissementAnnuel;
        
        if (resultatFiscal < 0) {
          // Pas d'impôt si déficit
          economieAnnuelle = loyerAnnuel * (trancheImposition / 100);
        } else {
          economieAnnuelle = (loyerAnnuel - resultatFiscal) * (trancheImposition / 100);
        }
        cashFlowMensuel = loyerMensuel - (chargesEstimees / 12);
      }
      
      economieTotale = economieAnnuelle * Math.min(dureeEngagement, 20);
      rendementNet = ((loyerAnnuel - (loyerAnnuel * 0.25)) / investissement) * 100;
      
    }

    setResults({
      economieAnnuelle: Math.round(economieAnnuelle),
      economieTotale: Math.round(economieTotale),
      rendementNet: Math.round(rendementNet * 100) / 100,
      cashFlowMensuel: Math.round(cashFlowMensuel)
    });
  };

  return (
    <section className="section" style={{ padding: '5rem 0', background: 'linear-gradient(to bottom, #f9fafb, white)' }}>
      <div className="container mx-auto px-8">
        {/* Contenu SEO */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              EXPERTISE FISCALE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
              Optimisation Fiscale & Défiscalisation à La Réunion
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Lodge Paradise, votre partenaire expert en investissement défiscalisé dans les DOM-TOM
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              L'expertise Lodge Paradise en défiscalisation immobilière
            </h2>
            <p className="mb-6 leading-relaxed">
              Depuis plus de 10 ans, <strong>Lodge Paradise</strong> accompagne les investisseurs dans leurs projets 
              de défiscalisation immobilière à La Réunion. Notre expertise approfondie des dispositifs fiscaux 
              spécifiques aux DOM-TOM nous permet de maximiser vos avantages fiscaux tout en sécurisant 
              votre investissement patrimonial.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Les dispositifs de défiscalisation actifs en 2025
            </h3>
            <p className="mb-4">
              Lodge Paradise vous oriente vers les dispositifs de défiscalisation les plus avantageux,
              notamment le nouveau <strong>CIOP (Crédit d'Impôt Outre-Mer)</strong> qui offre des opportunités
              exceptionnelles jusqu'en 2029 :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gold-500">
                <h4 className="font-bold text-lg mb-2 text-gold-500">CIOP - Crédit d'Impôt Outre-Mer (Nouveau)</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ <strong>35% de défiscalisation</strong> sur votre investissement</li>
                  <li>✓ Engagement de <strong>5 ans en location non meublée</strong></li>
                  <li>✓ Location longue durée avec loyers plafonnés</li>
                  <li>✓ Optimisation des revenus locatifs garantie</li>
                  <li>✓ <strong className="text-red-600">Disponible jusqu'en 2029 seulement</strong></li>
                  <li>✓ <strong className="text-gold-500">Plus que 4 ans pour en profiter !</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-2 text-gold-500">LMNP - Location Meublée Non Professionnelle</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Régime micro-BIC : 50% d'abattement forfaitaire</li>
                  <li>✓ Régime réel : amortissement du bien et des meubles</li>
                  <li>✓ Récupération de la TVA sur l'investissement</li>
                  <li>✓ Revenus locatifs peu ou pas imposés</li>
                  <li>✓ Idéal pour la location saisonnière à La Réunion</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Pourquoi choisir Lodge Paradise pour votre défiscalisation ?
            </h3>
            
            <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 font-bold mr-2">→</span>
                  <span><strong>Expertise locale :</strong> Connaissance approfondie du marché immobilier réunionnais et des zones à fort potentiel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 font-bold mr-2">→</span>
                  <span><strong>Accompagnement complet :</strong> De la recherche du bien jusqu'à la gestion locative avec notre partenaire Île en Rêve</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 font-bold mr-2">→</span>
                  <span><strong>Optimisation fiscale maximale :</strong> Montage personnalisé pour exploiter le plafond de 18 000€ de niches fiscales en outre-mer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 font-bold mr-2">→</span>
                  <span><strong>Sécurisation juridique :</strong> Partenariat avec des notaires et fiscalistes spécialisés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 font-bold mr-2">→</span>
                  <span><strong>Rentabilité garantie :</strong> Sélection rigoureuse de biens avec des rendements de 5% à 7%</span>
                </li>
              </ul>
            </div>

            <p className="mb-6 text-gray-600 italic">
              Lodge Paradise transforme votre investissement immobilier à La Réunion en véritable levier 
              d'optimisation patrimoniale, combinant défiscalisation attractive, revenus locatifs pérennes 
              et valorisation du capital sur le long terme.
            </p>
          </div>
        </div>

        {/* Calculateur de défiscalisation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Calculateur de Défiscalisation Personnalisé
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Formulaire */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Montant de l'investissement
                </label>
                <input
                  type="range"
                  min="100000"
                  max="600000"
                  step="10000"
                  value={calculatorData.investissement}
                  onChange={(e) => setCalculatorData({...calculatorData, investissement: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-2xl font-bold text-gold-500 mt-2">
                  {calculatorData.investissement.toLocaleString('fr-FR')} €
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dispositif fiscal
                </label>
                <select 
                  value={calculatorData.dispositif}
                  onChange={(e) => setCalculatorData({...calculatorData, dispositif: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                >
                  <option value="ciop">CIOP - Crédit d'Impôt Outre-Mer (35%)</option>
                  <option value="lmnp">LMNP - Location Meublée</option>
                </select>
              </div>

              {calculatorData.dispositif === 'lmnp' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Régime fiscal LMNP
                  </label>
                  <select 
                    value={calculatorData.regimeFiscal}
                    onChange={(e) => setCalculatorData({...calculatorData, regimeFiscal: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="micro">Micro-BIC (50% abattement)</option>
                    <option value="reel">Réel (avec amortissement)</option>
                  </select>
                </div>
              )}

              {calculatorData.dispositif === 'ciop' ? (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Durée d'engagement CIOP
                  </label>
                  <select 
                    value={calculatorData.dureeEngagement}
                    onChange={(e) => setCalculatorData({...calculatorData, dureeEngagement: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="5">5 ans (engagement CIOP)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Durée d'engagement (années)
                  </label>
                  <select 
                    value={calculatorData.dureeEngagement}
                    onChange={(e) => setCalculatorData({...calculatorData, dureeEngagement: parseInt(e.target.value)})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="6">6 ans</option>
                    <option value="9">9 ans</option>
                    <option value="12">12 ans</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre tranche marginale d'imposition
                </label>
                <select 
                  value={calculatorData.trancheImposition}
                  onChange={(e) => setCalculatorData({...calculatorData, trancheImposition: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                >
                  <option value="11">11%</option>
                  <option value="30">30%</option>
                  <option value="41">41%</option>
                  <option value="45">45%</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loyer mensuel estimé
                </label>
                <input
                  type="number"
                  min="500"
                  max="10000"
                  step="100"
                  value={calculatorData.loyerMensuel}
                  onChange={(e) => setCalculatorData({...calculatorData, loyerMensuel: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                />
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Vos économies fiscales estimées
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Économie fiscale annuelle</div>
                  <div className="text-3xl font-bold text-green-600">
                    {results.economieAnnuelle.toLocaleString('fr-FR')} €
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Économie totale sur {calculatorData.dureeEngagement} ans</div>
                  <div className="text-3xl font-bold text-green-600">
                    {results.economieTotale.toLocaleString('fr-FR')} €
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Rendement net</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {results.rendementNet}%
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Cash-flow mensuel</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {results.cashFlowMensuel.toLocaleString('fr-FR')} €
                    </div>
                  </div>
                </div>

                <div className="bg-gold-100 border-l-4 border-gold-500 p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Note :</strong> Ces calculs sont des estimations basées sur les dispositifs fiscaux 
                    en vigueur en 2025. Pour une étude personnalisée, contactez nos experts Lodge Paradise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-darkblue-800 hover:to-darkblue-900 transition-all transform hover:scale-105 shadow-lg">
              Obtenir une étude personnalisée gratuite →
            </Link>
            <p className="text-sm text-gray-600 mt-4">
              Nos experts vous rappellent sous 24h pour une consultation gratuite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefiscalisationSection;