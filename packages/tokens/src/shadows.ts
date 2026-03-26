export const shadows = {
  none: 'none',
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px rgba(0, 0, 0, 0.25)',

  // Glow effects (o lado "bold" do okiui)
  glow: {
    primary: '0 0 20px rgba(139, 92, 246, 0.3)',
    success: '0 0 20px rgba(34, 197, 94, 0.3)',
    error: '0 0 20px rgba(239, 68, 68, 0.3)',
  },

  // Inner shadows para inputs e cards pressionados
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  innerMd: 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
} as const

export type Shadows = typeof shadows
