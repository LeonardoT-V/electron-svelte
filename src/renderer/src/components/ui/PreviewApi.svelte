<script>
  export let table
  const API = {
    singular: [
      {method: 'GET', className: "bg-blue-400/5 text-blue-400"},
      {method: 'POST', className: "bg-violet-400/5 text-violet-400"},
      {method: 'PUT', className: "bg-lime-400/5 text-lime-400"},
      {method: 'DELETE', className: "bg-red-400/5 text-red-400"},
    ],
    plural: [
      {method: 'GET', className: "bg-blue-400/5 text-blue-400"},
    ]
  }
</script>

<section class="w-full lg:w-1/2 border-white/10 border p-4 rounded-md gap-4 flex flex-col ">
  <header>
    <h4 class="text-sky-400 font-bold text-xl">Preview you API</h4>
    <p class="text-white/80 font-light text-sm">You can access a your data using the next route:</p>
  </header>

  <div>
    <div class="flex gap-4 items-baseline">
      <h5 class="text-amber-400  text-lg">One element</h5>
      <p class="text-xs font-light">localhost:3000</p>
    </div>
    <ul class="px-3 py-3 pb-0 flex flex-col gap-2">
      {#each API.singular as api}
      <li class="flex gap-4 items-center align-middle text-sm">
        <span class="text-center px-4 py-1 rounded-lg font-bold w-1/3 {api.className}">{api.method}</span>
        <p class="text-white">/api/{table}/:id</p>
      </li>
      {/each}
    </ul>
  </div>

  <div>
    <div class="flex gap-4 items-baseline">
      <h5 class="text-amber-400  text-lg">Varius</h5>
      <p class="text-xs font-light">localhost:3000</p>
    </div>
    <ul class="px-3 py-3 pb-0 flex flex-col gap-2">
      {#each API.plural as api}
      <li class="flex gap-4 items-center align-middle text-sm">
        <span class="text-center px-4 py-1 rounded-lg font-bold w-1/3 {api.className}">{api.method}</span>
        <p class="text-white">/api/{table}</p>
      </li>
      {/each}
    </ul>
  </div>

</section>
