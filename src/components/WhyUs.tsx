import React from 'react';
import { Flame, Clock, ThumbsUp, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: Flame,
    title: '100% CARNE PREMIUM',
    description: 'Blends seleccionados diariamente. Nunca congelados. Puro sabor.',
  },
  {
    icon: Clock,
    title: 'RAPIDEZ ABSOLUTA',
    description: 'Tu pedido listo antes de que te des cuenta y volando a tu puerta.',
  },
  {
    icon: ThumbsUp,
    title: 'CALIDAD ADICTIVA',
    description: 'Ingredientes frescos de productores locales. Nada de plástico.',
  },
  {
    icon: MapPin,
    title: 'DELIVERY EXPLOSIVO',
    description: 'Llegamos calientes y listos para devorar en gran parte de la ciudad.',
  },
];

export function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-deep-black border-y border-gray-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chili-red/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-widest mb-4">
            ¿POR QUÉ <span className="text-chili-red">NOSOTROS</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No somos otra hamburguesería más. Vinimos a cambiar las reglas del juego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-obsidian border border-gray-800 p-8 rounded-2xl text-center group hover:border-chili-red/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-deep-black border border-gray-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-chili-red/10 transition-all">
                  <Icon className="w-8 h-8 text-chili-red" />
                </div>
                <h3 className="text-xl font-display tracking-widest text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
