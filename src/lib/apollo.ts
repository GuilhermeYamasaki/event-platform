import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', //url do graphql
    cache: new InMemoryCache()
}) 