import { defineConfig } from "vite";
import { resolve } from "path";
// @ts-ignore
import { peerDependencies, dependencies } from "./package.json";
import plugin from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    plugin(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
    },
    target: "esnext",
    sourcemap: false,
  },
});
