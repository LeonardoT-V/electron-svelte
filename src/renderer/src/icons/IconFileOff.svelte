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
<path stroke="none" d="M0 0h24v24H0z"></path><path d="m3 3 18 18M7 3h7l5 5v7m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5"></path>
</svg>