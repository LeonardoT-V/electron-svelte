<script>
  import Dropzone from 'svelte-file-dropzone/Dropzone.svelte'

  export let name = 'hola'
</script>

<div class="w-full lg:h-2/4 grayscale hover:grayscale-0 transition-all">
  <Dropzone disableDefaultStyles on:drop accept=".sql" containerClasses="h-full">
    <label
      for={name}
      class="flex flex-col h-full items-center justify-center  w-full border-2 border-sky-400 bg-sky-400/5 border-dashed rounded-md cursor-pointer hover:scale-105 transition-all "
    >
      <div class="flex flex-col items-center justify-center p-4 gap-4 ">
          <slot />
      </div>
    </label>
  </Dropzone>
</div>
