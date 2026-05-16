import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Matias Gonzalez",
    texto: "La Chili Beast Burger me arruinó la vida. Ahora no puedo comer en otro lado. 10/10.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Camila Ruiz",
    texto: "Llegó súper rápido y caliente. Las papas con cheddar son de otro planeta.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Lucas Fernandez",
    texto: "El pan, la carne picada justa, la salsa secreta... entendieron todo. Mi nuevo vicio.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest mb-4">
            HABLAN LOS <span className="text-warm-yellow">EXPERTOS</span>
          </h2>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-warm-yellow text-warm-yellow" />
            ))}
          </div>
          <p className="text-white mt-2 font-bold text-xl">4.9/5 en Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-deep-black p-8 rounded-2xl border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-warm-yellow text-warm-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{review.texto}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
