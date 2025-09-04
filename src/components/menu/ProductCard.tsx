import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../../models/types';
import { formatPrice } from '../../utils/currency';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.popular && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Populaire
            </span>
          )}
          {product.new && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Nouveau
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">{formatPrice(product.price)}</span>
          <Button
            size="sm"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1 group"
          >
            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};