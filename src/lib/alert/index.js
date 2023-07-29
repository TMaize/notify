import Alert from './index.svelte'
import { injectStyle } from '../../plugin/style.js'
import './index.less'
import '../style/icon.less'
import '../style/animation.less'

/**
 * show message
 * @param {import('../index.d').AlertOption} content
 * @returns {Promise<string>}
 */
function alert(content) {
  injectStyle()

  /**
   * @type {import('../index.d').AlertOption}
   */
  const props = { title: undefined, content: '', type: undefined, okText: undefined, cancelText: undefined, closeOnClickOverlay: undefined }

  if (typeof content === 'string' || typeof content === 'number') {
    props.content = content
  }

  if (content && typeof content === 'object') {
    props.title = content.title
    props.content = content.content
    props.type = content.type
    props.okText = content.okText
    props.cancelText = content.cancelText
    props.closeOnClickOverlay = content.closeOnClickOverlay
  }

  const app = new Alert({
    target: document.body,
    props: props
  })

  /**
   * @type {import('../index.d').AlertController}
   */
  const controller = {
    showLoading() {
      app.$set({ loading: true })
    }
  }

  return new Promise(function (resolve, reject) {
    app.$on('ok', () => {
      function done() {
        resolve('ok')
        app.$destroy()
      }
      if (content.beforeClose) {
        content.beforeClose('ok', controller, done)
        return
      }
      done()
    })
    app.$on('cancel', function () {
      function done() {
        resolve('cancel')
        app.$destroy()
      }
      if (content.beforeClose) {
        content.beforeClose('cancel', controller, done)
        return
      }
      done()
    })
  })
}

export { alert }
