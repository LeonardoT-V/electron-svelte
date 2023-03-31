<script>
  import {SelectableBlock} from "../primitive"
  import { IconUpload } from "../../icons";

  export let column

  const TYPES = [
    {name: 'Serial', description: 'Autonumerioc field', color: {aside: 'bg-blue-800/20', icon:'stroke-blue-400'}, icon: IconUpload},
    {name: 'Numeric', description: 'Autonumerioc field', color: {aside: 'bg-lime-800/20', icon:'stroke-lime-400'}, icon: IconUpload},
    {name: 'String', description: 'Autonumerioc field', color: {aside: 'bg-fuchsia-800/20', icon:'stroke-fuchsia-400'}, icon: IconUpload},
    {name: 'JSON', description: 'Autonumerioc field', color: {aside: 'bg-red-800/20', icon:'stroke-red-400'}, icon: IconUpload},
    {name: 'Array', description: 'Autonumerioc field', color: {aside: 'bg-yellow-800/20', icon:'stroke-yellow-400'}, icon: IconUpload},
  ]
</script>

<ul class="w-full grid gap-4 lg:grid-cols-2">
  {#each TYPES as type}

  <SelectableBlock  name='types' title={type.name} description={type.description} class={type.color} icon={type.icon}  on:click={column.type = type.name} />

  {/each}
</ul>