/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disabilita la minificazione che può causare problemi
    swcMinify: false,
    
    // Disabilita il controllo dei tipi TypeScript durante il build
    typescript: {
      ignoreBuildErrors: true,
    },
    
    // Disabilita il linting ESLint durante il build
    eslint: {
      ignoreDuringBuilds: true,
    },
    
    // Aumenta il timeout per il build
    experimental: {
      workerThreads: false,
      cpus: 1
    },
    
    // Disabilita la compressione delle immagini che può causare problemi
    images: {
      disableStaticImages: true,
    },
  }
  
  module.exports = nextConfig