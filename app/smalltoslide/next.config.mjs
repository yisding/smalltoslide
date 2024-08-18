/** @type {import('next').NextConfig} */
const nextConfig = {experimental: {
    serverComponentsExternalPackages: ["llamaindex", "@zilliz/milvus2-sdk-node"], // Puts LlamaIndex in actual NodeJS mode with NextJS App Router
  }};

export default nextConfig;
