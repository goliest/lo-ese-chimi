import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { Menu } from './components/Menu';
import { WhyUs } from './components/WhyUs';
import { SocialProof } from './components/SocialProof';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-deep-black text-white selection:bg-chili-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Featured />
          <WhyUs />
          <Menu />
          <Gallery />
          <SocialProof />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
