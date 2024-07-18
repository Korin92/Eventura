import { Event } from '@/src/app/modules/events/models/Event';

export interface EventPort {
    getEvents(): Promise<Event[]>;
    getEventById(id: string): Promise<Event | null>;
}

