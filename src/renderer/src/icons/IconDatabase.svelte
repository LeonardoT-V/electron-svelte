<script>
  let className = 'stroke-white'
  export let strokeWidth = 1.5
  export { className as class }
  export let size = 14 // default 1em match the parent element
</script>

<svg
  viewBox="0 0 24 24"
  fill='none'
  width={size}
  height={size}
  xmlns="http://www.w3.org/2000/svg"
  stroke="currentColor"
  class="{className}"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
>
<path stroke="none" d="M0 0h24v24H0z"></path><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v6a8 3 0 0 0 16 0V6"></path><path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
</svg>