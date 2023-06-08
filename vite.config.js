import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  build: { outDir: 'build' },
  plugins: [react(), eslint(), viteTsconfigPaths()],
  test: {
    setupFiles: ['./setupVitest.ts'],
  },
}));
