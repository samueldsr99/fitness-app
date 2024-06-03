import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "eu-central-1-shared-euc1-02.graphassets.com" }],
  },
};

export default withVanillaExtract(nextConfig);
