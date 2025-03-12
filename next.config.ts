import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: {
      properties: ['^data-testid$'],
    },
  },
  async rewrites() {
    return [
      {
        //ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        //ex. http://localhost:9000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
};


export default nextConfig;

