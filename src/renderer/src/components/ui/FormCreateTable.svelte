<script>
  import { IconEdit, IconTrash } from '../../icons'
  import { Button, Container, Separator, TextField } from '../primitive'
  export let value
  let preValue = 'AwesomeTable'
  export let showPanel

  function message() {
    return preValue === value ? 'Edit' : 'Create'
  }
</script>

{#if showPanel}
  <Container class="flex flex-col gap-4">
    <TextField
      title="You table name"
      name="table"
      placeholder="YouAwesomeTable"
      bind:value={preValue}
    />
    <div class="flex w-full lg:w-1/2 lg:ml-auto px-3 gap-8 ">
      <Button
        class="bg-rose-400/5 text-rose-400 w-full border border-red-400"
        on:click={() => {
          showPanel = false
          if (preValue && value === '') {
            return
          }
          preValue = value
        }}>Cancel</Button
      >

      <Button
        class="bg-sky-400 text-zinc-900 w-full"
        on:click={() => {
          showPanel = false
          value = preValue
        }}>{message()}</Button
      >
    </div>
  </Container>
{:else if !showPanel && value !== ''}
  <Separator left>
    <h2
      class="text-transparent bg-clip-text font-bold text-2xl bg-gradient-to-r from-white/80 to-sky-200"
    >
      Creating table <span class="text-sky-400">{value}</span>
    </h2>
    <Button class="bg-emerald-400/5 border-emerald-400 border" on:click={() => (showPanel = true)}>
      <h2 class="text-emerald-400 font-bold text-xl">Edit</h2>
      <IconEdit size={20} />
    </Button>
    <Button class="bg-rose-400/5 border-rose-400 border" on:click={() => (value = '')}>
      <h2 class="text-rose-400 font-bold text-xl">Delete</h2>
      <IconTrash size={20} />
    </Button>
  </Separator>

{/if}
