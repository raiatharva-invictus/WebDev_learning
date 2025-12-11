const express = require('express')
const app = express()
const port = 3000

app.use(express("public"))

app.get('/', (req, res) => {
    console.log('It is a post request');
    
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
