/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
	},
	// daisyui: {
	// 	themes: [
	// 		{
	// 			mytheme: {
	// 				primary: "#000",
	// 				secondary: "#3ABFF8",
	// 			},
	// 		},
	// 	],
	// },
	plugins: [require("daisyui"), require("flowbite/plugin")],
};
