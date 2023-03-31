<script>
  import Separator from './Separator.svelte'

  export let showModal // boolean
  let dialog // HTMLDialogElement
  $: if (dialog && showModal) dialog.showModal()
  $: if (dialog && !showModal) dialog.close()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="w-1/2 rounded p-0 bg-zinc-800 shadow-2xl"
>
  <section class="gap-4 p-8  flex flex-col" on:click|stopPropagation>

    <slot />

  </section>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0 , 0, 0, .3);
  }

  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
