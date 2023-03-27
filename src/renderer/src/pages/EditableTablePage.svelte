<script>
  import {Button, Separator} from '../components/primitive'
  import { IconArrowLeft } from '../icons'
  import BasicLayout from '../layouts/BasicLayout.svelte'
  import { apiSql } from '../api'
  import { pop } from 'svelte-spa-router'

  export let params

  let tables = apiSql.readColumnsCreated(params.table)
</script>

<BasicLayout>
  <Separator left>
    <Button
      on:click={pop}
      class="text-lg border border-amber-400 group hover:bg-amber-400/5 text-amber-400"
    >
      <IconArrowLeft size={18} class="group-hover:stroke-amber-400 stroke-white/80" />
      <p>Return</p>
    </Button>
    <h2
      class="text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-white/80 to-amber-200"
    >
      edit <span class="text-amber-400">{params.table}</span>
    </h2>
  </Separator>
  <div>
    {#await tables}
      <p>loaddin</p>
    {:then tables}
      {#each tables as table}
        <div>
          <h1>{table.column_name}</h1>
        </div>
      {/each}
    {/await}
    <p>The querystring is: {params}</p>
  </div>
</BasicLayout>
