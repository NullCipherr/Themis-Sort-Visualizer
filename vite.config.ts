import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const shouldUsePagesBase = process.env.GITHUB_ACTIONS === 'true' && repositoryName.length > 0;

export default defineConfig({
  base: shouldUsePagesBase ? `/${repositoryName}/` : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
