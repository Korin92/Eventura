import { Event } from '@/src/modules/events/models/Event';

export interface EventPort {
    getEvents(): Promise<Event[]>;
    getEventById(id: string): Promise<Event | null>;
    getEventsLastWeek(): Promise<Event[]>;
}

