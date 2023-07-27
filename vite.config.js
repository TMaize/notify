import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { injectStylePlugin } from './src/plugin/style.js'

// https://vitejs.dev/config/
export default defineConfig(ctx => {
  /**
   * @type {import("vite").UserConfig}
   */
  const config = {
    base: './',
    build: {
      sourcemap: false,
      emptyOutDir: true,
      copyPublicDir: true,
      chunkSizeWarningLimit: 256
    },
    plugins: [svelte()]
  }

  if (ctx.mode === 'lib') {
    config.build.copyPublicDir = false
    config.build.emptyOutDir = process.env.emptyOutDir === 'true'

    const name = process.env.entry

    const entry = {
      all: './src/lib/index.js',
      alert: './src/lib/alert/index.js',
      message: './src/lib/message/index.js',
      toast: './src/lib/toast/index.js'
    }

    config.build.lib = {
      entry: entry[name],
      name: 'notify',
      fileName: format => `${name}.${format}.js`
    }

    config.plugins.push(injectStylePlugin())
  }

  return config
})
