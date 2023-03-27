<script>
  export let title
  export let name
  export let placeholder
  export let subtitle = ''
  export let value
  export let icon = undefined
  let className = ''
  export {className as class}
</script>

<div class="flex flex-col gap-1 group ">
  <label for={name} class="text-sm text-white/80 group-focus-within:text-sky-400/80 transition-all px-3 flex gap-2 items-center {className}">
    <svelte:component this={icon} class='stroke-white' size={16}/>
    <p>{title}</p>
  </label>
  <input
    required
    type="text"
    name={name}
    id={name}
    {placeholder}
    bind:value={value}
    class="border border-white/10 group-focus-within:border-sky-400 rounded-md px-3 py-1 text-sm outline-none transition-all group-focus-within:bg-sky-400/10 placeholder:text-white/40 {value === '' ? "bg-transparent" : "bg-sky-400/5 text-sky-400/80"}"
  />
  <span class="text-xs font-light text-end px-3 text-sky-400/80">{@html subtitle}</span>
</div>
