class Helper {
  addNewColumn(callback) {
    callback((...props) => {
      props.listColumn = [...props.listColumn, props.column]
      props.column = { name: '', default: false, null: false, type: '' }
      props.showModal = false
    })
  }
}

const helper = new Helper()

export default helper
