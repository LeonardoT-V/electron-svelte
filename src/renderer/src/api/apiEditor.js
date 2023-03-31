import { SESSION_STORE_PROJECT } from '../lib/const'
import { useSessionStorage } from '../lib'

class Editor {
  async executeCode(code, callback) {
    const { getStorage } = useSessionStorage(SESSION_STORE_PROJECT)
    const query = await window.api.sqlQueryEditor(getStorage(), code)
    const queryParser = JSON.parse(query)
    console.log(queryParser)
    callback(queryParser)
  }

  async selectFile(e, callback) {
    const { getStorage } = useSessionStorage(SESSION_STORE_PROJECT)
    const filePath = e.detail.acceptedFiles[0]
    const file = filePath.path
    const query = await window.api.sqlQueryFile(getStorage(), file)
    const queryParser = JSON.parse(query)
    callback(queryParser)
  }
}

const editor = new Editor()

export default editor
