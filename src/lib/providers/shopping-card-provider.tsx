
import { createContext } from 'react';
import useLocalStorage from '../hooks/use-local-storage';

type CartContextType = {
    cart: CartItem[];
    add: (id: number) => void;
    deduct: (id: number) => void;
    remove: (id: number) => void;
};

export type CartItem = {
    id: number;
    quantity: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useLocalStorage<CartItem[]>(
        'shopping-cart',
        []
    );

    function add(id: number) {
        setCart(prev => {
            const current = prev.find(item => item.id === id);
            if (current != null) {
                return prev.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { id: id, quantity: 1 }]
            }
        })
    }

    function deduct(id: number) {
        setCart(prev => {
            const current = prev.find(item => item.id === id);
            if (current != null) {
                if (current.quantity === 1) {
                    return prev.filter(item => item.id !== id);
                } else {
                    return prev.map(item =>
                        item.id === id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                }
            } else {
                return prev;
            }
        })
    }

    function remove(id: number) {
        setCart(prev => {
            const current = prev.find(item => item.id === id);
            if (current != null) {
                return prev.filter(item => item.id !== id);
            } else {
                return prev;
            }
        })
    }

    return (
        <CartContext.Provider
            value={{add, deduct, remove, cart}}
        >
            {children}
        </CartContext.Provider>
    );
}
