import React from 'react';
import { Marquee } from './3d-testimonails';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Card, CardContent } from './ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jean-Marc Dubois",
      username: "@jmdubois",
      body: "Lodges Paradise a transformé mon projet d'investissement en réalité. Rendement de 6,5% la première année !",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      investment: "🏡 450 000€"
    },
    {
      name: "Sophie Martin",
      username: "@sophie_m",
      body: "L'expertise fiscale m'a permis d'optimiser avec la défiscalisation CIOP. Service irréprochable !",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      investment: "🏢 680 000€"
    },
    {
      name: "Philippe Leroy",
      username: "@pleroy",
      body: "Accompagnement exceptionnel. Mon bien génère déjà 7% de rendement annuel.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      investment: "🏨 520 000€"
    },
    {
      name: "Marie Durand",
      username: "@mariedurand",
      body: "Ma villa est un bijou architectural avec vue sur l'océan. Qualité remarquable !",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      investment: "🌊 750 000€"
    },
    {
      name: "Laurent Moreau",
      username: "@l_moreau",
      body: "Investissement sécurisé et rentable. Équipe qui maîtrise le marché réunionnais.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      investment: "🏘️ 380 000€"
    },
    {
      name: "Isabelle Petit",
      username: "@isa_petit",
      body: "Diversification patrimoniale réussie. La défiscalisation a réduit mes impôts.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      investment: "🏠 290 000€"
    }
  ];

  const TestimonialCard = ({ img, name, username, body, investment }) => (
    <Card className="w-64">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-9 w-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{investment}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texte à gauche */}
          <div className="text-left">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              TÉMOIGNAGES CLIENTS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
              Ils Ont Investi avec Lodges Paradise
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mt-6">
              Découvrez les témoignages de nos clients satisfaits qui ont réalisé 
              leur projet immobilier à La Réunion avec notre accompagnement.
            </p>
          </div>

          {/* Composant 3D à droite */}
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden [perspective:300px]">
            <div
              className="flex flex-row items-center gap-4"
              style={{
                transform: 'translateX(-50px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
              }}
            >
              {/* Première colonne verticale (vers le bas) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              
              {/* Deuxième colonne verticale (vers le haut) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              
              {/* Troisième colonne verticale (vers le bas) */}
              <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
              
              {/* Quatrième colonne verticale (vers le haut) */}
              <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
                {testimonials.map((review) => (
                  <TestimonialCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            
            {/* Gradients pour les bords */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-50"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
        </div>

        {/* Card CTA en dessous avec padding */}
        <div className="mt-16 rounded-2xl p-10 lg:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #0a0f1c, #1a1f2c)' }}>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            Rejoignez nos Investisseurs Satisfaits
          </h3>
          <p className="text-lg lg:text-xl mb-8 text-white opacity-95 max-w-2xl mx-auto">
            Concrétisez votre projet immobilier à La Réunion avec notre expertise.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gold-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold-600 hover:shadow-lg transition-all transform hover:scale-105"
          >
            Démarrer Mon Projet →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;