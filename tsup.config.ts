import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/main.ts"],
  minify: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
}));
