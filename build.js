import esbuild from "esbuild";
import { globPlugin } from "esbuild-plugin-glob";
import sveltePlugin from "esbuild-svelte";

esbuild.build({
  entryPoints: ["src/**/*.js", "src/**/*.ts", "src/**/*.svelte"],
  mainFields: ["svelte", "browser", "module", "main"],
  bundle: true,
  format: "esm",
  outdir: ".",
  plugins: [globPlugin(), sveltePlugin()],
  logLevel: "info",
  minify: true,
  sourcemap: true,
});
