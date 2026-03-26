import { colors } from '../colors'

export const darkTheme = {
  name: 'dark',

  // Superfícies
  bg: {
    primary: colors.gray[950],
    secondary: colors.gray[900],
    tertiary: colors.gray[800],
    elevated: colors.gray[800],
    overlay: 'rgba(0, 0, 0, 0.6)',
  },

  // Textos
  text: {
    primary: colors.gray[50],
    secondary: colors.gray[400],
    tertiary: colors.gray[500],
    disabled: colors.gray[600],
    inverse: colors.gray[950],
    link: colors.primary[400],
    linkHover: colors.primary[300],
  },

  // Bordas
  border: {
    default: colors.gray[800],
    subtle: colors.gray[900],
    strong: colors.gray[600],
    focus: colors.primary[500],
  },

  // Ações interativas
  interactive: {
    primary: colors.primary[500],
    primaryHover: colors.primary[400],
    secondary: colors.gray[700],
    secondaryHover: colors.gray[600],
    danger: colors.error,
    dangerHover: '#dc2626',
  },

  // Feedback
  feedback: {
    success: { bg: '#052e16', text: colors.success, border: '#166534' },
    warning: { bg: '#451a03', text: colors.warning, border: '#92400e' },
    error: { bg: '#450a0a', text: colors.error, border: '#991b1b' },
    info: { bg: '#172554', text: colors.info, border: '#1e40af' },
  },
} as const

export type DarkTheme = typeof darkTheme
