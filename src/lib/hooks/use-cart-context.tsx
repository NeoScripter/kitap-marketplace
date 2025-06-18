import { useContext } from "react";
import { CartContext } from "../providers/shopping-card-provider";

export function useCartContext() {
    const cartContext = useContext(CartContext);

    if (cartContext == null) {
        throw new Error('Must be within provider');
    }

    return cartContext;
}
