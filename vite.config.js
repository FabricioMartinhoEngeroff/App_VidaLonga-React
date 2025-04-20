import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

const aliasPaths = {
  '@api': 'src/api',
  '@application': 'src/application',
  '@components': 'src/components',
  '@module': 'src/module',
  '@pages': 'src/pages',
  '@styles': 'src/styles',
  '@utils': 'src/utils'
};


const resolvedAliases = Object.fromEntries(
  Object.entries(aliasPaths).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: resolvedAliases
  },
  build: {
    outDir: 'dist'
  }
});
