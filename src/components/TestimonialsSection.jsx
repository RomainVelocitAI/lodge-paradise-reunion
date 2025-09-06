import React from 'react';
import { Marquee } from './3d-testimonails';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card } from './ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jean-Marc Dubois",
      role: "Investisseur - Villa Premium à Saint-Gilles",
      content: "Lodge Paradise a transformé mon projet d'investissement en réalité. La gestion clé en main avec Île en Rêve est exceptionnelle. Rendement de 6,5% la première année !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      investment: "450 000€"
    },
    {
      name: "Sophie Martin",
      role: "Propriétaire - Immeuble de rapport à Saint-Pierre",
      content: "L'expertise fiscale de Lodge Paradise m'a permis d'optimiser mon investissement avec le LMNP. Service irréprochable du début à la fin du projet.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      investment: "680 000€"
    },
    {
      name: "Philippe Leroy",
      role: "Entrepreneur - Résidence de tourisme à l'Hermitage",
      content: "Un accompagnement personnalisé exceptionnel. Lodge Paradise a géré toutes les démarches administratives. Mon bien génère déjà 7% de rendement annuel.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      investment: "520 000€"
    },
    {
      name: "Marie Durand",
      role: "Médecin - Villa sur-mesure à Saint-Leu",
      content: "La qualité des matériaux et le savoir-faire de Lodge Paradise sont remarquables. Ma villa est un véritable bijou architectural avec vue sur l'océan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      investment: "750 000€"
    },
    {
      name: "Laurent Moreau",
      role: "Cadre dirigeant - Lotissement privé à La Saline",
      content: "Investissement sécurisé et rentable. L'équipe Lodge Paradise maîtrise parfaitement le marché réunionnais. Très satisfait de mon acquisition.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      investment: "380 000€"
    },
    {
      name: "Isabelle Petit",
      role: "Retraitée - Appartements à Saint-Denis",
      content: "Grâce à Lodge Paradise, j'ai pu diversifier mon patrimoine à La Réunion. La défiscalisation Denormandie a considérablement réduit mes impôts.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      investment: "290 000€"
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <Card className="relative flex h-full w-[400px] cursor-pointer flex-col items-start justify-between overflow-hidden rounded-xl border border-yellow-200 bg-gradient-to-br from-white to-yellow-50 p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="h-14 w-14 border-2 border-yellow-400">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-yellow-200 text-gray-800">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <p className="text-xs text-yellow-600 font-semibold mt-1">
            Investissement: {testimonial.investment}
          </p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20 blur-2xl" />
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-8 mb-12">
        <div className="text-center">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            TÉMOIGNAGES CLIENTS
          </span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Ils Ont Investi avec Lodge Paradise
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui ont réalisé 
            leur projet immobilier à La Réunion avec notre accompagnement.
          </p>
        </div>
      </div>

      <div className="relative">
        <Marquee 
          pauseOnHover 
          className="[--duration:60s]"
          repeat={2}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto px-8 mt-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Rejoignez nos Investisseurs Satisfaits
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Plus de 200 projets réalisés avec succès depuis 2014
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Démarrer Mon Projet →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;