import fs from 'fs'
import { createPool } from '../../database/postgre'

export async function createProject(app, project) {
  const APPDATA = app.getPath('userData') + '/Projects'
  //TODO: FALTA VALIDAR SI ESTA VACIO
  // if (itemObjectNull(project))
  //   return { error: { description: 'Fill all form' } }

  // verificar existencia de la base de datos
  // const pool = new Pool({ connectionString: body.uri })
  // const dataConnect = await pool.connect().catch(err => err)
  // if (dataConnect.code) {
  //   const errorStatus = searchCodeErrorPg(dataConnect)
  //   return res.status(400).json({ error: errorStatus })
  // }

  if (!fs.existsSync(`${APPDATA}`)) {
    fs.mkdirSync(`${APPDATA}`)
  }

  if (fs.existsSync(`${APPDATA}/${project.name}.json`)) {
    return { error: { description: `The ${project.name} project exist` } }
  }

  fs.writeFile(`${APPDATA}/${project.name}.json`, JSON.stringify(project, null, 2), (err) => {
    if (err) return console.log(err)
    console.log('file create')
  })

  return project
}

export async function deleteProjects(app, name) {
  const APPDATA = app.getPath('userData') + '/Projects'
  if (!fs.existsSync(`${APPDATA}/${name}.json`)) {
    return { err: { description: `Project ${name} not exist` } }
  }

  fs.rmSync(`${APPDATA}/${name}.json`)

  return { response: { description: `Project ${name} deleted` } }
}

export async function readProjects(app) {
  const APPDATA = app.getPath('userData') + '/Projects'
  const files = fs.readdirSync(APPDATA, {
    encoding: 'utf-8',
    withFileTypes: false
  })

  if (files.length === 0) {
    throw new Error('No projects found', {
      cause: { msg: 'hay cero' }
    })
  }
  const projects = files.map((project) => {
    const newJson = fs.readFileSync(`${APPDATA}/${project}`, { encoding: 'utf-8' })
    const parse = JSON.parse(newJson)
    return parse
  })

  return projects
}

export async function tablesCreatedPostgre(project) {
  const pool = createPool(project)

  const response = await pool.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema='public'`
  )

  return JSON.stringify(response)
}

export async function columnsCreatedPostgre(project, table) {
  const pool = createPool(project)

  console.log({ project, table })
  const response = await pool.query(
    `SELECT table_schema, table_name, column_name, data_type
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE table_name = '${table}'`
  )

  console.log(response)

  return JSON.stringify(response)
}
