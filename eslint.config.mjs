import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ad bundles are third-party deliverables shipped as-is (minified vendor
    // code included). They are served, never compiled, so linting them only
    // reports on code we do not own and must not reformat.
    "public/**",
  ]),
]);

export default eslintConfig;
