import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const globals = {"@swc/core": "swc"}
const plugins = [
    terser(),
    typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true
    })
]

/**
 * This config values that defines about rollup compile options.
 * @type {import("rollup").RollupOptions}
 */
export default {
    plugins: plugins,
    input: "./src/index.ts",
    external: ["@swc/core"],
    output: [
        { file: "./dist/index.esm.js", format: "esm", name: "YourProjectName", globals },
        { file: "./dist/index.umd.js", format: "umd", name: "YourProjectName", globals }
    ]
}