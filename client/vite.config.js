import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0", // Позволяет слушать на всех интерфейсах
    port: 5173,
    // Убедитесь, что порт правильный
  },
  proxy: {
    "/api": "http://localhost:3000",
    "/sitemap.xml": "http://localhost:3000",
    "/robots.txt": "http://localhost:3000",
    // proxy requests to Express server
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
