import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const RGPD = () => {
  return (
    <>
      <SEO
        title="RGPD - Protection des Données | Lodges Paradise"
        description="Politique de protection des données personnelles de Lodges Paradise conformément au RGPD."
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Protection des Données Personnelles - RGPD</h1>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <p className="text-lg text-gray-700">
              Lodges Paradise SAS accorde une importance particulière à la protection de vos données personnelles.
              Cette politique détaille comment nous collectons, utilisons et protégeons vos informations conformément
              au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">1. Responsable du traitement</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Société :</strong> Lodges Paradise SAS</p>
              <p className="mb-2"><strong>Adresse :</strong> Zone Artisanale Les Sables, 97427 L'Étang-Salé, La Réunion</p>
              <p className="mb-2"><strong>Téléphone :</strong> 0262 66 79 88</p>
              <p className="mb-2"><strong>Email DPO :</strong> dpo@lodgesparadise.com</p>
              <p className="mb-2"><strong>SIRET :</strong> 912 345 678 00012</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">2. Données collectées</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-lg font-semibold mb-2">Types de données collectées :</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Données d'identité :</strong> nom, prénom, civilité</li>
                <li><strong>Données de contact :</strong> adresse email, numéro de téléphone, adresse postale</li>
                <li><strong>Données professionnelles :</strong> société, fonction (si applicable)</li>
                <li><strong>Données de connexion :</strong> adresse IP, logs de connexion, type de navigateur</li>
                <li><strong>Données de projet :</strong> préférences de construction, budget, localisation souhaitée</li>
                <li><strong>Données financières :</strong> informations bancaires (pour les paiements)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">3. Finalités du traitement</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Vos données personnelles sont collectées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gérer votre demande de contact ou de devis</li>
                <li>Établir et exécuter les contrats de construction</li>
                <li>Assurer le suivi de votre projet immobilier</li>
                <li>Gérer la relation client et le service après-vente</li>
                <li>Envoyer des communications commerciales (avec votre consentement)</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Améliorer nos services et votre expérience client</li>
                <li>Prévenir la fraude et sécuriser les transactions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">4. Base légale du traitement</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Le contrat :</strong> pour l'exécution des prestations de construction</li>
                <li><strong>Le consentement :</strong> pour l'envoi de communications commerciales</li>
                <li><strong>L'intérêt légitime :</strong> pour améliorer nos services et prévenir la fraude</li>
                <li><strong>L'obligation légale :</strong> pour les obligations comptables et fiscales</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">5. Durée de conservation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données clients :</strong> durée de la relation contractuelle + 10 ans</li>
                <li><strong>Documents comptables :</strong> 10 ans à compter de la clôture de l'exercice</li>
                <li><strong>Données de connexion :</strong> 1 an conformément à la réglementation</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">6. Destinataires des données</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Vos données peuvent être transmises à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nos services internes (commercial, technique, comptable)</li>
                <li>Nos partenaires et sous-traitants (architectes, constructeurs)</li>
                <li>Les organismes bancaires et financiers</li>
                <li>Les autorités administratives et judiciaires (sur demande légale)</li>
                <li>Nos prestataires informatiques et d'hébergement</li>
              </ul>
              <p className="mt-4">
                <strong>Note :</strong> Nous ne vendons ni ne louons vos données personnelles à des tiers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">7. Vos droits</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation du traitement de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
                <li><strong>Droit de définir des directives :</strong> concernant le sort de vos données après votre décès</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>dpo@lodgesparadise.com</strong>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">8. Sécurité des données</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement des données sensibles</li>
                <li>Protocoles HTTPS pour les échanges</li>
                <li>Contrôle d'accès strict aux données</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Audits réguliers de sécurité</li>
                <li>Procédures de sauvegarde et de récupération</li>
                <li>Gestion des incidents de sécurité</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">9. Cookies</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Notre site utilise des cookies pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
                <li><strong>Cookies de préférences :</strong> pour mémoriser vos choix</li>
                <li><strong>Cookies marketing :</strong> pour personnaliser les publicités (avec consentement)</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies via notre bannière de consentement ou les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">10. Transferts internationaux</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Vos données sont hébergées en France et dans l'Union Européenne. En cas de transfert
                hors UE, nous nous assurons de la mise en place de garanties appropriées
                (clauses contractuelles types, décision d'adéquation).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">11. Mineurs</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Notre site et nos services ne s'adressent pas aux personnes de moins de 18 ans.
                Nous ne collectons pas sciemment de données personnelles auprès de mineurs.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">12. Modifications</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Nous nous réservons le droit de modifier cette politique à tout moment.
                Les modifications seront publiées sur cette page avec la date de mise à jour.
                Nous vous informerons de tout changement substantiel par email.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">13. Réclamation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez :
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Nous contacter directement : <strong>dpo@lodgesparadise.com</strong></li>
                <li>Introduire une réclamation auprès de la CNIL :
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Site web : www.cnil.fr</li>
                    <li>Adresse : 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</li>
                    <li>Téléphone : 01 53 73 22 22</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">14. Contact</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-3">Pour toute question concernant vos données personnelles :</p>
              <p className="mb-2"><strong>Délégué à la Protection des Données (DPO)</strong></p>
              <p className="mb-2">Email : dpo@lodgesparadise.com</p>
              <p className="mb-2">Téléphone : 0262 66 79 88</p>
              <p className="mb-2">Courrier : Lodges Paradise SAS - DPO</p>
              <p className="mb-2">Zone Artisanale Les Sables</p>
              <p>97427 L'Étang-Salé - La Réunion</p>
            </div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-12">
            <p>Dernière mise à jour : Décembre 2024</p>
            <p>Version 1.0</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RGPD;