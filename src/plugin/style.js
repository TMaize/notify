export function injectStyle() {
  const style = '>style<'

  const id = '__inject__notify'
  if (document.querySelector('#' + id)) {
    return
  }

  const el = document.createElement('style')
  el.id = id
  el.textContent = style
  document.head.append(el)
}

export function injectStylePlugin() {
  let style = ''

  return {
    name: 'css-ext',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      if (bundle['style.css']) {
        style = bundle['style.css'].source.trim()
        style = style.replace(/\\/g, '\\\\')
        style = style.replace(/\'/g, "\\'")
        style = style.replace(/\"/g, '\\"')
        style = style.replace(/\n/g, '\\n')
        delete bundle['style.css']
      }

      Object.keys(bundle).forEach(name => {
        const m = bundle[name]
        if (m.fileName.endsWith('.js')) {
          m.code = m.code.replace('>style<', style)
        }
      })
    }
  }
}
