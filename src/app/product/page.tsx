import { fetchProduct } from "@/lib/fetchProduct";
import { notFound } from "next/navigation";

const ProductPage = async ({
    searchParams: { url },
}: {
    searchParams: { url: string };
}) => {
    const product = await fetchProduct(url);
    if (!product) return notFound();

    return <div></div>;
};

export default ProductPage;
