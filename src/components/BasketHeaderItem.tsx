"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const BasketHeaderItem = () => {
    const cart = useCartStore((state) => state.cart);
    const total = getCartTotal(cart);

    return (
        <Link href="/basket" className="flex header-links">
            <ShoppingCart size={20} />
            <div className="">
                <p className="text-xs font-extralight">
                    {`${cart.length > 0 ? `${cart.length}` : "No Items"}`}
                </p>
                <p>{cart.length > 0 ? total : "$0.00"}</p>
            </div>
        </Link>
    );
};

export default BasketHeaderItem;
