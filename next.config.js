/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos
  images: {
    unoptimized: true, // Necessário para export estático
  },
  // Remove ou comente se tiver trailingSlash: true
}

module.exports = nextConfig