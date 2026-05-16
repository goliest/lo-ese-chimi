import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Product, MOCK_PRODUCTS } from '../data/products';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, index }: { product: Product; index: number; key?: string | number }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-obsidian rounded-2xl overflow-hidden border border-gray-800 hover:border-chili-red/50 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent z-10 opacity-60" />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {product.isPopular && <Badge>🔥 MÁS VENDIDO</Badge>}
          {product.isNew && <Badge variant="secondary">✨ NUEVO</Badge>}
        </div>
      </div>

      <div className="p-6 relative z-20 -mt-6 bg-gradient-to-t from-obsidian via-obsidian to-transparent pt-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-display tracking-wide group-hover:text-chili-red transition-colors">{product.name}</h3>
          <span className="text-xl font-bold text-warm-yellow whitespace-nowrap ml-4">
            Gs. {product.price.toLocaleString('es-PY')}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <Button 
          className="w-full group/btn" 
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" />
          Agregar al pedido
        </Button>
      </div>
    </motion.div>
  );
}

export function Featured() {
  const featuredProducts = MOCK_PRODUCTS.filter(p => p.isPopular || p.isNew).slice(0, 3);

  return (
    <section id="featured" className="py-24 bg-deep-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-widest mb-4">
            LOS MÁS <span className="text-chili-red">BRUTALES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Selección élite para paladares exigentes. Si es tu primera vez, empezá por acá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
