import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/graphql";

if (!process.env.HYGRAPH_CONTENT_API_URL) {
  throw new Error("HYGRAPH_CONTENT_API_URL is not set");
}

const client = new GraphQLClient(process.env.HYGRAPH_CONTENT_API_URL);
export const sdk = getSdk(client);
