/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
		container: {
			center: true,
			padding: '2rem'
		},
    extend: {
			boxShadow: {
        'radioField': 'inset 0 0 0 1px rgb(29 78 216)',
      },
			backgroundColor: {
				'backgroundPopup': 'rgba(0, 0, 0, .7)'
			}
		},
  },
  plugins: [],
}
