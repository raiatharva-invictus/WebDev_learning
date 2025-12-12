const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// app.get('/', (req, res) => {
//     console.log('It is a get request');
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     console.log('It is a post request');
//     res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//     console.log('It is a put request');
//     res.send('Hello World put!')
// })

// we can also chain these requests for endpoint "/"
app.get('/', (req, res) => {
    console.log('It is a get request');
    res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log('It is a post request');
    res.send('Hello World post!')
}).put('/', (req, res) => {
    console.log('It is a put request');
    res.send('Hello World put!')
})

// sending file
app.get("/index", (req, res) => {
    console.log('It is a index');
    res.sendFile('templates/index.html', {root : __dirname})
})

// json
app.get("/api", (req, res) => {
    console.log('It is a index');
    res.json({a :1, b: 2, c: 3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
