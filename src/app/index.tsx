import {ApolloProvider} from "@apollo/client";
import {client} from "@/src/adapters/graphql/apolloClient";
import {HomePage} from "@/src/app/pages/home";

export default function Page() {
  return (
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
  );
}

