// their is a package called mongodb that is good and many like it when they start learning mongo db here is the documentation to learn about it adn use it referring it you simply npm install it and use it as it is shown in the docs
// https://www.npmjs.com/package/mongodb


// here we will see an advanced package called mongoose

import mongoose from "mongoose"
import express from "express"
import {Todo} from "../mongoose/models/Todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "First task", desc : "this is my first task", isDone : false})
    todo.save();
  res.send('Hello World!')
})
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})