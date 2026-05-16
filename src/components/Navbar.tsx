import React from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';

export function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <span className="font-display text-3xl tracking-wider text-white">
                LO DE <span className="text-chili-red">CHILI</span> PY
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#menu" className="text-gray-300 hover:text-warm-yellow px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider font-display">Menú</a>
              <a href="#promos" className="text-gray-300 hover:text-warm-yellow px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider font-display">Promos</a>
              <a href="#nosotros" className="text-gray-300 hover:text-warm-yellow px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider font-display">Conocenos</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="relative P-2"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-6 w-6 text-white" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-chili-red rounded-full">
                  {totalItems}
                </span>
              )}
            </Button>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-obsidian border-b border-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#menu" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-display tracking-wider">MENÚ</a>
            <a href="#promos" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-display tracking-wider">PROMOS</a>
            <a href="#nosotros" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium font-display tracking-wider">CONOCENOS</a>
          </div>
        </div>
      )}
    </nav>
  );
}
