import type { Preview } from '@storybook/react'
import '@oki-ui/tokens/css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      source: {
        state: 'open',
      },
    },
  },

  decorators: [
    (Story, context) => {
      const background = context.globals.backgrounds?.value
      const theme = background === '#ffffff' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', theme)
      return Story()
    },
  ],
}

export default preview
