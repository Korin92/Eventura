import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.ts';
import { resolvers } from './resolvers.ts';
import { GraphQLEventAdapter } from '../persistence/GraphQLEventAdapter.js';
import * as dotenv from 'dotenv'


dotenv.config()

const eventApiUrl = 'https://app.ticketmaster.com';

const eventPort = new GraphQLEventAdapter(eventApiUrl);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        eventPort,
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}).catch(error => {
    console.error("Error starting Apollo Server:", error);
});


