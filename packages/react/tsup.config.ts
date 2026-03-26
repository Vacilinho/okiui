import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  injectStyle: false, // CSS Modules vão gerar um styles.css separado
  loader: {
    '.css': 'local-css', // habilita CSS Modules
  },
})
