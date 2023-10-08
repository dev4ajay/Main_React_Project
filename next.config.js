/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
      dbConfig: {
          host: process.env.POSTGRES_HOST,
          port: 5432,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD, 
          database: process.env.POSTGRES_DATABASE
      },
      secret: 'tripecca4645687#5967325346457457$$@435346'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? '/api' // development api
          : '/api' // production api
  },
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '**',
          },
      ],
  },
  }
  
  module.exports = nextConfig