import Message from './index.svelte'
import { injectStyle } from '../../plugin/style.js'
import './index.less'
import '../style/icon.less'
import '../style/animation.less'

const instance = {}

/**
 * show message
 * @param {import('../index.d').MessageOption} content
 * @returns {number}
 */
function message(content) {
  injectStyle()

  /**
   * @type {import('../index.d').MessageOption}
   */
  const props = { type: undefined, content: '', duration: undefined }

  if (typeof content === 'string' || typeof content === 'number') {
    props.content = content
  }

  if (content && typeof content === 'object') {
    props.type = content.type
    props.content = content.content
    props.duration = content.duration
  }

  let el = document.querySelector('.n-message-wrap')
  if (!el) {
    el = document.createElement('div')
    el.className = 'n-message-wrap'
    document.body.appendChild(el)
  }

  const app = new Message({
    target: el,
    props: props
  })

  const id = Date.now()

  app.$on('close', () => {
    delete instance[id]
  })

  instance[id] = app

  return id
}

message.success = content => message({ content, type: 'success' })

message.warning = content => message({ content, type: 'warning' })

message.error = content => message({ content, type: 'error' })

message.info = content => message({ content, type: 'info' })

message.loading = content => message({ content, type: 'loading' })

message.clear = id => {
  if (typeof id === 'undefined') {
    Object.values(instance).forEach(app => app.close())
    return
  }
  const app = instance[id]
  app && app.close()
}

export { message }
