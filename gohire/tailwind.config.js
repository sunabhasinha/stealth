/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'custom-grey': '#E6E6E6',
				'custom-card-white': '#FFFFFF',
				'custom-font-black': '#212121',
				'light-blue': '#D4DAF9',
				'custom-white': '#FAFAFA',
				'custom-red': '#D86161',
				'custom-dark-grey': '#7A7A7A',
				'custom-primary': '#1597E4',
			},
			typography: {
				DEFAULT: {
					css: {},
				},
			},
		},
	},
	plugins: [],
};
