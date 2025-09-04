import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../models/types';

interface MenuSectionProps {
  onAddToCart: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('burger');

  const categories = [
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'side', name: 'Accompagnements', icon: '🍟' },
    { id: 'drink', name: 'Boissons', icon: '🥤' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Palace Burger Classic',
      description: 'Notre signature : steak haché 180g, cheddar affiné, salade, tomate, oignon, sauce Palace',
      price: 14.90,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'burger',
      popular: true
    },
    {
      id: '2',
      name: 'BBQ Bacon Deluxe',
      description: 'Steak 200g, bacon croustillant, cheddar, oignon caramélisé, sauce BBQ maison',
      price: 16.90,
      image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'burger',
      new: true
    },
    {
      id: '3',
      name: 'Crispy Chicken',
      description: 'Escalope de poulet panée, salade iceberg, tomate, mayo épicée',
      price: 13.90,
      image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'burger'
    },
    {
      id: '4',
      name: 'Veggie Supreme',
      description: 'Steak végétal Beyond, avocat, roquette, tomate, sauce vegan',
      price: 15.90,
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'burger'
    },
    {
      id: '5',
      name: 'Frites Palace',
      description: 'Frites maison dorées à souhait, sel de Guérande',
      price: 4.50,
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'side'
    },
    {
      id: '6',
      name: 'Onion Rings',
      description: 'Rondelles d\'oignon panées, sauce ranch',
      price: 5.90,
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'side'
    },
    {
      id: '7',
      name: 'Coca-Cola',
      description: 'Canette 33cl',
      price: 2.50,
      image: 'https://images.pexels.com/photos/2668621/pexels-photo-2668621.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'drink'
    },
    {
      id: '8',
      name: 'Limonade Artisanale',
      description: 'Citron frais, menthe, eau pétillante',
      price: 4.90,
      image: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'drink'
    },
    {
      id: '9',
      name: 'Cookie Chocolat',
      description: 'Cookie maison aux pépites de chocolat, servi chaud',
      price: 3.90,
      image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      category: 'dessert'
    }
  ];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Menu
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg">
            Découvrez notre sélection de burgers artisanaux et accompagnements, 
            préparés avec passion et des ingrédients de qualité.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-red-50 hover:text-red-600 shadow'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};