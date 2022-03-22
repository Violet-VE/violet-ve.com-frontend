/*
 * @Author: 小纯洁
 * @Description:
 * @Date: 2022-03-22 23:38:54
 * @LastEditTime: 2022-03-22 23:44:15
 * @FilePath: \Violet-VE.com\violet-ve.com\.eslintrc.js
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		"vue/setup-compiler-macros": true,
	},
	extends: ["plugin:vue/vue3-recommended", "airbnb-base", "prettier"],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {
		"vue/comment-directive": "off",
		quotes: ["warn", "double"],
		"comma-dangle": ["warn", "always-multiline"],
		semi: [2, "always"],
		"brace-style": ["warn", "1tbs", { allowSingleLine: true }],
		indent: ["warn", "tab"],
		"comma-spacing": ["warn", { before: false, after: true }],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"linebreak-style": 0,
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
			},
		],
		"no-param-reassign": [
			"error",
			{
				props: true,
				ignorePropertyModificationsFor: [
					"acc", // for reduce accumulators
					"accumulator", // for reduce accumulators
					"e", // for e.returnvalue
					"ctx", // for Koa routing
					"context", // for Koa routing
					"req", // for Express requests
					"request", // for Express requests
					"res", // for Express responses
					"response", // for Express responses
					"$scope", // for Angular 1 scopes
					"staticContext", // for ReactRouter context
					"state", // for vuex state
				],
			},
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				mjs: "never",
				jsx: "never",
				ts: "never",
			},
		],
	},
};
