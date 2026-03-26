import { colors } from '../colors'

export const lightTheme = {
  name: 'light',

  bg: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    elevated: colors.white,
    overlay: 'rgba(0, 0, 0, 0.4)',
  },

  text: {
    primary: colors.gray[950],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    disabled: colors.gray[400],
    inverse: colors.white,
    link: colors.primary[600],
    linkHover: colors.primary[700],
  },

  border: {
    default: colors.gray[200],
    subtle: colors.gray[100],
    strong: colors.gray[400],
    focus: colors.primary[500],
  },

  interactive: {
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    secondary: colors.gray[100],
    secondaryHover: colors.gray[200],
    danger: colors.error,
    dangerHover: '#dc2626',
  },

  feedback: {
    success: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
    warning: { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
    error: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
    info: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
  },
} as const

export type LightTheme = typeof lightTheme
