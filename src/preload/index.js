import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  sqlQueryEditor: (project, query) => ipcRenderer.invoke('sql:query-editor', project, query),
  sqlQueryFile: (project, filePath) => ipcRenderer.invoke('sql:query-file', project, filePath)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('project', {
      writeProject: (project) => ipcRenderer.invoke('project:write', project),
      readProjects: () => ipcRenderer.invoke('projects:read'),
      deleteProjects: (name) => ipcRenderer.invoke('projects:delete', name)
    })
    contextBridge.exposeInMainWorld('postgres', {
      tablesCreated: (project) => ipcRenderer.invoke('pg:tablesCreated', project),
      columnsCreated: (project, table) => ipcRenderer.invoke('pg:columnsCreated', project, table)
    })
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}

// SELECT table_schema, table_name, column_name, data_type
// FROM INFORMATION_SCHEMA.COLUMNS
// WHERE table_name = 'libros'
