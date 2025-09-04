import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { RESTAURANT_INFO } from '../../config/constants';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onOrderClick: () => void;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartItemCount, 
  onCartClick, 
  onOrderClick, 
  onMenuClick 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">{RESTAURANT_INFO.name}</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onMenuClick}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Menu
            </button>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              À propos
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Avis
            </a>
            <button 
              onClick={onOrderClick}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium"
            >
              Commander
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};