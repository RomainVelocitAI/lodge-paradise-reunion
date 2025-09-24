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
              <p className="mb-2">Le présent site internet est édité par : <strong>Lodges Paradise</strong></p>
              <p className="mb-2"><strong>Forme juridique :</strong> SAS</p>
              <p className="mb-2"><strong>Capital social :</strong> 30.000€</p>
              <p className="mb-2"><strong>Siège social :</strong> 8, ruelle boulot - 97 400 SAINT-DENIS</p>
              <p className="mb-2"><strong>Immatriculation :</strong> Saint-Denis</p>
              <p className="mb-2"><strong>Représentant légal :</strong> Lokin Christianus.J.A</p>
              <p className="mb-2"><strong>Contact :</strong> info@lodgesparadise.com</p>
              <p className="mb-2"><strong>Téléphone :</strong> +262(0)262 667988</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">2. Hébergeur</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2">Le site est hébergé par :</p>
              <p className="mb-2"><strong>OVH SAS</strong></p>
              <p className="mb-2"><strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">3. Conception et réalisation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-2"><strong>Conception et développement du site :</strong> Digico</p>
              <p className="mb-2"><strong>Contact :</strong> contact@digiqo.fr</p>
              <p className="mb-2"><strong>Graphisme / Identité visuelle :</strong> Lodges Paradise</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">4. Propriété intellectuelle</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                L'ensemble du contenu du site (textes, images, logos, vidéos, éléments graphiques, structure…) est la propriété exclusive de Lodges Paradise ou de ses partenaires, et est protégé par le droit d'auteur et le droit des marques.
              </p>
              <p>
                Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans autorisation préalable, est interdite et susceptible de constituer une contrefaçon.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">5. Données personnelles</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Lodges Paradise s'engage à respecter la réglementation en vigueur en matière de protection des données personnelles, notamment le RGPD (Règlement UE 2016/679).
              </p>
              <p>
                Les informations collectées via les formulaires en ligne sont destinées exclusivement à Lodges Paradise et ne sont en aucun cas transmises à des tiers, sauf obligation légale ou partenaire contractuel lié à la prestation.
              </p>
              <p>
                Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition au traitement, que vous pouvez exercer par simple demande à :
                <strong> info@lodgesparadise.com</strong>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">6. Cookies</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Le site utilise des cookies afin de garantir son bon fonctionnement, mesurer l'audience et améliorer l'expérience utilisateur.
              </p>
              <p>
                Un bandeau d'information permet à l'utilisateur de paramétrer ses préférences.
              </p>
              <p>
                Pour plus de détails, consultez notre Politique de gestion des cookies.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">7. Responsabilité</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Lodges Paradise s'efforce d'assurer l'exactitude des informations publiées sur son site. Toutefois, elle ne saurait être tenue responsable d'erreurs, d'omissions ou de l'indisponibilité du service.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites ; Lodges Paradise décline toute responsabilité quant aux contenus externes.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-darkblue-500">8. Droit applicable</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-3">
              <p>
                Les présentes mentions légales sont soumises au droit français.
              </p>
              <p>
                En cas de litige, et après tentative de recherche de solution amiable, compétence exclusive est attribuée aux tribunaux de Saint-Denis de La Réunion.
              </p>
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