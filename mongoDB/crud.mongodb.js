
use('CRUD') // using a database (it creates a one if it doesn't exist and switches to it else if it does exist it simply uses it  )

//creating a collection
db.createCollection("mycollection")

//to insert one entry
// db.mycollection.insertOne({
//     name: "Atharva Rai",
//     age : 18,
//     class: "aiml, 1st year"
// })

//to insert many entries
// db.mycollection.insertMany([
//   { name: "Atharva Rai", age: 18, class: "aiml, 1st year" },
//   { name: "Priya Sharma", age: 19, class: "cse, 2nd year" },
//   { name: "Rahul Verma", age: 20, class: "ece, 3rd year" },
//   { name: "Sneha Patel", age: 18, class: "aiml, 1st year" },
//   { name: "Arjun Singh", age: 21, class: "mechanical, 4th year" },
//   { name: "Kavya Reddy", age: 19, class: "civil, 2nd year" },
//   { name: "Vikram Joshi", age: 20, class: "aiml, 3rd year" },
//   { name: "Ananya Desai", age: 18, class: "cse, 1st year" },
//   { name: "Rohan Gupta", age: 22, class: "ece, 4th year" },
//   { name: "Divya Iyer", age: 19, class: "aiml, 2nd year" }
// ])

// let us see a simple query
// let a = db.mycollection.find({name: "Atharva Rai"})
// console.log(a);

// we can also find one that matches current
// let b = db.mycollection.findOne({name : "Atharva Rai"})
// console.log(b);

//to update first found entry that matches the query
// db.mycollection.updateOne({age: 18}, {$set:{age:19}})

// to update all the entries that matches the query
// db.mycollection.updateMany({age: 18}, {$set:{age:19}})

// to delete a single entry
// db.mycollection.deleteOne({age : 21})
// db.mycollection.deleteMany({age : 20})


// mongo db operators