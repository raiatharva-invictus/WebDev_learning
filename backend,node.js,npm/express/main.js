const express = require('express')
const app = express()
const port = 3000

//app.get() or app.post() or spp.put() or app.delete() => they take the params -> (path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About us')
})
app.get('/contactus', (req, res) => {
  res.send('Hello contact us !')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
