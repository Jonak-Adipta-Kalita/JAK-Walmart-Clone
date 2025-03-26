type ProductParent = {
    results: ProductContent[];
};

type ProductContent = {
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

type Product = {
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

type ProductPrice = {
    price: number;
    currency: string;
    price_strikethrough: number;
};

type ProductRating = {
    count: number;
    rating: number;
};

type Seller = {
    id: string;
    url: string;
    name: string;
    catalog_id: string;
    official_name: string;
};

type ProductGeneral = {
    url: string;
    meta: ProductMeta;
    badge: string;
    brand: string;
    title: string;
    images: string[];
    main_image: string;
    description: string;
};

type ProductMeta = {
    sku: string;
    gtin: string;
};

type ProductLocation = {
    city: string;
    state: string;
    store_id: string;
    zip_code: string;
};

type ProductVariation = {
    state: string;
    product_id: string;
    selected_options: ProductVariationOption[];
};

type ProductVariationOption = {
    key: string;
    value: string;
};

type ProductBreadcrumb = {
    url: string;
    category_name: string;
};

type ProductFulfillment = {
    pickup: boolean;
    delivery: boolean;
    shipping: boolean;
    out_of_stock: boolean;
    free_shipping: boolean;
    pickup_information: string;
    delivery_information: string;
    shipping_information: string;
};

type ProductSpecification = {
    key: string;
    value: string;
};
