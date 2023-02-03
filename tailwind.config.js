/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'stores/*.ts',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'roxo-escuro': {
          '50': '#f7f4fb',
          '100': '#eee9f7',
          '200': '#d5c8eb',
          '300': '#bba7df',
          '400': '#8864c6',
          '500': '#5522ae',
          '600': '#4d1f9d',
          '700': '#401a83',
          '800': '#331468',
          '900': '#2a1155'
        }, 'cinza-escuro': {
          '50': '#f6f6f6',
          '100': '#ececec',
          '200': '#d0d0d0',
          '300': '#b4b4b4',
          '400': '#7c7c7b',
          '500': '#444443',
          '600': '#3d3d3c',
          '700': '#333332',
          '800': '#292928',
          '900': '#212121'
        }, 'roxo-claro': {
          '50': '#f8f4fd',
          '100': '#f0eafb',
          '200': '#dacaf4',
          '300': '#c3abed',
          '400': '#966be0',
          '500': '#692cd3',
          '600': '#5f28be',
          '700': '#4f219e',
          '800': '#3f1a7f',
          '900': '#331667'
        },
        'hud-branco': {
          '50': '#ffffff',
          '100': '#ffffff',
          '200': '#ffffff',
          '300': '#ffffff',
          '400': '#ffffff',
          '500': '#ffffff',
          '600': '#e6e6e6',
          '700': '#bfbfbf',
          '800': '#999999',
          '900': '#7d7d7d'
        }, 'hud-cinza': {
          '50': '#f5f5f5',
          '100': '#ebebeb',
          '200': '#cdcdcd',
          '300': '#afafaf',
          '400': '#727272',
          '500': '#363636',
          '600': '#313131',
          '700': '#292929',
          '800': '#202020',
          '900': '#1a1a1a'
        }, 'hud-vermelho-escuro': {
          '50': '#faf5f4',
          '100': '#f6ebea',
          '200': '#e8cdca',
          '300': '#daafaa',
          '400': '#be726a',
          '500': '#a2362a',
          '600': '#923126',
          '700': '#7a2920',
          '800': '#612019',
          '900': '#4f1a15'
        }, 'hud-vermelho-claro': {
          '50': '#fff7f7',
          '100': '#ffefef',
          '200': '#ffd8d6',
          '300': '#ffc0be',
          '400': '#fe908d',
          '500': '#fe615c',
          '600': '#e55753',
          '700': '#bf4945',
          '800': '#983a37',
          '900': '#7c302d'
        }, 'hud-azul-escuro': {
          '50': '#f5fbfb',
          '100': '#ecf8f8',
          '200': '#ceeced',
          '300': '#b1e1e2',
          '400': '#77cbcd',
          '500': '#3cb4b7',
          '600': '#36a2a5',
          '700': '#2d8789',
          '800': '#246c6e',
          '900': '#1d585a'
        }, 'hud-azul-claro': {
          '50': '#f4fefe',
          '100': '#eafcfd',
          '200': '#caf8fa',
          '300': '#aaf3f6',
          '400': '#6aeaf0',
          '500': '#2ae1e9',
          '600': '#26cbd2',
          '700': '#20a9af',
          '800': '#19878c',
          '900': '#156e72'
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'whitelisted',
    {
      pattern: /border-(white|black)/
    },
    {
      pattern: /text-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
    },
    {
      pattern: /border-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
    },
    {
      pattern: /bg-(indigo|orange|blue|green|yellow|red|gray|sky|rose|amber)-(100|400|500|600|800)/
    },
  ]
}