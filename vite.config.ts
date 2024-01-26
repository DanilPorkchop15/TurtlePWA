import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    VitePWA({
      manifest:{
        icons:[
          {
            src: '/icons/100x100.jpg',
            sizes: '100x100',
            type: 'image/jpg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
