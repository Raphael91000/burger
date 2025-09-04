import React from 'react';
import { Heart, Leaf, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque burger est préparé avec amour et attention aux détails'
    },
    {
      icon: Leaf,
      title: 'Ingrédients frais',
      description: 'Nous sélectionnons nos fournisseurs locaux pour la meilleure qualité'
    },
    {
      icon: Clock,
      title: 'Fraîcheur',
      description: 'Nos burgers sont préparés à la commande pour une fraîcheur maximale'
    }
  ];

  return (
    <section className="py-16 bg-black/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Fondé en 2020 par deux passionnés de cuisine, Burger Palace est né d'une vision simple : 
              créer les meilleurs burgers artisanaux de Paris avec des ingrédients de qualité et 
              un service irréprochable.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Aujourd'hui, nous sommes fiers de servir plus de 1000 clients satisfaits chaque mois, 
              en gardant toujours la même exigence de qualité et la même passion pour la cuisine.
            </p>
            
            {/* Valeurs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="Notre équipe en cuisine"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};