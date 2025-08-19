import { fileURLToPath, URL } from 'node:url'
import faroUploader from '@grafana/faro-rollup-plugin';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    faroUploader({
    appName: 'Petcare',
    endpoint: 'https://faro-api-prod-eu-north-0.grafana.net/faro/api/v1',
    appId: '468',
    stackId: '1343568',
    // instructions on how to obtain your API key are in the documentation
    // https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/sourcemap-upload-plugins/#obtain-an-api-key
    apiKey: `${process.env.VITE_GRAFANA_API_KEY}`,
    gzipContents: true,
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
