const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/get', (req, res) => {
  res.json({
    project: 'React and Express Boilerplate',
    from: 'Vanaldito'
  })
})

export default app
