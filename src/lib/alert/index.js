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

  return new Promise((resolve, reject) => {
    const app = new Alert({
      target: document.body,
      props: props
    })
    app.$on('ok', () => resolve('ok'))
    app.$on('cancel', () => resolve('cancel'))
  })
}

export { alert }
