<script>
  import { onMount } from 'svelte'
  export let command
  let nodeRef
  import { IconPlus, IconEdit, IconTrash } from '../../icons'
  const classSql = {
    INSERT: {
      classSection: 'border-blue-400 bg-blue-400/5',
      classAside: 'bg-blue-800/10',
      classStroke: 'stroke-blue-400',
      classText: 'text-blue-400',
      icon: IconPlus
    },
    UPDATE: {
      classSection: 'border-lime-400 bg-lime-400/5',
      classAside: 'bg-lime-800/10',
      classStroke: 'stroke-lime-400',
      classText: 'text-lime-400',
      icon: IconEdit
    },
    DELETE: {
      classSection: 'border-violet-400 bg-violet-400/5',
      classAside: 'bg-violet-800/10',
      classStroke: 'stroke-violet-400',
      classText: 'text-violet-400',
      icon: IconTrash
    }
  }
</script>

<section
  class="w-full items-center p-4 rounded-md border flex gap-8 {classSql[command].classSection}"
  bind:this={nodeRef}
>
  <aside class="p-2 rounded-lg flex items-center {classSql[command].classAside}">
    <svelte:component
      this={classSql[command].icon}
      size={52}
      class={classSql[command].classStroke}
    />
  </aside>
  <section class="flex flex-col gap-4">
    <h2 class="text-white/80">
      <span class="{classSql[command].classText} text-xl">{command}</span> operation was successful
    </h2>
  </section>
</section>
