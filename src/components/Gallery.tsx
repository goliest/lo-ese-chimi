import React from 'react';
import { motion } from 'motion/react';

const IMAGES = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", // Burger close up
  "https://images.unsplash.com/photo-1541592106381-b31e96772714?q=80&w=800&auto=format&fit=crop", // Fries
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop", // Burger dark
  "https://images.unsplash.com/photo-1594212691516-436fecf5c4c1?q=80&w=800&auto=format&fit=crop", // Two burgers
  "https://images.unsplash.com/photo-1628191137573-dee64e727614?q=80&w=800&auto=format&fit=crop", // Sandwich/Lomito style
  "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop"  // Combo
];

export function Gallery() {
  return (
    <section className="py-2 overflow-hidden bg-deep-black">
      <div className="flex gap-4 overflow-hidden py-4 -mx-4 group">
        <motion.div 
          className="flex gap-4 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...IMAGES, ...IMAGES].map((src, i) => (
            <div 
              key={i} 
              className="w-[280px] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/40 transition-colors z-10" />
              <img 
                src={src} 
                alt="Food porn" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
