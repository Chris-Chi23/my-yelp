export interface CategoryBasic {
    alias: string;
    title: string;
}

export interface Category extends CategoryBasic{
    parent_aliases: string[];
    country_whitelist: string[];
    country_blacklist: string[];
}

export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface Location {
    address1: string;
    address2: string;
    address3: string | null;
    city: string;
    zip_code: string;
    country: string;
    state: string;
    display_address: string[];
}

export interface OpenHoursItem {
    is_overnight: boolean;
    start: string;
    end: string;
    day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HoursItem {
    open: OpenHoursItem[];
    hours_type: 'REGULAR';
    is_open_now: boolean;
}

export interface BusinessListItem {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_closed: boolean;
    url: string;
    review_count: number;
    categories: CategoryBasic[];
    rating: number;
    coordinates: Coordinate;
    transactions: ('pickup' | 'delivery' | 'restaurant_reservation')[];
    location: Location;
    phone: string;
    display_phone: string;
    distance: number;
}

export interface BusinessSearchResult {
    total: number;
    businesses: BusinessListItem[];
    region: {
        center: Coordinate
    }
}

export interface BusinessDetail extends BusinessListItem{
    is_claimed: boolean;
    photos: string[];
}