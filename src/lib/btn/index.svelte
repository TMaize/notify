<script>
  import { createEventDispatcher } from 'svelte'

  export let type = ''
  export let loading = false

  const dispatch = createEventDispatcher()

  function click(e) {
    if (loading) {
      return
    }
    dispatch('click', e)
  }
</script>

<button class="n-btn {type ? `n-btn-${type}` : ''}" on:click={click}>
  {#if loading}
    <span class="n-icon n-icon-loading" />
  {:else}
    <slot />
  {/if}
</button>
