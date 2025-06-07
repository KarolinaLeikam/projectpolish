import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      "4ff2-80-242-185-143.ngrok-free.app", // <-- сюда добавляем твой ngrok домен
    ],
  },
});
