<script>
  import { Button, DropZone, MonacoEditor, Separator, Table } from '../components/primitive'
  import { IconUpload } from '../icons'
  import BasicLayout from '../layouts/BasicLayout.svelte'
  import { apiEditor } from '../api'
  import {ErrorContainer, ResultEditorOperation} from '../components/ui'

  let code = '-- Write you code here'
  let table = []
</script>

<BasicLayout>
  <Separator left>
    <h2
      class="text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-white/80 to-amber-200"
    >
      Live Editor for <span class="text-amber-400">SQL</span>
    </h2>
  </Separator>
  <section class="h-2/3 px-3 flex flex-col lg:flex-row gap-4">
    <MonacoEditor lang="sql" bind:code />

    <aside class="flex flex-col gap-4 lg:w-64 w-full">
      <DropZone on:drop={(e) => apiEditor.selectFile(e, (res) => (table = res))}>
        <IconUpload size={40} class="stroke-white" />
        <p class="text-center text-sky-400 transition-all">
          Drop you <span class="text-amber-400 font-bold">.SQL</span> file here to execute query
        </p>
      </DropZone>

      <Button
        on:click={apiEditor.executeCode(code, (res) => (table = res))}
        class="bg-sky-400 text-black/80">Execute</Button
      >
    </aside>
  </section>

  <footer class="px-3">
    {#if table.error}
    <ErrorContainer error={table.error} />
    {:else if (table.command === 'DELETE' || 'INSERT' || 'UPDATE') && table.rows?.length === 0 }
      <ResultEditorOperation command={table.command} />
    {:else}
    <Table fields={table.fields} rows={table.rows} />
    {/if}
  </footer>
</BasicLayout>
