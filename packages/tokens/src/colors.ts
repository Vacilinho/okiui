export const colors = {
  // Escala de cinza (base para superfícies e textos)
  gray: {
    50: '#fafafa',
    100: '#f0f0f0',
    200: '#e4e4e4',
    300: '#d1d1d1',
    400: '#a0a0a0',
    500: '#737373',
    600: '#525252',
    700: '#3a3a3a',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Cor primária — a identidade do okiui
  // Escolha algo que represente "bold & expressivo"
  // Exemplos: violeta vibrante, cyan elétrico, coral quente
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6', // ← cor principal
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065',
  },

  // Cor secundária — complementar à primária
  secondary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },

  // Semânticas (feedback)
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Básicas
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const

export type Colors = typeof colors
