/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-bg": "#09090b",
			},
			fontFamily: {
				mono: [
					"ui-monospace",
					"SFMono-Regular",
					"SF Mono",
					"Menlo",
					"Consolas",
					"Liberation Mono",
					"monospace",
				],
			},
		},
		screens: {
			phone: { max: "639px" },
			tablet: { min: "640px" },
			laptop: { min: "1024px" },
			desktop: { min: "1280px" },
		},
	},
	plugins: [],
};
