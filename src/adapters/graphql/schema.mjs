import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Event {
    id: ID!
    name: String!
    localDate: String!
    venue: String!
  }

  type Query {
    events: [Event]
    event(id: ID!): Event
  }
`;

