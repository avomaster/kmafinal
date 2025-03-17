/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      turbopack: false, // disabling Turbopack so that Webpack is used
    },
  };
  
  export default nextConfig;
  