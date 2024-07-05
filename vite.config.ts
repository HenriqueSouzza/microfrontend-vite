import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: [{
        login: {
          external: 'http://localhost:4173/assets/remoteEntry.js',
          externalType: 'url'
        }
      }]
    }),
  ],
  build: {
    target: 'esnext'
  }
});
