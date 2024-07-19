import { EventPort } from '@/src/core/ports/EventPort';

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        events: async (_: any, __: any, { dataSources }: { dataSources: { eventPort: EventPort } }) => {
            return dataSources.eventPort.getEvents();
        },
        event: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: { eventPort: EventPort } }) => {
            return dataSources.eventPort.getEventById(id);
        },
        eventsLastWeek: async (_: any, __: any, { dataSources }: { dataSources: { eventPort: EventPort } }) => {
            return dataSources.eventPort.getEventsLastWeek();
        }
    },
};

