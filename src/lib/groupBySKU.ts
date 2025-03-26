import { Product } from "@/typings/productTypings";

type Group = Record<string, Product[]>;

export const groupBySKU = (products: Product[]): Group => {
    return products?.reduce((acum: Group, curr: Product) => {
        const sku = curr.general.meta.sku;
        if (!acum[sku]) {
            acum[sku] = [];
        }

        acum[sku].push(curr);
        return acum;
    }, {});
};
