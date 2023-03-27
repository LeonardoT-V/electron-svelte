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
  <path d="M5 12l14 0" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
</svg>
