import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "@typescript-eslint/eslint-plugin"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"no-unused-vars": "off", // Disable the base no-unused-vars rule
			"@typescript-eslint/no-unused-vars": "off", // Disable the TypeScript-specific no-unused-vars rule
			"semi": ["error", "never"], // Enforce no semicolons
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		},
	}
)