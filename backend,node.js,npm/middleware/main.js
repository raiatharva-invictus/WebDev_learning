const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// app.use(express.static("public")) // this is a middleware which runs before the route handlers. It checks if the requested path matches any file in the "public" folder - if yes, serves it directly; if no, passes the request to next route handler.

// // Middleware 1 
// app.use((req,res,next)=>{
//     console.log("m1")
//     res.send("I was stopped by middleware one") // if we send the response here itself it wont go further why because req has got its response so further calling next will give error in console that you have already 
//     next() // if we call the next then only the next middleware will run
// })
// Middleware 1 - logger for our application
app.use((req,res,next)=>{
    console.log(req.headers)
    req.atharva = "I am Atharva" // we are adding a new property to the request object basically modifying the request object
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} request \n`)
    console.log(`${Date.now()} is a ${req.method} request`)
    next()
})
// Middleware 2
app.use((req,res,next)=>{
    console.log("m2")
    next()
})



app.get('/', (req, res) => { 
//   res.send('Hello World!')
  res.send('Hello World!' + req.atharva)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})