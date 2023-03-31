<script>
  import { Button, Modal, Separator, TextField, Toogle } from '../primitive'
  import ListTypesSql from './ListTypesSql.svelte'
  export let showModal
  export let listColumn
  let showDefault = false
  const column = { name: '',  type: '', default: false, null: false}
  $: showDefault === false ? column.default = false : column.default = ''

  function addNewColumn(list, column) {
    listColumn = [...listColumn, column]
    console.log(list);
    showModal = false
    column = { name: '', default: false, null: false, type: ''}
  }
</script>

<section>
  <Modal bind:showModal>
    <Separator left>
      <h2
        class="text-transparent bg-clip-text font-bold text-2xl bg-gradient-to-r from-white/80 to-amber-200"
      >
        Create new <span class="text-amber-400">Column</span>
      </h2>
    </Separator>

    <section class="flex flex-col md:flex-row w-full gap-4 md:gap-8 px-3">
      <div class="w-full md:w-2/3">
        <TextField name="column" placeholder="set a name to the column" title="Column name" bind:value={column.name}/>
      </div>
      <div class="flex flex-col gap-2 md:gap-4 w-full md:w-1/3  text-white/80">
        <h3 class="text-sky-400 text-lg">Options</h3>
        <div class="flex gap-2 items-center text-base">
          <p class="w-full">Not null</p>
          <Toogle name="null_field" bind:value={column.null} />
        </div>
        <div class="flex flex-col gap-2 text-base">
          <div class="flex gap-2 items-center text-base">
            <p class="w-full">Default</p>
            <Toogle name="default-field" bind:value={showDefault}/>
          </div>
          {#if showDefault}
          <TextField name="default" placeholder="set a default value" title="" bind:value={column.default}/>
          {/if}
        </div>
      </div>
    </section>

    <div class="flex w-full gap-4 justify-end bg-zinc-900/50 p-3 rounded-md shadow">
        <ListTypesSql {column} />
    </div>

    <footer class="flex p-3 flex-col md:flex-row gap-4">
      <div class="flex w-full h-full gap-4 justify-center bg-rose-400/5 py-2 rounded-md">
        <p class="text-rose-400 font-bold">Error</p>
      </div>
      <div class="flex w-full gap-8 justify-end">
        <Button class="bg-rose-400 text-black/80" on:click={() => showModal=false}><p>Close</p></Button>
        <Button class="bg-sky-400 text-black/80" on:click={addNewColumn(listColumn, column)}><p>Save</p></Button>
      </div>
    </footer>
  </Modal>
</section>
