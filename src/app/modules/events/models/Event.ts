export interface Event {
    id: string;
    name: string;
    localDate: string;
    venues: Venue[];
    _embedded?: {
        venues: Venue[];
    };
}

export interface Venue {
    name: string;
    url: string;
    locale: string;
    postalCode: string;
    timezone: string;
    city: { name: string } | null;
    state: { name: string; stateCode: string } | null;
    country: { name: string; countryCode: string } | null;
    address: { line1: string } | null;
}