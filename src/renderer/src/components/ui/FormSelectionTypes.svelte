<script>
  import { Container, Button } from '../primitive'
  export let table
  export let showModal
  let className = ''
  export {className as class}
</script>

<div class="{className}">
  {#if table.name !== ''}
      <Button class="bg-sky-400 " on:click={()=> showModal=true}>hola</Button>
  {/if}
</div>
