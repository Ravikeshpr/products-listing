import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // Allows global access to test functions like 'test' and 'expect' without imports
        environment: "jsdom", // Uses jsdom for DOM simulation
        setupFiles: "./src/setup.js", // Path to your setup file (adjust if in 'tests/')
        // Optional: Specify test file patterns
        include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    },
});
