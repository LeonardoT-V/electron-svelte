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
<path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M9 12h6M12 9v6M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2"></path>
</svg>