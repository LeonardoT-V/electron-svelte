import { SESSION_STORE_PROJECT } from '../lib/const'
import { useSessionStorage } from '../lib'

const { getStorage } = useSessionStorage(SESSION_STORE_PROJECT)

class Editor {
  async executeCode(code, callback) {
    const query = await window.api.sqlQueryEditor(getStorage(), code)
    const queryParser = JSON.parse(query)
    callback(queryParser)
  }

  async selectFile(e, callback) {
    const filePath = e.detail.acceptedFiles[0]
    const file = filePath.path
    const query = await window.api.sqlQueryFile(getStorage(), file)
    const queryParser = JSON.parse(query)
    callback(queryParser)
  }
}

const editor = new Editor()

export default editor
