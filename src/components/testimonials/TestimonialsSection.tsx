import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { StarRating } from '../ui/StarRating';
import { Testimonial } from '../../models/types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Marie Dubois',
      rating: 5,
      comment: 'Le meilleur burger de Paris ! La viande est parfaitement cuite et les frites sont délicieuses. Livraison rapide en plus.',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Thomas Martin',
      rating: 5,
      comment: 'J\'adore le BBQ Bacon Deluxe ! Service client au top et qualité constante. Je recommande vivement.',
      date: '2024-01-12'
    },
    {
      id: '3',
      name: 'Sophie Leroy',
      rating: 4,
      comment: 'Excellent burger végétarien, enfin une option savoureuse pour les végés ! Packaging écologique en plus.',
      date: '2024-01-10'
    },
    {
      id: '4',
      name: 'Pierre Moreau',
      rating: 5,
      comment: 'Livraison ultra rapide, burger encore chaud à l\'arrivée. Portion généreuse, j\'ai adoré !',
      date: '2024-01-08'
    },
    {
      id: '5',
      name: 'Julie Chen',
      rating: 5,
      comment: 'Service impeccable, burger délicieux avec des ingrédients frais. Mon nouveau restaurant préféré !',
      date: '2024-01-05'
    },
    {
      id: '6',
      name: 'Antoine Durand',
      rating: 4,
      comment: 'Très bon rapport qualité-prix. Le Palace Classic est un délice, j\'y retournerai sûrement.',
      date: '2024-01-03'
    }
  ];

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section className="py-16 bg-white/85 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={Math.round(averageRating)} size="lg" />
            <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}/5</span>
            <span className="text-gray-600">({testimonials.length} avis)</span>
          </div>
          <p className="text-xl text-white drop-shadow-lg">
            Plus de 1000 clients satisfaits nous font confiance chaque mois
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};