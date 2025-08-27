// Konfigurasi TailwindCSS dengan DaisyUI
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}
