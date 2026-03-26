export const motion = {
  durations: {
    instant:  '50ms',
    fast:     '100ms',
    normal:   '200ms',
    slow:     '300ms',
    slower:   '400ms',
    slowest:  '500ms',
  },

  easings: {
    default:    'cubic-bezier(0.4, 0, 0.2, 1)',   // ease padrão
    in:         'cubic-bezier(0.4, 0, 1, 1)',       // aceleração
    out:        'cubic-bezier(0, 0, 0.2, 1)',       // desaceleração
    inOut:      'cubic-bezier(0.4, 0, 0.2, 1)',     // suave
    bounce:     'cubic-bezier(0.34, 1.56, 0.64, 1)',// overshoot
    elastic:    'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },

  transitions: {
    fast:   '100ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow:   '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

export type Motion = typeof motion