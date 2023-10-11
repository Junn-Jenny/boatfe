import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  // console.log("APOLLO GRAPHQL ENDPOINT", process.env.GRAPHQL_ENDPOINT)
  return new ApolloClient({
    cache: new InMemoryCache({
      fragments: createFragmentRegistry(gql`
        fragment features on Boats {
            id
            boat_id
            feature
        }
      `)
    }),
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: "http://127.0.0.1:8000/graphql",
    }),
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first'
      }
    }
  });
});