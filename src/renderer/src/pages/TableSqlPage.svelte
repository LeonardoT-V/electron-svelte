<script>
  import { SyntaxCode, Button, Container, Separator, Table } from '../components/primitive'
  import {
    ModalCreateColumn,
    FormCreateTable,
    ListsTables,
    PreviewApi,
  } from '../components/ui'
  import { IconEraser, IconAddColumn } from '../icons'

  import BasicLayout from '../layouts/BasicLayout.svelte'

  let showPanel = false
  let showModal = false

  let table = {
    name: '',
    fields: [{name: 'name'},{name: 'type'}, {name: 'default'}, {name: 'null'}],
    rows: [{ name: 'id', type: 'autoincrement', default: 'serial', null: true }]
  }
</script>

<BasicLayout>
  <!-- px-3 en los interiores -->
  <Separator left>
    <h2
      class="text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-white/80 to-amber-200"
    >
      Create o edit tables <span class="text-amber-400">SQL</span>
    </h2>
  </Separator>

  <section class="p-3">
    <Separator left>
      <h2
        class="text-transparent bg-clip-text font-bold text-2xl bg-gradient-to-r from-white/80 to-white"
      >
        You tables
      </h2>
    </Separator>
    <ListsTables bind:showPanel existTable={table.name} />
  </section>

  <section class="p-3 flex flex-col gap-4">
    <FormCreateTable bind:showPanel bind:value={table.name} />
    {#if table.name !== ''}
      <div class="px-3">
        <Container class="lg:flex-row flex-col flex gap-8 w-full">
          <div class="lg:w-1/2 flex flex-col gap-4">
            <Button class="bg-sky-400 lg:w-1/2 ml-auto" on:click={()=> showModal=true}>
              <IconAddColumn size={24}/>
              <p>Add new Column</p>
            </Button>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-white/80 font-bold">Data created</h3>
                <Table fields={table.fields} rows={table.rows} >
                  <div slot="button" class="flex gap-2" let:column>
                    <button on:click={() => console.log(column)}
                      class="p-1 hover:bg-rose-800/20 transition-all rounded-md" ><IconEraser class='stroke-rose-400' /></button
                    >
                  </div>
                </Table>
              </div>
              <div class="flex flex-col gap-1">
                <h3 class="text-white/80 font-bold">SQL query</h3>
                <SyntaxCode />
              </div>
            </div>
          </div>
          <PreviewApi table={table.name} />
        </Container>
      </div>
    {/if}
  </section>
  <ModalCreateColumn bind:showModal bind:listColumn={table.rows} />
</BasicLayout>
