<script>
  export let left = false
  export let right = false
  let className = 'gap-4'
  export { className as class }
</script>

<div class="flex items-center {className}">
  <hr class={left ? 'hidden' : 'grow opacity-10'} />
  <slot />
  <hr class={right ? 'hidden' : 'grow opacity-10'} />
</div>
