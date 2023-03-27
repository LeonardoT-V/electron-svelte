import { Pool } from 'pg'
// import fs from 'fs'

export function createPool(project) {
  // seleccionar el uri
  const pool = new Pool({
    connectionString: project.uri
  })
  pool.on('remove', () => console.log('close pool'))
  return pool
}

// function queryPool(project, code) {
//   const useProject = fs.readFileSync(`./projects/${project}.json`, { encoding: 'utf-8' })
//   const { uri } = JSON.parse(useProject)

//   //TODO: descifrar uri

//   // seleccionar el uri
//   const pool = new Pool({
//     connectionString: uri
//   })

//   return pool
// }

// pool.on('connect',()=>console.log("conectado"))
// pool.on('remove',()=>console.log("delete"))
