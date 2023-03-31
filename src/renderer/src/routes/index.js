// import { wrap } from 'svelte-spa-router/wrap'

import {
  TableSqlPage,
  ProyectsPage,
  LiveEditorPage,
  MainPanelPage,
  EditableTablePage
} from '../pages'

const routes = {
  '/': ProyectsPage,
  '/panel': MainPanelPage,
  '/editor/sql': LiveEditorPage,
  // '/table/sql': wrap({
  //   asyncComponent: () => import('../pages/TableSqlPage.svelte')
  // }),
  '/table/sql': TableSqlPage,
  '/table/:table': EditableTablePage
}

export default routes
