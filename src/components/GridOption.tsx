import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const GridOption = ({
    title,
    image,
    className,
}: {
    title: string;
    image: string;
    className?: string;
}) => {
    return (
        <Link
            href={{
                pathname: "/search",
                query: {
                    q: title,
                },
            }}
            className={cn("relative grid-option", className)}
        >
            <h2 className="text-xl font-bold">{title}</h2>
            {image && (
                <Image
                    src={`https://links.papareact.com/${image}`}
                    layout="fill"
                    className="object-cover opacity-20 rounded-md"
                    alt={title}
                />
            )}
        </Link>
    );
};

export default GridOption;
