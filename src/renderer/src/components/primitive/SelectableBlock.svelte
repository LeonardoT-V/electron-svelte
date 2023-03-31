<script>
  export let icon = undefined
  export let name
  export let title
  export let description
  let className = ''
  export {className as class}
</script>




<li class="list-none w-full">
  <input
    type="radio"
    id={title}
    name={name}
    value={title}
    class="hidden peer"
    required
    on:click
  />
  <label
    for={title}
    class="hover:scale-105 transition-all inline-flex items-center justify-between w-full p-2 text-white/80 bg-transparent border border-white/10 rounded-md cursor-pointer peer-checked:border-sky-400 peer-checked:text-sky-400 peer-checked:bg-sky-400/10 hover:text-sky-400 hover:bg-sky-400/5 group"
  >
  <div class="flex align-middle items-center gap-4">
    <aside class="{className.aside} p-1 rounded-lg">
      <svelte:component this={icon} class="{className.icon}" size={40} />
    </aside>
    <section>
      <div class="w-full text-lg font-semibold">{title}</div>
      <div class="w-full text-xs">{description}</div>
    </section>
    </div>
  </label>
</li>
