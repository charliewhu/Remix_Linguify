/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig, configDefaults } from 'vitest/config'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, '**/*.spec.*'],
    setupFiles: ["./tests/setup-test-env.ts"],
  },
});



