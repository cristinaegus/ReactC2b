// filepath: c:\Users\egusq\c2b\ReactCrisMiApp\ReactC2b\Mi_App\vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Mi_App/", // Cambia esto si tu aplicación está en una subcarpeta
});
