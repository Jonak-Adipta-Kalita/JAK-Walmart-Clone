import { Product } from "@/typings/searchTypings";
import Image from "next/image";

const Product_ = ({ product }: { product: Product }) => {
    return (
        <div className="">
            <Image
                src={product.general.image}
                alt={product.general.title}
                width={200}
                height={200}
            />
        </div>
    );
};

export default Product_;
