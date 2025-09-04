import React from 'react';
import { StarRating } from '../ui/StarRating';
import { Testimonial } from '../../models/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-red-600 font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <StarRating rating={testimonial.rating} size="sm" />
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic mb-4">
        "{testimonial.comment}"
      </blockquote>
      
      <time className="text-sm text-gray-500">
        {new Date(testimonial.date).toLocaleDateString('fr-FR')}
      </time>
    </div>
  );
};