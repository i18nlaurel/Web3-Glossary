import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/web3-glossary-website', // Adjust this if your repository name is different
  plugins: [react()],
});
