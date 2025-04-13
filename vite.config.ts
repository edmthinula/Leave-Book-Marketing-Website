import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Enable HTTP/2
    https: mode === 'development' ? false : {},
  },
  plugins: [
    react(),
    // Only use componentTagger in development
    mode === 'development' && componentTagger(),
    // Enable code splitting
    splitVendorChunkPlugin(),
    // Compress text assets (addressing "Enable text compression")
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240, // only compress files larger than 10kb
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      threshold: 10240,
    }),
    // Optimize images (addressing "Properly size images" and "Efficiently encode images")
    mode === 'production' && viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: true,
          },
        ],
      },
      webp: {
        quality: 80,
      },
    }),
    // Bundle analyzer in report mode
    mode === 'production' && visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Minimize JavaScript (addressing "Minify JavaScript")
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Reduce chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add more manual chunks as needed for your dependencies
        },
        // Avoid enormous network payloads
        chunkSizeWarningLimit: 800, // in kBs
      },
    },
    // Generate modern JavaScript for modern browsers
    target: 'es2020',
    // Pre-load critical assets
    assetsInlineLimit: 4096, // 4kb - inline small assets
    // Cache policy headers
    cssCodeSplit: true,
    sourcemap: mode !== 'production',
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster startup
    include: ['react', 'react-dom'],
    // Reduce duplicate modules
    esbuildOptions: {
      treeShaking: true,
    },
  },
}));