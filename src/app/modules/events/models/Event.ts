export interface Event {
    id: string;
    name: string;
    localDate: string;
    venue: string;
}

export interface Venue {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    postalCode: string;
    timezone: string;
    city: {
        name: string;
    };
    state: {
        name: string;
        stateCode: string;
    };
    country: {
        name: string;
        countryCode: string;
    };
    address: {
        line1: string;
    };
}