import { gql } from '@apollo/client';

const GET_EVENTOS_POR_CATEGORIA = gql`
  query GetEventosPorCategoria($categoria: String!) {
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

export default GET_EVENTOS_POR_CATEGORIA;

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      localDate
      venue
    }
  }
`;

