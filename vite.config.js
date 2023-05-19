import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";
import vitestFetchMock from "vitest-fetch-mock";

export default defineConfig(() => ({
  build: { outDir: "build" },
  plugins: [react(), eslint(), viteTsconfigPaths(), vitestFetchMock()],
}));
