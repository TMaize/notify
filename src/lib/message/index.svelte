<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import { get_current_component } from 'svelte/internal'

  export let content = ''
  export let type = 'info'
  export let duration = 2600

  const dispatch = createEventDispatcher()
  let closeTimer = null
  let self = get_current_component()

  export function close() {
    // run once
    if (closeTimer === -1) {
      return
    }
    if (closeTimer !== 0) {
      clearTimeout(closeTimer)
    }
    closeTimer = -1
    dispatch('close')
    setTimeout(() => {
      animateClass = 'n-message-leave'
    }, 0)
    setTimeout(() => {
      self.$destroy()
    }, 250)
  }

  let animateClass = 'n-message-init'
  onMount(() => {
    setTimeout(() => {
      animateClass = 'n-message-show'
    }, 0)

    if (duration > 0) {
      closeTimer = setTimeout(() => {
        close()
      }, duration)
    }
  })
</script>

<div class="n-message {animateClass}">
  <main>
    <span class="n-icon n-icon-{type}" />
    {#if content !== undefined && content !== '' && content !== null}
      <span class="n-content">{content}</span>
    {/if}
  </main>
</div>
