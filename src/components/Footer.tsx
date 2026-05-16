import React from 'react';
import { MapPin, Instagram, Facebook, Phone, MapPin as MapPinIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display text-4xl tracking-wider text-white mb-6 block">
              LO DE <span className="text-chili-red">CHILI</span> PY
            </span>
            <p className="text-gray-400 max-w-sm mb-6">
              Street food premium en Asunción. Hacemos las cosas bien o no las hacemos directamente. 
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-deep-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-warm-yellow hover:border-warm-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-black border border-gray-800 flex items-center justify-center text-gray-400 hover:fill-warm-yellow hover:border-warm-yellow transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-black border border-gray-800 flex items-center justify-center text-gray-400 hover:text-chili-red hover:border-chili-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-widest">CONTACTO</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-chili-red shrink-0" />
                Av. España y San Martin, Asunción, Paraguay
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-chili-red shrink-0" />
                +595 999 000000
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-widest">HORARIOS</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Lun - Jue:</span>
                <span className="text-white">18:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vie - Sáb:</span>
                <span className="text-white">18:00 - 02:00</span>
              </li>
              <li className="flex justify-between border-t border-gray-800 pt-3">
                <span>Domingo:</span>
                <span className="text-white">18:00 - 01:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lo de Chili Py. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
