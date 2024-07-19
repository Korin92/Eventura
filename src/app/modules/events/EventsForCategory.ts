import { gql } from '@apollo/client';

export const GET_EVENTS_BY_CATEGORY = gql`
  query GetEventsByCategory($categoria: String!) {
    events(classificationName: $categoria) {
      id
      name
      dates {
        start {
          localDate
        }
      }
    }
  }
`;


export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      localDate
      venues
    }
  }
`;


export const GET_EVENTS_LAST_WEEK = gql`
  query GetEventsLastWeek {
    eventsLastWeek {
      id
      name
      venues {
        name
      }
    }
  }
`;

