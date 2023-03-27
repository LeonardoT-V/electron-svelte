<script>
  import { apiSql } from '../../api'

  import { IconPlus, IconTrash } from '../../icons'
  import { A, Button } from '../primitive'
  export let showPanel
  export let existTable
  let tables = apiSql.readTablesCreated()
</script>

<section class="flex gap-4 overflow-auto lg:h-36 p-3 w-full">
    <Button
      class="hover:scale-105 group transition-all flex items-center gap-2 border border-white/10 p-2 rounded-md group hover:bg-amber-400/5 hover:border-amber-400"
      on:click={() => (showPanel = true)} disabled={existTable !== ''}
    >
      <section class="flex flex-col w-full items-center transition-all px-4">
        <IconPlus size={36} class="stroke-white/80 group-hover:stroke-amber-400" />
        <h3 class=" text-lg text-zinc-100/60 group-hover:text-amber-400">Create table</h3>
      </section>
    </Button>
    {#each tables as table}
      <A
        class="hover:scale-105 transition-all flex items-center gap-4 border border-white/10 p-2 rounded-md group hover:bg-sky-400/5 hover:border-sky-400 shrink-0"
        href="/table/{table.table_name}"
      >
        <section class="flex flex-col w-full gap-1 px-4 transition-all">
          <h3
            class="font-bold text-2xl text-zinc-100/80 group-hover:text-sky-400 transition-colors"
          >
            {table.table_name}
          </h3>
          <Button
            class="hover:bg-rose-800/20 border group-hover:border-rose-400 border-transparent transition-all"
          >
            <IconTrash class="stroke-rose-400" size={18} />
            <p class="text-rose-400">Eliminar</p>
          </Button>
        </section>
      </A>
    {/each}

</section>
