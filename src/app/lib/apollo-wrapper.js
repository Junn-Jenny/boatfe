"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
      uri: "http://127.0.0.1:8000/graphql",
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      //makeSuspenseCache={makeSuspenseCache}
    >
      {children}
    </ApolloNextAppProvider>
  );
}