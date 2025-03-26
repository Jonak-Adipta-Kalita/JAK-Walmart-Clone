import { Product } from "@/typings/productTypings";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => {
                set((state) => ({
                    cart: [...state.cart, product],
                }));
            },
            removeFromCart: (product) => {
                const productToRemove = get().cart.findIndex(
                    (p) => p.general.meta.sku === product.general.meta.sku
                );

                set((state) => {
                    if (state.cart.length <= 0) return { cart: [] };

                    const newCart = [...state.cart];

                    newCart.splice(productToRemove, 1);
                    return { cart: newCart };
                });
            },
        }),
        {
            name: "shopping-cart-storage",
        }
    )
);
