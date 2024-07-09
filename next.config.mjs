/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/:id',
        destination: '/items/:id',
        permanent: true, // 웹브라우저에게 주소가 바뀌었다는 것을 저장하게 하려면 true (308), false는 307
      },
    ]
  },
};

export default nextConfig;
