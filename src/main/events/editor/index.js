import { readFileSync } from 'fs'
import { createPool } from '../../database/postgre'
import { errorCodePostgre } from '../../lib'

export async function sqlQueryEditor(project, query) {
  try {
    const pool = createPool(project)
    const res = await pool.query(query)
    return JSON.stringify(res)
  } catch (error) {
    const errorStatus = errorCodePostgre(error)
    return JSON.stringify({ error: errorStatus })
  }
}

export async function sqlQueryFile(project, filePath) {
  try {
    const file = readFileSync(filePath, { encoding: 'utf-8' })
    const query = file
    const pool = createPool(project)
    const res = await pool.query(query)
    return JSON.stringify(res)
  } catch (error) {
    const errorStatus = errorCodePostgre(error)
    return JSON.stringify({ error: errorStatus })
  }
}
