<script>
  import { fade, fly } from "svelte/transition"


  let className=''
  export {className as class}
</script>

<section class="bg-zinc-800/50 rounded p-8 shadow text-white {className}" in:fly="{{y:100, duration: 250}}" out:fly="{{x:-100, duration: 125}}" >
  <slot />
</section>
