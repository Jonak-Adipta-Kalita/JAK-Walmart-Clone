"use client";

import { useCartStore } from "@/lib/store";
import { Product } from "@/typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";
import { useShallow } from "zustand/shallow";

const AddToCart = ({ product }: { product: Product }) => {
    const [cart, addToCart] = useCartStore(
        useShallow((state) => [state.cart, state.addToCart])
    );

    const howManyInCart = cart.filter(
        (item) => item.general.meta.sku === product.general.meta.sku
    ).length;

    const handleAdd = () => {
        addToCart(product);
    };

    if (howManyInCart > 0) {
        return (
            <div className="flex space-x-5 items-center">
                <RemoveFromCart product={product} />
                <span>{howManyInCart}</span>
                <Button
                    className="bg-walmart hover:bg-walmart/50"
                    onClick={handleAdd}
                >
                    +
                </Button>
            </div>
        );
    }

    return (
        <Button onClick={handleAdd} className="bg-walmart hover:bg-walmart/50">
            Add to Cart
        </Button>
    );
};

export default AddToCart;
