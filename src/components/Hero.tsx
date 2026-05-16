import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-deep-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-chili-red/20 border border-chili-red text-chili-red text-sm font-bold tracking-widest mb-6 uppercase">
            Experiencia Premium
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-widest leading-none mb-6">
            LA HAMBURGUESA QUE TE <br className="hidden md:block"/>
            <span className="text-chili-red drop-shadow-[0_0_25px_rgba(230,0,0,0.8)]">ARRUINA</span> TODAS LAS DEMÁS
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-medium">
            Una mordida y entendés todo. No es comida rápida, es adicción legal. 
            Hecho para los que comen en serio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto text-xl" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              PEDÍ AHORA
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl" onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}>
              VER MENÚ
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-deep-black"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Customer"
                />
              ))}
            </div>
            <span className="font-semibold text-white">⭐ +1000 clientes satisfechos</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
