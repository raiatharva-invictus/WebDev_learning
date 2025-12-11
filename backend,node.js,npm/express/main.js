const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
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
// app.get('/blog/intro-to-webdev', (req, res) => {
//   res.send('Hello intro-to-webdev')
// })
// app.get('/blog/intro-to-discipline', (req, res) => {
//   res.send('Hello intro-to-discipline')
// })

// let us understand the concept of params
// app.get('/blog/:slug', (req, res) => {
//   res.send(`Hello ${req.params.slug}`)
// })
// app.get('/blog/:slug/:second', (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.second}`)
// })

// let us also understand query
app.get('/blog/:slug', (req, res) => {
  //for url http://127.0.0.1:3000/blog/intro-to-better?mode=dark&region=in
  // console.log(req)
  console.log(req.params) // output -> { slug: 'intro-to-better' }
  console.log(req.query) // output -> query: { mode: 'dark', region: 'in' }
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
