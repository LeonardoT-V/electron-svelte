<script>
  import Navbar from "../components/ui/Navbar.svelte";
</script>

<section class="min-h-screen flex">
  <Navbar />
  <div class="w-full sm:pl-64">
    <div class="px-4 h-full py-8 flex flex-col gap-4">
      <slot />
    </div>
  </div>
</section>