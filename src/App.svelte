<script>
  import * as notify from './lib/index.js'
  window.notify = notify

  const messageText = `hello message ~`
</script>

<main>
  <h2>message</h2>
  <div>
    <button on:click={() => notify.message(messageText)}>message</button>
    <button on:click={() => notify.message.success(messageText)}>message.success</button>
    <button on:click={() => notify.message.warning(messageText)}>message.warning</button>
    <button on:click={() => notify.message.error(messageText)}>message.error</button>
    <button on:click={() => notify.message.info(messageText)}>message.info</button>
    <button on:click={() => notify.message.loading(messageText)}>message.loading</button>
    <div style="height: 10px;" />
    <button on:click={() => notify.message.clear()}>message.clear</button>
  </div>

  <h2>alert</h2>
  <div>
    <button
      on:click={async () => {
        const type = await notify.alert({ content: messageText, closeOnClickOverlay: true })
        notify.message(type)
      }}
    >
      example 1
    </button>

    <button
      on:click={async () => {
        const type = await notify.alert({
          title: '销毁确认',
          content: '你是否要销毁该仓库，此操作会立即生效，请谨慎操作！',
          type: 'error',
          beforeClose(action, controller, done) {
            if (action !== 'ok') {
              return done()
            }
            controller.showLoading()
            setTimeout(done, 2000)
          }
        })
        notify.message(type)
      }}
    >
      example 2
    </button>
  </div>
</main>

<style lang="less">
  button {
    font-size: 13px;
  }
</style>
