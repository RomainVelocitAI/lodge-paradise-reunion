import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const MentionsLegales = () => {
  return (
    <>
      <SEO
        title="Mentions Légales - Lodges Paradise | Informations Légales"
        description="Mentions légales de Lodges Paradise, constructeur de lodges premium à La Réunion. Informations juridiques et légales."
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">1. Éditeur du site</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Dénomination sociale :</strong> Lodges Paradise SAS</p>
              <p className="mb-2"><strong>Siège social :</strong> Zone Artisanale Les Sables, 97427 L'Étang-Salé, La Réunion</p>
              <p className="mb-2"><strong>Capital social :</strong> 100 000 €</p>
              <p className="mb-2"><strong>RCS :</strong> Saint-Pierre 912 345 678</p>
              <p className="mb-2"><strong>SIRET :</strong> 912 345 678 00012</p>
              <p className="mb-2"><strong>TVA Intracommunautaire :</strong> FR 12 912345678</p>
              <p className="mb-2"><strong>Téléphone :</strong> 0262 66 79 88</p>
              <p className="mb-2"><strong>Email :</strong> contact@lodgesparadise.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">2. Direction de la publication</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Directeur de la publication :</strong> M. Jean-Pierre MARTIN</p>
              <p className="mb-2"><strong>En qualité de :</strong> Président Directeur Général</p>
              <p className="mb-2"><strong>Contact :</strong> direction@lodgesparadise.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">3. Hébergement</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Hébergeur :</strong> OVH SAS</p>
              <p className="mb-2"><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
              <p className="mb-2"><strong>Téléphone :</strong> 1007</p>
              <p className="mb-2"><strong>Site web :</strong> www.ovh.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">4. Conception et réalisation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Agence web :</strong> Digital Paradise Agency</p>
              <p className="mb-2"><strong>Site web :</strong> www.digital-paradise.re</p>
              <p className="mb-2"><strong>Contact :</strong> contact@digital-paradise.re</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">5. Propriété intellectuelle</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">6. Crédits photos</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">Les photographies et visuels utilisés sur ce site sont la propriété de :</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Lodges Paradise SAS</li>
                <li>Shutterstock</li>
                <li>Adobe Stock</li>
                <li>Photographes partenaires sous licence</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">7. Protection des données personnelles</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante :
                <strong> dpo@lodgesparadise.com</strong>
              </p>
              <p>
                Pour plus d'informations sur notre politique de protection des données,
                consultez notre <a href="/politique-confidentialite" className="text-gold-500 hover:text-gold-600 underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">8. Responsabilité</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions
                ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement,
                merci de bien vouloir le signaler par email à <strong>webmaster@lodgesparadise.com</strong>,
                en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">9. Liens hypertextes</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Les sites internet pouvant avoir des liens hypertextes vers notre site ne sont pas sous
                notre contrôle et nous déclinons toute responsabilité quant à leur contenu.
              </p>
              <p>
                La mise en place de liens hypertextes par des tiers vers des pages ou des documents
                diffusés sur notre site est autorisée sous réserve que les liens ne contreviennent
                pas aux intérêts de Lodges Paradise SAS et qu'ils garantissent la possibilité pour
                l'utilisateur d'identifier l'origine et l'auteur du document.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">10. Droit applicable</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p>
                Le présent site et ses mentions légales sont soumis au droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">11. Contact</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Par email : <strong>legal@lodgesparadise.com</strong></li>
                <li>Par téléphone : <strong>0262 66 79 88</strong></li>
                <li>Par courrier : Lodges Paradise SAS - Service Juridique - Zone Artisanale Les Sables, 97427 L'Étang-Salé</li>
              </ul>
            </div>
          </section>

          <div className="text-center text-gray-500 text-sm mt-12">
            <p>Dernière mise à jour : Décembre 2024</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentionsLegales;