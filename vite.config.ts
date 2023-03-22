import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "assets"),
    },
  },
  publicDir: resolve(__dirname, "assets"),
  build: {
    //打包文件目录
    outDir: "dist",

    rollupOptions: {
      external: ["react", "react-dom"],

      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "wolfkillerDs",
      fileName: "wolfkiller-ds",
      formats: ["es", "cjs"],
    },
  },
});
