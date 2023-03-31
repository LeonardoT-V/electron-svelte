<script>
  import Highlight from 'svelte-highlight'
  import sql from 'svelte-highlight/languages/sql'
  import { IconCopy } from '../../icons'
  export let code = 'Create table hola()'
  export let columns = []
  import 'svelte-highlight/styles/gruvbox-dark-medium.css'
  import { Button } from '.'
  import { toast } from '../../lib'
  let content = ''
  function copyContent() {
    toast.success('Copiado al portapapeles')
    navigator.clipboard.writeText(code)
  }
</script>

<section class="flex flex-col gap-4 relative group shadow border  border-zinc-800/50  rounded-md p-1">
  <Button on:click={copyContent} class="transition-all z-40 absolute right-4 top-4 invisible group-hover:visible hover:bg-white/5 text-white">
    <IconCopy color="#fff" size={24} />Copy
  </Button>
  <Highlight language={sql} {code} />
</section>
