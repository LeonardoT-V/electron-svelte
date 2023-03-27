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
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />
</svg>
