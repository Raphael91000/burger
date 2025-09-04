import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { RESTAURANT_INFO } from '../../config/constants';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: RESTAURANT_INFO.social.instagram, color: 'hover:text-pink-500' },
    { icon: Facebook, href: RESTAURANT_INFO.social.facebook, color: 'hover:text-blue-500' },
    { icon: Twitter, href: RESTAURANT_INFO.social.twitter, color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">{RESTAURANT_INFO.name}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {RESTAURANT_INFO.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">{RESTAURANT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">{RESTAURANT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Horaires</h4>
            <div className="space-y-2">
              <div>
                <div className="font-medium">Lun - Ven</div>
                <div className="text-gray-300">{RESTAURANT_INFO.hours.weekdays}</div>
              </div>
              <div>
                <div className="font-medium">Sam - Dim</div>
                <div className="text-gray-300">{RESTAURANT_INFO.hours.weekend}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {RESTAURANT_INFO.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};