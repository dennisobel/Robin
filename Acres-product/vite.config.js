import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Every component in this template puts JSX inside a .js file (a CRA habit).
  // Vite only parses JSX in .jsx by default, so widen the loader instead of
  // renaming ~150 files.
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    // The template hardcodes `process.env.PUBLIC_URL` in ~150 asset paths (a CRA
    // convention). Vite serves `public/` from the root, so an empty string keeps
    // every one of those paths resolving correctly without touching them.
    'process.env.PUBLIC_URL': JSON.stringify(''),
  },
});
