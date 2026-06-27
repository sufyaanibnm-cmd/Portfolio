import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Set this to your GitHub repo name, e.g. "/mushtaq-portfolio"
// If deploying to a custom domain or username.github.io root, set to "/"
const BASE = process.env.VITE_BASE_PATH ?? "/mushtaq-s-project-hub";

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
