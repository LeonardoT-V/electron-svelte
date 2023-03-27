<script>
  import { Button, TextField, SelectionField, Separator } from '../primitive'
  import { DB_MONGO, DB_POSTGRE, POSTGRE_STRING } from '../../lib/const'
  import { IconDatabase, IconFolder, IconLink } from '../../icons'
  import {apiProjects} from '../../api'
  let project = {
    database: '',
    name: '',
    uri: ''
  }

</script>

<form on:submit|preventDefault={() => apiProjects.createNewProject(project)} class="gap-4 flex flex-col">
    <Separator>
      <h2
        class="text-transparent bg-clip-text font-bold text-3xl bg-gradient-to-r from-sky-600 to-sky-300"
      >
        Create a new <span class="text-white font-bold">Project</span>
      </h2>
    </Separator>



  <SelectionField
    name="database"
    title="Database type"
    bind:value={project.database}
    options={[DB_POSTGRE, DB_MONGO]}
    icon={IconDatabase}
  />

  <TextField
    title="You project name"
    name="name"
    placeholder="YouAwesomeProject"
    bind:value={project.name}
    icon={IconFolder}
  />

  <TextField
    title="Connection string"
    name="uri"
    placeholder="Paste you connection string"
    bind:value={project.uri}
    icon={IconLink}
    subtitle="<span style='color:white'>Connection tip:</span> {POSTGRE_STRING}"
  />
  <!-- placeholder={project.database === MONGODB
      ? "mongodb://mongodb0.example.com:27017"
      : "postgresql://dbuser:secretpassword@database.server.com:3211/mydb"} -->

  <Button class="bg-sky-400 text-zinc-900">Create</Button>
</form>
