import { Product } from "@/typings/productTypings";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

const useCartStore = create<CartState>()(
    devtools(
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
                        (p) => p.general.meta.sku == product.general.meta.sku
                    );

                    set((state) => {
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
    )
);
