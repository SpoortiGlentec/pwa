import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
  registerType: "autoUpdate",

  devOptions: {
    enabled: true,
  },

manifest: {
  id: "/",
  name: "User Management PWA",
  short_name: "UserApp",
  description: "User Management Application",
  start_url: "/",
  display: "standalone",
  theme_color: "#0d6efd",
  background_color: "#ffffff",

  icons: [
    {
      src: "icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "icon-512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
},
})

  ]
});