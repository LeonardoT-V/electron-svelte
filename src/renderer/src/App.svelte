<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import './lib/MonacoWorker'
</script>

<Router routes={routes}/>
<wc-toast></wc-toast>
