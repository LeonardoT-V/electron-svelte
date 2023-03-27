<script>
  import { link } from "svelte-spa-router"
  import active from "svelte-spa-router/active"

  let className=''
  export let activeClass=''
  export let href
  export {className as class}
</script>

<a
  use:link
  {href}
  class="cursor-pointer outline-none {className}"
  on:click
  use:active={activeClass}
>
  <slot />
</a>
