import { push } from 'svelte-spa-router'
import { SESSION_STORE_PROJECT, SESSION_STORE_TABLES } from '../lib/const'
import toast from '../lib/toast'
import useSessionStorage from '../lib/useSessionStorage'

const storeProject = useSessionStorage(SESSION_STORE_PROJECT)
const storeTable = useSessionStorage(SESSION_STORE_TABLES)

class API {
  async readProjectCreated() {
    const list = await window.project.readProjects()
    return list
  }

  async openProjectCreated(project) {
    storeProject.setStorage(project)
    const res = await window.postgres.tablesCreated(project)
    const { rows } = JSON.parse(res)

    storeTable.setStorage(rows)
    push('/panel')
    return
  }

  async deleteProjectCreated(name, callback) {
    const { error } = await window.project.deleteProjects(name)
    if (error) {
      toast.error('A ocurrido un error')
      return
    }
    callback()
    return
  }

  async createNewProject(project) {
    const { err } = await window.project.writeProject(project)

    if (err) {
      toast.error('A ocurrido un error')
      return
    }
    storeProject.setStorage(project)

    // GUARDAR LAS TABLES QUE EXISTEN
    const res = await window.postgres.tablesCreated(storeProject.getStorage())
    const { rows } = JSON.parse(res)
    storeTable.setStorage(rows)
    push('/panel')
  }
}

const apiProjects = new API()

export default apiProjects
