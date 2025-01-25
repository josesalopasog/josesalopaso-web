/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'ws-960px': {min:'960px'},
				'custom': {min:'960px'},
				'430px' : {max:'430px'},
				'xs-screen': {min:'480px'},  // Móviles pequeños
        		'sm-screen': {min:'640px'},  // Móviles grandes
        		'md-screen': {min:'768px'},  // Tablets
        		'lg-screen': {min:'1024px'}, // Laptops pequeñas
        		'xl-screen': {min:'1280px'}, 
			},
		},
	},
	plugins: [],
}
