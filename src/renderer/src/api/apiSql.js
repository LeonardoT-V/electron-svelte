import { SESSION_STORE_PROJECT, SESSION_STORE_TABLES } from '../lib/const'
import { useSessionStorage } from '../lib'

// const storeProject = useSessionStorage(SESSION_STORE_PROJECT)
// const storeTable = useSessionStorage(SESSION_STORE_TABLES)

class Sql {
  readTablesCreated() {
    const storeTable = useSessionStorage(SESSION_STORE_TABLES)
    const res = storeTable.getStorage()
    console.log(res)
    return res
  }

  async readColumnsCreated(param) {
    const storeProject = useSessionStorage(SESSION_STORE_PROJECT)
    const res = await window.postgres.columnsCreated(storeProject.getStorage(), param)
    const { rows } = JSON.parse(res)
    return rows
  }
}

const sql = new Sql()

export default sql
