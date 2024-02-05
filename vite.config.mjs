import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

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
      cssTarget: 'chrome61',
      chunkSizeWarningLimit: 256
    },
    plugins: [svelte()]
  }

  if (ctx.mode === 'lib') {
    const buildType = process.env.buildType
    const buildEntry = process.env.buildEntry

    const entry = {
      all: 'src/lib/index.js',
      alert: 'src/lib/alert/index.js',
      message: 'src/lib/message/index.js'
    }

    config.plugins.push(
      cssInjectedByJsPlugin({
        jsAssetsFilterFunction(chunk) {
          return chunk.fileName.includes('iife.js') || !chunk.isEntry
        }
      })
    )
    config.build.copyPublicDir = false
    config.build.emptyOutDir = String(process.env.emptyOutDir) === 'true'

    if (buildType === 'es' || buildType === 'cjs') {
      config.build.lib = {
        entry,
        formats: [buildType],
        fileName: (format, alias) => `${alias}.${format}.js`
      }
    }

    if (buildType === 'iife') {
      config.build.lib = {
        entry: entry[buildEntry],
        formats: ['iife'],
        name: 'notify',
        fileName: format => `${buildEntry}.${format}.js`
      }
    }
  }

  return config
})
