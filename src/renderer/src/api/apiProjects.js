import { push } from 'svelte-spa-router'
import { SESSION_STORE_PROJECT, SESSION_STORE_TABLES } from '../lib/const'
import toast from '../lib/toast'
import useSessionStorage from '../lib/useSessionStorage'

class API {
  async readProjectCreated() {
    const list = await window.project.readProjects()
    return list
  }

  async openProjectCreated(project) {
    const storeProject = useSessionStorage(SESSION_STORE_PROJECT)
    const storeTable = useSessionStorage(SESSION_STORE_TABLES)

    storeProject.setStorage(project)

    const tables = await window.postgres.tablesCreated(storeProject.getStorage())
    const { rows } = JSON.parse(tables)
    storeTable.setStorage(rows)
    push('/panel')
    return
  }

  async deleteProjectCreated(name, callback) {
    const { error } = await window.project.deleteProjects(name)
    const ok = confirm('Esta seguro de eliminar el projecto ' + name)
    if (!ok) return

    if (error) {
      toast.error('A ocurrido un error')
      return
    }
    toast.success('Eliminado correctamente')
    callback()
    return
  }

  async createNewProject(project, callback) {
    const { error } = await window.project.writeProject(project)

    if (error) {
      toast.error('A ocurrido un error')
      callback(error)
      return
    }

    const storeProject = useSessionStorage(SESSION_STORE_PROJECT)
    storeProject.setStorage(project)
    const storeTable = useSessionStorage(SESSION_STORE_TABLES)

    // GUARDAR LAS TABLES QUE EXISTEN
    const res = await window.postgres.tablesCreated(storeProject.getStorage())
    const { rows } = JSON.parse(res)
    storeTable.setStorage(rows)
    push('/panel')
  }
}

const apiProjects = new API()

export default apiProjects
