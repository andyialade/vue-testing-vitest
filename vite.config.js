import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ["**/*.spec.js", "**/concert-service.js"],
    coverage: {
      provider: "v8"
    }
  }
})
