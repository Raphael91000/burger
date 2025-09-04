import React, { useState, useEffect } from 'react';
import { Clock, Gift } from 'lucide-react';
import { Button } from '../ui/Button';

export const OffersSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: '1',
      title: '2 Burgers = 1 Gratuit',
      description: 'Offre valable sur tous nos burgers classiques',
      discount: '-50%',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      isLimited: true
    },
    {
      id: '2',
      title: 'Happy Hour Menu',
      description: 'Burger + Frites + Boisson à prix réduit',
      discount: '-30%',
      image: 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      isLimited: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Offres Spéciales
          </h2>
          <p className="text-xl text-red-100">
            Ne manquez pas nos promotions limitées !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div key={offer.id} className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
                {/* Image */}
                <div className="relative h-48">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                    {offer.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Gift className="w-6 h-6 text-red-600" />
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                  
                  {offer.isLimited && index === 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-red-600" />
                        <span className="text-red-600 font-medium">Offre limitée</span>
                      </div>
                      <div className="flex gap-4 text-center">
                        <div className="bg-red-600 text-white px-3 py-1 rounded-lg">
                          <div className="font-bold text-lg">{timeLeft.hours.toString().padStart(2, '0')}</div>
                          <div className="text-xs">heures</div>
                        </div>
                        <div className="bg-red-600 text-white px-3 py-1 rounded-lg">
                          <div className="font-bold text-lg">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                          <div className="text-xs">minutes</div>
                        </div>
                        <div className="bg-red-600 text-white px-3 py-1 rounded-lg">
                          <div className="font-bold text-lg">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                          <div className="text-xs">secondes</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button className="w-full">
                    Profiter de l'offre
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};