<script>
  export let error
  import {IconNotFound} from '../../icons'
</script>

<section class="w-full items-center p-4 bg-red-400/5 rounded-md border border-red-400 flex gap-8">
  <aside class="p-2 bg-rose-800/10 rounded-lg flex items-center">
    <IconNotFound  size={52} class='stroke-rose-400'/>
  </aside>
  <section class="flex flex-col gap-4">
    <header>
      <h2 class="text-white/80"><span class="text-rose-400 font-bold">Code:</span> {error.code}</h2>
      <h3 class="text-white/80"><span class="text-rose-400 font-bold">Code description:</span> {error.description}</h3>
    </header>
    <footer>
      <h3 class="text-rose-400 font-bold">Details</h3>
      <p class="text-white text-sm font-light">
        {error.details}
      </p>
    </footer>
  </section>
</section>