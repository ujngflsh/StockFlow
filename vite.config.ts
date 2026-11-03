import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return 'vendor-react';
          }

          if (/\/node_modules\/(recharts|d3-[^/]+)\//.test(id)) {
            return 'vendor-charts';
          }

          if (id.includes('/node_modules/lucide-react/')) {
            return 'vendor-icons';
          }

          if (/\/node_modules\/(react-hook-form|zod|@hookform\/resolvers)\//.test(id)) {
            return 'vendor-forms';
          }
        },
      },
    },
  },
});
