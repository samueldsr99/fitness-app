import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

if (!process.env.HYGRAPH_CONTENT_API_URL) {
  throw new Error("HYGRAPH_CONTENT_API_URL is not set");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_CONTENT_API_URL,
  documents: "./src/graphql/**/*.graphql",
  generates: {
    "./src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
      config: {
        rawRequest: true,
      },
    },
  },
};

export default config;
