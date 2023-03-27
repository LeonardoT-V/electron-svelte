<script>
  import * as monaco from 'monaco-editor'
  import { onMount } from 'svelte'
  import { BACKGROUND_APP, BACKGROUND_COLOR } from '../../lib/const'
  let el //html element
  export let code
  export let lang

  onMount(() => {
    monaco.editor.defineTheme('custom', {
      base: 'vs-dark',
      inherit: true,
      rules: [{ background: '#1c1917', token: '' }],
      colors: {
        'editor.background': BACKGROUND_COLOR,
        'minimap.background': BACKGROUND_APP
      }
    })

    monaco.editor.setTheme('custom')

    const editorInstance = monaco.editor.create(el, {
      value: code,
      language: lang,
      scrollbar: {
        useShadows: false
      },
      automaticLayout: true
    })

    editorInstance.updateOptions({
      fontSize: 14
    })

    editorInstance.getModel().onDidChangeContent((_) => {
      code = editorInstance.getModel().getValue()
    })
  })
</script>

<div class="shadow h-full py-2 pr-2 rounded-md bg-zinc-800/50 w-full">
  <div bind:this={el} class="h-full" />
</div>
