import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: '/portfolio_prototype/',
    plugins: [
        tailwindcss()
    ]
})
