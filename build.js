import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";

esbuild.build({
  entryPoints: ["src/index.ts"],
  mainFields: ["svelte", "browser", "module", "main"],
  bundle: true,
  outdir: "public/js",
  plugins: [sveltePlugin()],
  logLevel: "info",
  minify: true,
  sourcemap: true,
  splitting: true,
});
