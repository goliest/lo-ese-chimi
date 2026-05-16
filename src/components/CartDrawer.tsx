import React from 'react';
import { ShoppingCart, LogOut, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    // Format order for WhatsApp
    let orderText = `*NUEVO PEDIDO - LO DE CHILI PY*%0A%0A`;
    items.forEach(item => {
      orderText += `${item.quantity}x ${item.name} - Gs.${(item.price * item.quantity).toLocaleString('es-PY')}%0A`;
      if (item.notes) {
        orderText += `    _Nota: ${item.notes}_%0A`;
      }
    });
    orderText += `%0A*TOTAL: Gs.${totalPrice.toLocaleString('es-PY')}*%0A%0A`;
    orderText += `Necesito delivery a: [COMPLETAR]`;

    // WhatsApp integration (Replace with real number)
    const phone = "595999000000"; 
    window.open(`https://wa.me/${phone}?text=${orderText}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-obsidian border-l border-gray-800 z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-display tracking-widest text-white flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-chili-red" />
            TU PEDIDO
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <ShoppingCart className="w-16 h-16 opacity-20" />
              <p className="text-lg">Tu carrito está vacío.</p>
              <Button variant="outline" onClick={() => setIsOpen(false)}>VER MENÚ</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-deep-black p-3 rounded-xl border border-gray-800">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                      <p className="text-chili-red font-semibold text-sm">
                        Gs. {item.price.toLocaleString('es-PY')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-obsidian rounded-lg border border-gray-800 px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-400 hover:text-white p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-deep-black border-t border-gray-800">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>Gs. {totalPrice.toLocaleString('es-PY')}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Delivery</span>
                <span>Calcular en chat</span>
              </div>
              <div className="pt-3 border-t border-gray-800 flex justify-between text-white font-bold text-xl">
                <span>Total</span>
                <span className="text-chili-red">Gs. {totalPrice.toLocaleString('es-PY')}</span>
              </div>
            </div>
            
            <Button 
              className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[#25D366]/30"
              onClick={handleCheckout}
            >
              <MessageCircle className="w-6 h-6 mr-2 fill-current" />
              PEDIR POR WHATSAPP
            </Button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Finalizarás la compra de forma segura vía WhatsApp.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
