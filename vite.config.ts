import { defineConfig } from "vite"

export default defineConfig({
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg"],
  },

  build: {
    lib: {
      entry: "./lib/convert-hls-to-mp4.ts",
      name: "hls-to-mp4",
      fileName: "main",
    },
  },
})
