import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "5173-alexneg-expensetracker-qg4bm53cupw.ws-eu119.gitpod.io",
    ],
  },
});
