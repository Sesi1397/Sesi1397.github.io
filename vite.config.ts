import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    base: "/", // ✅ for https://Sesi1397.github.io (user site)

    server: {
      port: 3000,
      host: "0.0.0.0",
    },

    plugins: [react()],

    // ⚠️ Anything defined here becomes PUBLIC in the built JS bundle.
    // Avoid putting secrets (API keys) in a GitHub Pages frontend.
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY ?? ""),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
