import Product from "@/components/Product";
import { fetchSearch } from "@/lib/fetchSearch";
import fs from "fs";

const SearchPage = async ({
    searchParams: { q },
}: {
    searchParams: {
        q: string;
    };
}) => {
    const results = await fetchSearch(q);
    fs.writeFile("data.json", JSON.stringify(results), (err) => {
        if (err) {
            console.log(err);
        }
    });

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
                Results for <span className="text-gray-700/90">"{q}"</span>
            </h1>
            <h2 className="mb-5 text-gray-400">
                ({results?.content.page_details.total_results} results)
            </h2>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results?.content.results.map((product) => (
                    <li key={product.general.product_id}>
                        <Product product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchPage;
