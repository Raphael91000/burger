import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

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
    <header className="fixed top-4 right-4 z-40">
      <div className="flex items-center gap-6">
        {/* Navigation à droite */}
        <nav className="flex items-center space-x-6 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
          <button 
            onClick={onMenuClick}
            className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105"
          >
            Menu
          </button>
          <a href="#about" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
            À propos
          </a>
          <a href="#testimonials" className="text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105">
            Avis
          </a>
          <button 
            onClick={onOrderClick}
            className="bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 font-medium hover:scale-105 border border-red-500/30"
          >
            Commander
          </button>
        </nav>
        
        {/* Actions à droite */}
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-3">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
            <User className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse font-bold border-2 border-white">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};