import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4000/', // URL de tu servidor Apollo
    }),
    cache: new InMemoryCache(),
});
