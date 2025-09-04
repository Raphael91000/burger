import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from './components/header/Header';
import { HeroSection } from './components/hero/HeroSection';
import { MenuSection } from './components/menu/MenuSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { OffersSection } from './components/offers/OffersSection';
import { AboutSection } from './components/about/AboutSection';
import { InstagramGallery } from './components/instagram/InstagramGallery';
import { Footer } from './components/footer/Footer';
import { Cart } from './components/cart/Cart';
import { useCart } from './hooks/useCart';
import { Product } from './models/types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getItemCount
  } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} ajouté au panier !`, {
      duration: 2000,
      style: {
        background: '#DC2626',
        color: 'white',
      },
    });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      
      <Header 
        cartItemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
        onOrderClick={scrollToOrder}
        onMenuClick={scrollToMenu}
      />
      
      <HeroSection 
        onOrderClick={scrollToOrder}
        onMenuClick={scrollToMenu}
      />
      
      <MenuSection onAddToCart={handleAddToCart} />
      
      <OffersSection />
      
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <InstagramGallery />
      
      <Footer />
      
      {isCartOpen && (
        <Cart
          items={items}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onClose={() => setIsCartOpen(false)}
          totalPrice={getTotalPrice()}
        />
      )}
    </div>
  );
}

export default App;