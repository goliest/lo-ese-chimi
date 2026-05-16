export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Combos' | 'Hamburguesas' | 'Lomitos' | 'Papas' | 'Bebidas';
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'h1',
    name: 'Chili Beast Burger',
    description: 'Doble smash burger, cheddar melt, tocino crujiente, cebolla caramelizada y nuestra salsa secreta Chili.',
    price: 45000,
    category: 'Hamburguesas',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'h2',
    name: 'Truffle Smash',
    description: '150g de carne premium, champiñones salteados, queso suizo y mayonesa de trufa negra.',
    price: 52000,
    category: 'Hamburguesas',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1594212691516-436fecf5c4c1?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'h3',
    name: 'Classic American',
    description: 'La que nunca falla. Carne smash, cheddar, lechuga, tomate, cebolla morada fresca y ketchup.',
    price: 35000,
    category: 'Hamburguesas',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'c1',
    name: 'Triple Threat Combo',
    description: 'Chili Beast Burger + Papas con cheddar y tocino + Bebida grande.',
    price: 75000,
    category: 'Combos',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'l1',
    name: 'El Lomito Rey',
    description: 'Lomito vacuno tierno, huevo frito, jamón, queso, lechuga, tomate y mayo casera en pan árabe.',
    price: 48000,
    category: 'Lomitos',
    image: 'https://images.unsplash.com/photo-1628191137573-dee64e727614?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'p1',
    name: 'Chili Fries',
    description: 'Papas fritas extra crujientes bañadas en queso cheddar fundido y lluvia de tocino ahumado.',
    price: 25000,
    category: 'Papas',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e96772714?q=80&w=1000&auto=format&fit=crop',
    isPopular: true,
  },
  {
    id: 'b1',
    name: 'Gaseosa 500ml',
    description: 'Línea Coca-Cola bien fría.',
    price: 10000,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop',
  }
];
