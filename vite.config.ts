import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permite que el servidor sea accesible desde otros dispositivos en la red local
    port: 5173, // Puerto en el que corre la app (puedes cambiarlo si lo prefieres)
  },
});
