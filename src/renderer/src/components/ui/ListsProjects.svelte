<script >
  import { IconFileOff, IconPostgresql, IconMongodb, IconTrash } from '../../icons'
  import { Button } from '../primitive'
  import { DB_MONGO, DB_POSTGRE } from '../../lib/const'
  import {apiProjects} from '../../api'
  let projects = apiProjects.readProjectCreated()
</script>

<section class="flex flex-col gap-4 items-center h-full justify-around">
  {#await projects}
    <p>waiting for the promise to resolve...</p>
  {:then projects}
    <section class="flex gap-4 overflow-auto lg:h-36 p-3 lg:flex-col w-full">
      {#each projects as project}
        <div class="relative hover:scale-105 transition-all flex  border border-white/10 p-2 rounded-md group hover:bg-sky-400/5 hover:border-sky-400 shrink-0">
          <Button
            class="hover:bg-rose-800/20 absolute top-2 right-2 px-1 hidden group-hover:block"
            on:click={() => apiProjects.deleteProjectCreated(project.name, () => projects = apiProjects.readProjectCreated())}
          >
            <IconTrash size={20} class="stroke-rose-400" />
          </Button>
          <Button
            class="flex items-center gap-4"
            on:click={apiProjects.openProjectCreated(project)}
          >
            {#if project.database === DB_MONGO}
              <aside
                class="transition-colors px-2 flex items-center justify-center h-16 w-16 rounded-md group-hover:bg-emerald-800/20"
              >
                <IconMongodb size={36} className="text-white/40 group-hover:text-emerald-400" />
              </aside>
            {:else if project.database === DB_POSTGRE}
              <aside
                class="transition-colors px-2 flex items-center justify-center h-16 w-16 rounded-md group-hover:bg-blue-800/20"
              >
                <IconPostgresql size={36} className="text-white/40 group-hover:text-blue-400" />
              </aside>
            {/if}
            <section class="flex flex-col w-full gap-1">
              <div>
                <h3
                  class="font-bold text-xl text-zinc-100/80 group-hover:text-sky-400 transition-colors"
                >
                  {project.name}
                </h3>
                <p class="group-hover:text-white text-xs text-white/40">8 tables</p>
              </div>
              <div class="group-hover:text-white text-end text-xs font-light text-white/40">
                created at: 00-00-2023
              </div>
            </section>
          </Button>
        </div>
      {/each}
    </section>
  {:catch error}
    <section class="flex flex-col items-center gap-2">
      <h3 class="text-2xl text-amber-400">Not projects found</h3>
      <IconFileOff class="stroke-white/80" size={64} />
    </section>
  {/await}
  <div class="text-zinc-400">Or</div>
  <footer class="flex flex-col items-center">
    <Button class="border-sky-400 border text-sky-400 hover:bg-sky-400/10"
      >Import config file</Button
    >
  </footer>
</section>
