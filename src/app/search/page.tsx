import { fetchSearch } from "@/lib/fetchSearch";

const SearchPage = async ({
    searchParams: { q },
}: {
    searchParams: {
        q: string;
    };
}) => {
    const data = await fetchSearch(q);

    return <div>{JSON.stringify(data)}</div>;
};

export default SearchPage;
