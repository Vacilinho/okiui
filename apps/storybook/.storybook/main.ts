import type { StorybookConfig } from '@storybook/react-vite'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: [
    '../../../packages/react/src/**/*.stories.@(ts|tsx)',
    '../../../packages/react/src/**/*.mdx',
  ],

  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@oki-ui/react': path.resolve(
            __dirname,
            '../../../packages/react/src/index.ts',
          ),
        },
      },
    })
  },
}

export default config
