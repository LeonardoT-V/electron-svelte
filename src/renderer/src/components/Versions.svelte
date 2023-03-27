<script>
  const versions = window.electron.process.versions
  import {A} from './primitive'
</script>

<ul class="versions bg-red-400">
  <li class="electron-version">Electron v{ versions.electron }</li>
  <li class="chrome-version">Chromium v{ versions.chrome }</li>
  <li class="node-version">Node v{ versions.node }</li>
  <li class="v8-version">V8 v{ versions.v8 }</li>
  <A href='/'>Return</A>
</ul>
