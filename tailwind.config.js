/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require('daisyui')],
  darkTheme: 'dark',
  theme: {
    fontSize: {
      xxxs: '0.5rem',
      xxs: '0.625rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        'noto-serif': ['var(--font-noto-serif)'],
        parisienne: ['var(--font-parisienne)'],
      },
      container: {
        center: true,
      },
      maxWidth: {
        mcard: '430px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        gray: {
          primary: '#666e7a',
          'primary-focus': '#444850',
          'primary-content': '#ffffff',

          secondary: '#d1c1d7',
          'secondary-focus': '#b9a2c3',
          'secondary-content': '#000000',

          accent: '#ffcd70',
          'accent-focus': '#d6ab5c',
          'accent-content': '#ffffff',

          neutral: '#666e7a',
          'neutral-focus': '#444850',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        girl: {
          primary: '#eca7a7',
          'primary-focus': '#c5818a',
          'primary-content': '#ffffff',

          secondary: '#d1c1d7',
          'secondary-focus': '#b9a2c3',
          'secondary-content': '#000000',

          accent: '#ffcd70',
          'accent-focus': '#d6ab5c',
          'accent-content': '#ffffff',

          neutral: '#666e7a',
          'neutral-focus': '#444850',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
        boy: {
          primary: '#71abc6',
          'primary-focus': '#4b96b9',
          'primary-content': '#ffffff',

          secondary: '#d1c1d7',
          'secondary-focus': '#b9a2c3',
          'secondary-content': '#000000',

          accent: '#ffcd70',
          'accent-focus': '#d6ab5c',
          'accent-content': '#ffffff',

          neutral: '#666e7a',
          'neutral-focus': '#444850',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',

          info: '#1c92f2',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
};
