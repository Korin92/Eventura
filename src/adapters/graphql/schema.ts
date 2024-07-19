import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type City {
    name: String
  }

  type State {
    name: String
    stateCode: String
  }

  type Country {
    name: String
    countryCode: String
  }

  type Address {
    line1: String
  }

  type Venue {
    name: String
    url: String
    locale: String
    postalCode: String
    timezone: String
    city: City
    state: State
    country: Country
    address: Address
  }

  type Event {
    id: ID!
    name: String!
    venues: [Venue]
  }

  type Query {
    hello: String
    events: [Event]
    event(id: ID!): Event
    eventsLastWeek: [Event]
  }
`;



