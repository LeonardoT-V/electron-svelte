// import Home from '../components/Hola.svelte'
import {
  ProyectsPage,
  LiveEditorPage,
  MainPanelPage,
  TableSqlPage,
  EditableTablePage
} from '../pages'

const routes = {
  '/': ProyectsPage,
  '/panel': MainPanelPage,
  '/editor/sql': LiveEditorPage,
  '/table/sql': TableSqlPage,
  '/table/:table': EditableTablePage
}

export default routes
