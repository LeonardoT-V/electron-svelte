<script>
  let className = 'stroke-white'
  export let strokeWidth = 1.5
  export { className as class }
  export let size = 14 // default 1em match the parent element
</script>

<div class="flex">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    class={className}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1zm9 -1v18"
    />
  </svg>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    class={className}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
    <path d="M5 12l4 0" />
    <path d="M7 10l0 4" />
  </svg>
</div>
