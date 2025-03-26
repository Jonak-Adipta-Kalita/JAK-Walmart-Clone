export type ProductParent = {
    results: ProductContent[];
};

export type ProductContent = {
    content: Product;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    is_render_forced: boolean;
    status_code: number;
    parser_type: string;
};

export type Product = {
    price: ProductPrice;
    rating: ProductRating;
    seller: Seller;
    general: ProductGeneral;
    location: ProductLocation;
    variations: ProductVariation[];
    breadcrumbs: ProductBreadcrumb[];
    fulfillment: ProductFulfillment;
    specifications: ProductSpecification[];
    parse_status_code: number;
};

export type ProductPrice = {
    price: number;
    currency: string;
    price_strikethrough: number;
};

export type ProductRating = {
    count: number;
    rating: number;
};

export type Seller = {
    id: string;
    url: string;
    name: string;
    catalog_id: string;
    official_name: string;
};

export type ProductGeneral = {
    url: string;
    meta: ProductMeta;
    badge: string;
    brand: string;
    title: string;
    images: string[];
    main_image: string;
    description: string;
};

export type ProductMeta = {
    sku: string;
    gtin: string;
};

export type ProductLocation = {
    city: string;
    state: string;
    store_id: string;
    zip_code: string;
};

export type ProductVariation = {
    state: string;
    product_id: string;
    selected_options: ProductVariationOption[];
};

export type ProductVariationOption = {
    key: string;
    value: string;
};

export type ProductBreadcrumb = {
    url: string;
    category_name: string;
};

export type ProductFulfillment = {
    pickup: boolean;
    delivery: boolean;
    shipping: boolean;
    out_of_stock: boolean;
    free_shipping: boolean;
    pickup_information: string;
    delivery_information: string;
    shipping_information: string;
};

export type ProductSpecification = {
    key: string;
    value: string;
};
