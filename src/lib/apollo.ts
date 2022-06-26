import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pz8llz2mlm01yw3mfx4mhf/master',
    cache: new InMemoryCache()
})