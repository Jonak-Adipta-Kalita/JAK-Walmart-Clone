import { Product } from "@/typings/productTypings";

export const getCartTotal = (products: Product[]): string => {
    const total = products.reduce(
        (accumulator: number, currentProduct: Product) => {
            return accumulator + currentProduct.price.price;
        },
        0
    );

    return `${products[0]?.price.currency || ""} ${total.toFixed(2)}`;
};
