import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../../models/types';
import { formatPrice } from '../../utils/currency';
import { Button } from '../ui/Button';
import { DELIVERY_INFO } from '../../config/constants';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClose: () => void;
  totalPrice: number;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClose,
  totalPrice
}) => {
  const deliveryFee = totalPrice < DELIVERY_INFO.freeDeliveryThreshold ? DELIVERY_INFO.deliveryFee : 0;
  const finalTotal = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Votre Panier</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Votre panier est vide</p>
            <Button onClick={onClose} className="mt-6">
              Continuer mes achats
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Votre Panier</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 bg-gray-50 rounded-xl p-4">
              <img 
                src={item.product.image} 
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                <p className="text-gray-600 text-sm">{formatPrice(item.product.price)}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={() => onRemoveItem(item.product.id)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="border-t pt-4">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Sous-total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Livraison</span>
              <span className={deliveryFee === 0 ? 'text-green-600 font-medium' : ''}>
                {deliveryFee === 0 ? 'Gratuite !' : formatPrice(deliveryFee)}
              </span>
            </div>
            {totalPrice < DELIVERY_INFO.freeDeliveryThreshold && (
              <p className="text-sm text-orange-600">
                Ajoutez {formatPrice(DELIVERY_INFO.freeDeliveryThreshold - totalPrice)} pour la livraison gratuite !
              </p>
            )}
          </div>
          
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>{formatPrice(finalTotal)}</span>
          </div>
          
          <Button className="w-full mt-6" size="lg">
            Finaliser la commande
          </Button>
        </div>
      </div>
    </div>
  );
};