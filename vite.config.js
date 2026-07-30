// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Не забудь импортировать path
import { fileURLToPath } from "url"; // Стандартный модуль Node.js, устанавливать не нужно


export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      // Настраиваем "собачку" на папку src
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});


