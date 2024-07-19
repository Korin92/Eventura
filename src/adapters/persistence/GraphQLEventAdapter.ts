import {DataSource} from 'apollo-datasource';
import fetch from 'node-fetch';
import {EventPort} from '@/src/core/ports/EventPort';
import {Event} from '@/src/app/modules/events/models/Event';
import {formatEvent} from "@/src/app/components/utils/formatEvent.ts";
import * as process from "node:process";

export class GraphQLEventAdapter extends DataSource implements EventPort {
    private apiUrl: string;
    private apiKey: string;

    constructor(apiUrl: string) {
        super();
        this.apiUrl = apiUrl;
        this.apiKey = process.env.EXPO_PUBLIC_TICKETMASTER_API_KEY || '';
    }


    async getEvents(): Promise<Event[]> {
        const response = await fetch(`${this.apiUrl}/discovery/v2/events.json?apikey=${this.apiKey}`);
        const data: unknown = await response.json();

        if (typeof data === 'object' && data !== null && '_embedded' in data) {
            const apiResponse = data as { _embedded: { events: Event[] } };
            const events = apiResponse._embedded.events;

            // Ensure venue and localDate are not null
            events.forEach(event => {
                if (!event.localDate) {
                    event.localDate = 'Unknown Date';
                }
            });

            return events;
        } else {
            throw new Error("Failed to fetch events: Unexpected response structure in getEvents");
        }
    }

    async getEventsLastWeek(): Promise<Event[]> {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 7);

        const startDateString = startDate.toISOString().split('.')[0] + 'Z';
        const endDateString = endDate.toISOString().split('.')[0] + 'Z';

        const response = await fetch(`${this.apiUrl}/discovery/v2/events.json?apikey=${this.apiKey}&startDateTime=${startDateString}&endDateTime=${endDateString}`);
        const data = await response.json();


        if (typeof data === 'object' && data !== null && '_embedded' in data) {
            const apiResponse = data as { _embedded: { events: Event[] } };
            return apiResponse._embedded.events.map(formatEvent);
        } else {
            throw new Error("Failed to fetch events: Unexpected response structure in getEvents");
        }
    }


    async getEventById(id: string): Promise<Event | null> {
        const response = await fetch(`${this.apiUrl}/discovery/v2/events/${id}.json?apikey=${process.env.EXPO_PUBLIC_TICKETMASTER_API_KEY}`);
        const data: unknown = await response.json();

        if (typeof data === 'object' && data !== null && 'event' in data) {
            const apiResponse = data as { event: Event };
            return apiResponse.event || null;
        } else {
            throw new Error("Failed to fetch event: Unexpected response structure");
        }
    }

}





