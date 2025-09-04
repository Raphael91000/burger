import React from 'react';
import { Clock, Truck } from 'lucide-react';
import { Button } from '../ui/Button';
import { RESTAURANT_INFO, DELIVERY_INFO } from '../../config/constants';

interface HeroSectionProps {
  onOrderClick: () => void;
  onMenuClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOrderClick, onMenuClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge de livraison gratuite */}
        <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
          <Truck className="w-4 h-4" />
          Livraison gratuite dès {DELIVERY_INFO.freeDeliveryThreshold}€
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {RESTAURANT_INFO.name}
          <span className="block text-orange-400 text-3xl md:text-4xl lg:text-5xl mt-2">
            {RESTAURANT_INFO.tagline}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Découvrez nos burgers artisanaux préparés avec des ingrédients frais et locaux. 
          Une explosion de saveurs vous attend !
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" onClick={onOrderClick} className="w-full sm:w-auto min-w-48">
            Commander Maintenant
          </Button>
          <Button variant="outline" size="lg" onClick={onMenuClick} className="w-full sm:w-auto min-w-48 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
            Voir le Menu
          </Button>
        </div>
        
        {/* Info rapide */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-400" />
            <span>Livraison en {DELIVERY_INFO.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-orange-400" />
            <span>Zones de livraison : 5km autour</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};