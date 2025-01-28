/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'morris': ['Morris', 'serif'],
			},
			animation: {
				'glow': 'glow 4s ease-in-out infinite',
				'pulse': 'pulse 4s cubic-bezier(0.2, 0, 0.3, 1) infinite',
			},
			keyframes: {
				glow: {
					'0%, 100%': {
						opacity: 1,
					},
					'50%': {
						opacity: 0.5,
					},
				},
			},
		},
	},
	plugins: [],
}
