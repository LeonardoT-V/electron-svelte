<script>
  import { Container } from '../components/primitive'
  import Logo from '../assets/icons.svg'
  import { FormCreateProject, ListsProjects } from '../components/ui'
  import CenterLayout from '../layouts/CenterLayout.svelte'
  import { APP_NAME } from '../lib/const'
</script>

<CenterLayout >
  <Container class="bg-red-400/10 gap-4 flex flex-col m-auto mr-0 shadow-transparent w-full lg:w-96 lg:h-96">
    <h2 class="text-center font-bold text-2xl">Your proyects</h2>
    <ListsProjects />
  </Container>

  <Container class="gap-8 flex flex-col m-auto ml-0 justify-between lg:w-1/2 w-full">
    <FormCreateProject />

    <header class="flex gap-4 justify-center bg-sky-400/5 p-3 rounded">
      <div class="flex gap-2 align-middle items-center ">
        <img src={Logo} alt="logo" height={32} width={32} />
        <h1 class="text-3xl text-sky-400">{APP_NAME}</h1>
      </div>
      <div class="border-l opacity-10" />
      <div>
        <p class="text-base text-white">Developed by:</p>
        <ul class="text-xs text-white/40 ">
          <li>Leonardo Toro</li>
          <li>Leonardo Toro</li>
        </ul>
      </div>
    </header>
  </Container>
</CenterLayout>
