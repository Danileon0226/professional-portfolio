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
        name: 'Zero Agency — Desarrollo de Software y Diseño Web',
        short_name: 'Zero Agency',
        description:
          'Agencia de desarrollo de software y diseño web de alto rendimiento en Colombia.',
        lang: 'es',
        start_url: '/',
        display: 'standalone',
        background_color: '#050409',
        theme_color: '#050409',
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
