import { Result, SearchResult } from "@/typings/searchTypings";

export const USE_DUMMY_DATA = false;

export const fetchSearch = async (searchTerm: string) => {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    if (USE_DUMMY_DATA) {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_VERCEL_URL}/${searchTerm
                .toLowerCase()
                .replaceAll(" ", "+")}.json`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data: Result = await response.json();
        return data;
    } else {
        const newUrl = new URL(
            `https://www.walmart.com/search?q=${searchTerm}`
        );

        const body = {
            source: "universal_ecommerce",
            url: newUrl.toString(),
            geo_location: "United States",
            parse: true,
        };

        const response = fetch("https://realtime.oxylabs.io/v1/queries", {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${Buffer.from(
                    `${username}:${password}`
                ).toString("base64")}`,
            },
            next: {
                revalidate: 60 * 60,
            },
        })
            .then((res) => res.json() as Promise<SearchResult>)
            .then((data) => {
                if (data.results.length === 0) return;

                return data.results[0];
            });

        return response;
    }
};
