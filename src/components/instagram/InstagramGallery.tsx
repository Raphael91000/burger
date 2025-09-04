import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export const InstagramGallery: React.FC = () => {
  const instagramPosts = [
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Instagram className="w-10 h-10" />
            Suivez-nous sur Instagram
          </h2>
          <p className="text-xl text-purple-100 mb-6">
            Découvrez nos dernières créations et l'ambiance de notre restaurant
          </p>
          <a 
            href="https://instagram.com/burgerpalace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
          >
            @burgerpalace
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
            >
              <img 
                src={post} 
                alt={`Post Instagram ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};