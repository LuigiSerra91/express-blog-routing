const express = require('express')
const app = express()
const port = 3005
const host = 'http://127.0.0.1'
app.use(express.static('public'))
app.use(express.json())
const blogRouters = require('./routers/routers.js')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})
app.use('/posts', blogRouters)




