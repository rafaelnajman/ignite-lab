import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl4or2j670tgl01z4bi096x62/master",
  cache: new InMemoryCache(),
});
