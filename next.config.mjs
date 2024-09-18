/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/preview/:path*",
        destination: "https://:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
