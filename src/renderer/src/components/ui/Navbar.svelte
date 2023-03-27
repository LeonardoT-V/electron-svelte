<script>
  import { link } from 'svelte-spa-router'
  import { IconFolderClose, IconMongodb, IconPostgresql, IconSettings } from '../../icons'
  import useSessionStorage from '../../lib/useSessionStorage'
  import { APP_NAME, DB_MONGO, ROUTES_PAGES, SESSION_STORE_PROJECT, Logo } from '../../lib/const'
  import { A, Separator } from '../primitive'

  const { getStorage, removeStorage } = useSessionStorage(SESSION_STORE_PROJECT)
</script>

<aside
  class="fixed top-0 left-0  w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
>
  <div class="h-full flex flex-col gap-4 p-3 overflow-y-auto bg-zinc-800/50">
    <header class="flex items-center justify-center gap-4 px-3 py-5  rounded-md ">
      <img src={Logo} alt="logo" height={36} width={36} />
      <h2
        class="text-transparent bg-clip-text font-bold text-3xl bg-gradient-to-r from-sky-600 to-sky-400"
      >
        {APP_NAME}
      </h2>
    </header>

    <section class="mt-3 gap-2 flex flex-col grow">
      <Separator left>
        <h5 class="text-xl text-sky-400 font-bold">Database</h5>
      </Separator>

      {#each ROUTES_PAGES as page}
        <A
          activeClass={{
            className: 'hover:bg-sky-400/90 bg-sky-400 text-black/80  hover:text-black/80 font-bold'
          }}
          href={page.path}
          class="flex items-center gap-3 px-3 py-1 hover:bg-sky-400/5 hover:text-sky-400 transition-all rounded-md text-white/80"
        >
          <svelte:component this={page.icon} size={20} />
          <span class="text-sm">{page.name}</span>
        </A>
      {/each}
    </section>

    <footer class="gap-4 flex flex-col">
      <Separator left>
        <h5 class="text-xl text-sky-400 font-bold">Project</h5>
      </Separator>

      {#if getStorage().database === DB_MONGO}
        <div class="flex gap-2 px-3 py-2 bg-emerald-400/5 rounded-md">
          <IconMongodb size={28} className="text-emerald-400" />
          <p class="text-emerald-400 text-lg">{getStorage().name}</p>
        </div>
      {:else}
        <div class="flex gap-2 px-3 py-2 bg-blue-400/5 rounded-md">
          <IconPostgresql size={28} className="text-blue-400" />
          <p class="text-blue-400 text-lg">{getStorage().name}</p>
        </div>
      {/if}

      <div class="flex justify-center gap-2">
        <A
          href="/"
          class="flex items-center gap-1 text-xs bg-blue-200 text-black/80 px-2 py-1 rounded-md hover:text-cyan-800 hover:font-bold hover:scale-105 transition-all"
        >
          Config
          <IconSettings size={18} />
        </A>
        <A
          href="/"
          on:click={() => removeStorage()}
          class="flex items-center gap-1 text-xs bg-red-200 text-black/80 px-2 py-1 rounded-md hover:text-rose-800 hover:font-bold hover:scale-105 transition-all"
        >
          Close Project
          <IconFolderClose size={18} />
        </A>
      </div>
    </footer>
  </div>
</aside>
