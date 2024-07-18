import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';

// Definición del esquema GraphQL
const typeDefs = gql`
  type Event {
    id: ID
    name: String
    localDate: String
    venue: String
  }

  type Query {
    events: [Event]
  }
`;

// Definición de los resolutores
const resolvers = {
    Query: {
        events: async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=z88cSbDcW6jEdfq3YvTLXoiWi7pqDrIY`);
                const data = await response.json();

                // Verifica si hay un error en la respuesta
                if (data.fault) {
                    console.error("API Error:", data.fault.faultstring);
                    throw new Error(`Failed to fetch events: ${data.fault.faultstring}`);
                }

                // Verifica la estructura de la respuesta
                if (!data._embedded || !data._embedded.events) {
                    console.error("Unexpected response structure:", data);
                    throw new Error("Failed to fetch events: Unexpected response structure");
                }

                return data._embedded.events.map(event => ({
                    id: event.id,
                    name: event.name,
                    localDate: event.dates.start.localDate,
                    venue: event._embedded.venues[0].name,
                }));
            } catch (error) {
                console.error("Error fetching events:", error);
                throw new Error("Failed to fetch events");
            }
        },
    },
};

// Creación del servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Inicio del servidor
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
}).catch(error => {
    console.error("Error starting Apollo Server:", error);
});

