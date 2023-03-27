import { IconCode, IconCodePlus, IconTableSql, IconDatabase } from '../icons'

export const APP_NAME = 'MkAPI'
export const BACKGROUND_APP = '#212121'
export const BACKGROUND_COLOR = '#242425'
export const DB_POSTGRE = 'PostgreSQL'
export const POSTGRE_STRING = `postgresql://{username}:{password}@{domain}:{port}/{database}`
export const DB_MONGO = 'MongoDB'
export const DB_MONGO_STRING = 'MongoDB'
export const SESSION_STORE_PROJECT = 'actualProject'
export const SESSION_STORE_TABLES = 'actualTables'
export { default as Logo } from '../assets/vite.svg'
export const ROUTES_PAGES = [
  { path: '/panel', name: 'Dashboard', icon: IconDatabase },
  { path: '/database', name: 'Database', icon: IconDatabase },
  { path: '/table/sql', name: 'Tables', icon: IconTableSql },
  { path: '/content', name: 'Content', icon: IconCodePlus },
  { path: '/editor/sql', name: 'Sandbox', icon: IconCode }
]

// holi chavi! me habia ido a bañar pero ya estoy por aca de nuevo ja! vi que salieron segundos en el clash que sad, estaban jugando muy bien, se les veia buena sinergia a los chicos de hoy pero bueno, sera la proxima jiji por cierto, quiero dar las gracias a los chicos de los susurros preguntando si estaba bien o estaba recibiendo amenazas o algun tipo de censura de la loca o asi jajaj estoy bien. son muy tiernos chat, los quiero uwu
