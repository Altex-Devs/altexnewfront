/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-md': 'radial-gradient(450px at calc(100% - 600px) 400px, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(450px at calc(50%) 200px, var(--tw-gradient-stops))',
        'gradient-radial-left': 'radial-gradient(400px at 300px, var(--tw-gradient-stops))',
        'gradient-radial-bottom': 'radial-gradient(400px, var(--tw-gradient-stops))',
        'gradient-radial-center': 'radial-gradient(50vw, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
