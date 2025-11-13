import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Plugin to handle Figma asset imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-loader',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Extract the asset hash from the import
        const hash = id.replace('figma:asset/', '');
        // Map to the public assets folder
        return `/public/assets/${hash}`;
      }
      return null;
    },
    load(id: string) {
      if (id.includes('/public/assets/')) {
        // Return the path that will be used in the built application
        const filename = path.basename(id);
        return `export default "/assets/${filename}"`;
      }
      return null;
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      './components': path.resolve(__dirname, './src/components'),
      './styles': path.resolve(__dirname, './src/styles')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
