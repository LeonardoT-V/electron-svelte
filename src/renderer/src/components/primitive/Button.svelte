<script>
  let className = ''
  export let disabled = false
  export {className as class}
</script>

<button class="px-3 py-1 rounded-md flex justify-around items-center gap-3 hover:scale-105 focus:scale-105 active:scale-100 transition-all {className} disabled:grayscale disabled:cursor-not-allowed outline-none" on:click {disabled}>
  <slot></slot>
</button>
