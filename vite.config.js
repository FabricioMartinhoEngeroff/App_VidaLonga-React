import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/api'),
      '@application': path.resolve(__dirname, './src/application'),
      '@components': path.resolve(__dirname, './src/components'),
      '@module': path.resolve(__dirname, './src/module'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
});
