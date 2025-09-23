import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CGV = () => {
  return (
    <>
      <SEO
        title="Conditions Générales de Vente - Lodges Paradise"
        description="Conditions générales de vente de Lodges Paradise, constructeur de lodges premium à La Réunion."
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Conditions Générales de Vente</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 1 - Objet</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles
                entre la société Lodges Paradise SAS et ses clients dans le cadre de la construction
                et la vente de lodges et biens immobiliers à La Réunion.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 2 - Prix</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Les prix de nos prestations sont indiqués en euros toutes taxes comprises (TTC).
                Ils comprennent la TVA applicable au jour de la commande.
              </p>
              <p>
                Lodges Paradise SAS se réserve le droit de modifier ses prix à tout moment.
                Toutefois, les prix appliqués seront ceux en vigueur au jour de la signature du contrat.
              </p>
              <p>
                Les devis établis par Lodges Paradise SAS sont valables pour une durée de 30 jours
                à compter de leur date d'émission.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 3 - Modalités de paiement</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p><strong>Le paiement s'effectue selon l'échéancier suivant :</strong></p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>10% à la signature du contrat de réservation</li>
                <li>15% à l'obtention du permis de construire</li>
                <li>25% à l'achèvement des fondations</li>
                <li>25% à l'achèvement du gros œuvre</li>
                <li>20% à l'achèvement des travaux</li>
                <li>5% à la livraison</li>
              </ul>
              <p className="mt-4">
                Les paiements peuvent être effectués par virement bancaire, chèque bancaire ou
                financement bancaire pré-approuvé.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 4 - Délais de construction</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Les délais de construction sont indiqués dans le contrat de construction et
                varient selon le type de projet :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li>Lodge standard : 6 à 8 mois</li>
                <li>Villa premium : 10 à 12 mois</li>
                <li>Projet sur-mesure : selon étude personnalisée</li>
              </ul>
              <p className="mt-4">
                Ces délais courent à compter de l'obtention du permis de construire purgé de tout recours
                et de la réalisation des conditions suspensives.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 5 - Garanties</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p><strong>Lodges Paradise SAS fournit les garanties légales obligatoires :</strong></p>
              <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                <li><strong>Garantie de parfait achèvement (1 an)</strong> : Couvre tous les désordres signalés lors de la réception ou dans l'année qui suit</li>
                <li><strong>Garantie de bon fonctionnement (2 ans)</strong> : Couvre les éléments d'équipement dissociables</li>
                <li><strong>Garantie décennale (10 ans)</strong> : Couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination</li>
              </ul>
              <p className="mt-4">
                Une assurance dommages-ouvrage est systématiquement souscrite pour chaque construction.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 6 - Réception des travaux</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                La réception des travaux est effectuée contradictoirement entre le client et
                Lodges Paradise SAS. Elle fait l'objet d'un procès-verbal signé par les deux parties.
              </p>
              <p>
                Le client peut être assisté par un professionnel de son choix lors de la réception.
                Les éventuelles réserves doivent être consignées dans le procès-verbal de réception.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 7 - Droit de rétractation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Conformément aux articles L. 271-1 et suivants du Code de la construction et de l'habitation,
                l'acquéreur non professionnel dispose d'un délai de rétractation de 10 jours à compter
                du lendemain de la première présentation de la lettre recommandée avec accusé de réception
                lui notifiant l'acte.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 8 - Force majeure</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Lodges Paradise SAS ne pourra être tenue responsable de l'inexécution de ses obligations
                en cas de force majeure, notamment en cas de catastrophe naturelle, cyclone, intempéries
                exceptionnelles, grève, épidémie, ou tout autre événement imprévisible et insurmontable.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 9 - Propriété intellectuelle</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Les plans, designs et concepts créés par Lodges Paradise SAS restent sa propriété
                intellectuelle exclusive. Toute reproduction ou utilisation sans autorisation écrite
                est interdite et passible de poursuites.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 10 - Médiation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
                Conformément aux articles L.616-1 et R.616-1 du code de la consommation, nous proposons
                un dispositif de médiation de la consommation.
              </p>
              <p>
                Le client peut recourir gratuitement au service de médiation MEDICYS :
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
                <li>Par voie électronique : www.medicys.fr</li>
                <li>Par voie postale : MEDICYS - 73 Boulevard de Clichy - 75009 PARIS</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 11 - Données personnelles</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Les données personnelles collectées sont traitées conformément au RGPD.
                Pour plus d'informations, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-gold-500 hover:text-gold-600 underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 12 - Loi applicable et juridiction</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige non résolu
                par voie amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">Article 13 - Contact</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p><strong>Lodges Paradise SAS</strong></p>
              <p>Zone Artisanale Les Sables</p>
              <p>97427 L'Étang-Salé - La Réunion</p>
              <p>Téléphone : 0262 66 79 88</p>
              <p>Email : contact@lodgesparadise.com</p>
            </div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-12">
            <p>CGV en vigueur au 1er Décembre 2024</p>
            <p>Version 1.0</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CGV;