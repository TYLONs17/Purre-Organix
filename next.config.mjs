/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.ibb.co' },
      {hostname: "dummyjson.com"}
    ],
  },
};

export default nextConfig;
    