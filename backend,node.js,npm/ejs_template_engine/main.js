const express = require('express')
const app = express()
const port = 3000

// // doc to reference about ejs with express : https://github.com/mde/ejs/wiki/Using-EJS-with-Express 

app.set('view engine', 'ejs'); // their are various types of view engine but we are here

app.get('/', (req, res) => {
    let siteName = "Nike"
    let searchText = "Search Now"
    res.render("index", {siteName : siteName, searchText : searchText})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Nike when and how?"
    let blogContent = "It is a good shoes brand" 
    res.render("blogpost", {blogTitle : blogTitle, blogContent : blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})