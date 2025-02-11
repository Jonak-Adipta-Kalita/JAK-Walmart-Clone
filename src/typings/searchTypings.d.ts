export interface SearchResult {
    results: Result[];
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
}

export interface Result {
    content: Content;
}

export interface Content {
    url: string;
    organic: Organic[];
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;
}

export interface Organic {
    url: string;
    image: string;
    price: {
        price: number;
        currency: string;
    };
    title: string;
    rating: {
        count: number;
        rating: number;
    };
    seller: {
        name: string;
    };
    product_id: string;
    badge?: string;
    variants: { url: string; title: string; product_id: string }[];
}

export interface Job {
    callback_url: string;
    client_id: string;
    context: { key: string; value: any }[];
    created_at: string;
    domain: string;
    geo_location: null | string;
    id: string;
    limit: number;
    locale: null | string;
    pages: number;
    parse: boolean;
    parser_type: null | string;
    parsing_instructions: null | string;
    browser_instructions: null | string;
    render: null | boolean;
    url: string;
    query: string;
    source: string;
    start_page: number;
    status: string;
    storage_type: string;
    storage_url: string;
    subdomain: string;
    content_encoding: string;
    updated_at: string;
    user_agent_type: string;
    session_info: null | string;
    statuses: any[];
    client_notes: null | string;
    _links: {
        rel: string;
        href: string;
        method: string;
    }[];
}
