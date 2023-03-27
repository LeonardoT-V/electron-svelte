import { readFileSync } from 'fs'
import { createPool } from '../../database/postgre'
export async function sqlQueryEditor(project, query) {
  const pool = createPool(project)
  const res = await pool.query(query)
  return JSON.stringify(res)
}

export async function sqlQueryFile(project, filePath) {
  const file = readFileSync(filePath, { encoding: 'utf-8' })
  const query = file
  const pool = createPool(project)

  const res = await pool.query(query)

  return JSON.stringify(res)
}
