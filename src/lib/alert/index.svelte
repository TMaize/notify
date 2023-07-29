<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import Btn from '../btn/index.js'

  export let title = '提示'
  export let content = ''
  export let type = 'info'
  export let okText = '确定'
  export let cancelText = '取消'
  export let closeOnClickOverlay = false
  export let loading = false

  let el = null
  onMount(() => {
    el.focus()
  })

  const dispatch = createEventDispatcher()
  // const self = get_current_component()

  function handleKeyDown(e) {
    if (e.key == 'Escape') {
      cancel('Escape')
    }
  }

  /**
   * close alter
   * @param {string} type
   */
  function cancel(type) {
    if ((type === 'overlay' || type === 'Escape') && closeOnClickOverlay !== true) {
      return
    }
    dispatch('cancel')
  }

  function ok() {
    dispatch('ok')
  }
</script>

<div class="n-alert-wrap" on:click={() => cancel('overlay')} on:keydown={handleKeyDown} role="button" tabindex="0" bind:this={el}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="n-alert" on:click|stopPropagation>
    <h2>
      <i class="n-icon n-icon-normal" />
      <span>{title}</span>
    </h2>
    <p>{content}</p>
    <footer>
      {#if cancelText !== ''}
        <Btn on:click={() => cancel('button')}>{cancelText}</Btn>
      {/if}
      <Btn on:click={() => ok()} {type} {loading}>{okText}</Btn>
    </footer>
  </div>
</div>
