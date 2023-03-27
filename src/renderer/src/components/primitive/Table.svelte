<script>
  export let fields = []
  export let rows = []
</script>

<div class="w-full overflow-x-auto bg-zinc-800/50 p-2 rounded-md shadow">
<table class="w-full text-xs text-left text-white/80">
  <thead class="text-xs text-amber-400 uppercase bg-zinc-900/50 shadow">
    <tr>
      {#each fields as field}
        <th
          scope="col"
          class="px-4 py-3 first-of-type:rounded-l-md last-of-type:rounded-r-md"
        >
          {field.name || field}
        </th>

      {/each}
      <th
          scope="col"
          class="w-16 px-2 py-3 first-of-type:rounded-l-md last-of-type:rounded-r-md"
        >
    </tr>
  </thead>
  <tbody>
    {#each rows as column,i}
      <tr class="hover:bg-sky-400/5 text-white/80">
        {#each fields as entrie}
          <th
            scope="row"
            class="px-4 py-2 first-of-type:font-bold font-normal first-of-type:text-sky-400 first-of-type:rounded-l-md last-of-type:rounded-r-md whitespace-nowrap"
          >
            {column[entrie.name || entrie]}
          </th>
        {/each}
        <th
          scope="col"
          class=" px-2 py-3 first-of-type:rounded-l-md last-of-type:rounded-r-md"
        >
          <slot name="button" {column}></slot>
        </th>

      </tr>
    {/each}
  </tbody>
</table>
</div>