/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/es/quienes-somos',
        destination: '/es/about-us',
      },
      {
        source: '/es/novedades',
        destination: '/es/news',
      },
      {
        source: '/es/contacto',
        destination: '/es/contact',
      },
      {
        source: '/es/sumate',
        destination: '/es/join-us',
      },
    ];
  }
};

export default nextConfig;
