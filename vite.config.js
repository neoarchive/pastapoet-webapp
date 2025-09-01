import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import devtools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    devtools(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates SW when a new version is deployed
      manifest: {
        name: 'Pasta Poet',         // Full app name
        short_name: 'PastaPoet',       // Short name for home screen
        start_url: '/',             // Start URL when launched from home screen
        display: 'standalone',      // Opens without browser UI
        background_color: '#ffffff',
        theme_color: '#4DBA87',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
        ],
        screenshots: [
          {
            src: "/screenshot-desktop.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "/screenshot-mobile.png",
            sizes: "360x800",
            type: "image/png"
          }
        ],
      },

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})
