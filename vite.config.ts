import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/ZERODARK.png', 'images/ZEROLIGHT.png'],
      manifest: {
        name: 'Daniel León — Portafolio',
        short_name: 'Daniel-Zero',
        description:
          'Portafolio profesional de Daniel León (Daniel-Zero), desarrollador web Full Stack.',
        lang: 'es',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a1f14',
        theme_color: '#0a1f14',
        icons: [
          {
            src: '/images/ZERODARK.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/images/ZERODARK.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
