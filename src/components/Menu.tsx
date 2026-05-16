import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = ['Todos', 'Combos', 'Hamburguesas', 'Lomitos', 'Papas', 'Bebidas'];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'Todos' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-widest mb-4">
            NUESTRO <span className="text-warm-yellow">MENÚ</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 justify-start md:justify-center gap-2 hide-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all duration-300",
                activeCategory === category
                  ? "bg-warm-yellow text-deep-black shadow-[0_0_15px_rgba(255,184,0,0.4)]"
                  : "bg-deep-black text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="flex bg-deep-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <div className="w-1/3 min-w-[120px] sm:min-w-[150px] overflow-hidden relative">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="w-2/3 p-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl sm:text-2xl font-display text-white group-hover:text-warm-yellow transition-colors">{product.name}</h3>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 md:line-clamp-3 mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-bold text-white content-end">
                       Gs. {product.price.toLocaleString('es-PY')}
                    </span>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="rounded-full px-3"
                      onClick={() => addToCart(product)}
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
