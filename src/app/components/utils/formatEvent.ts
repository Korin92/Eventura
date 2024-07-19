import {Event} from "@/src/app/modules/events/models/Event.ts";

export function formatEvent(event: any): Event {
    return {
        id: event.id,
        name: event.name,
        localDate: event.localDate || 'Unknown Date',
        venues: event._embedded?.venues?.map((venue: any) => ({
            name: venue.name,
            url: venue.url,
            locale: venue.locale,
            postalCode: venue.postalCode,
            timezone: venue.timezone,
            city: venue.city ? { name: venue.city.name } : null,
            state: venue.state ? { name: venue.state.name, stateCode: venue.state.stateCode } : null,
            country: venue.country ? { name: venue.country.name, countryCode: venue.country.countryCode } : null,
            address: venue.address ? { line1: venue.address.line1 } : null,
        })) || [],
    };
}