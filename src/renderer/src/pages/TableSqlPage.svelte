<script>
  import { Container, Separator } from '../components/primitive'
  import { FormCreateTable, ListsTables, PreviewApi } from '../components/ui'
  import FormSelectionTypes from '../components/ui/FormSelectionTypes.svelte'
  import ModalCreateColumn from '../components/ui/ModalCreateColumn.svelte'
  import BasicLayout from '../layouts/BasicLayout.svelte'

  let showPanel = false
  let showModal = false
  let table = {
    name: '',
    columns: [],
    rows: []
  }
</script>

<BasicLayout>
  <!-- px-3 en los interiores -->
  <ModalCreateColumn bind:showModal />
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
    <ListsTables bind:showPanel existTable={table.name}/>
  </section>

  <section class="p-3 flex flex-col gap-4">
    <FormCreateTable bind:showPanel bind:value={table.name} />

    {#if table.name !== ''}
    <div class="px-3">
      <Container class="lg:flex-row flex-col flex gap-8 w-full">
        <FormSelectionTypes bind:table class="w-1/2" bind:showModal />
        <PreviewApi table={table.name}/>
      </Container>
    </div>
      {/if}
  </section>

</BasicLayout>
