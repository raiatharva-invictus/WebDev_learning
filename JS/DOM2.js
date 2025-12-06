// html code //

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM</title>
//     <style>
//         .box{
//             height: 34px;
//             width: 34px;
//             margin: 34px;
//             padding: 34px;
//             border: 2px solid black;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="box" id="col">Atharva Rai</div>
//         <div class="box">Atharva Rai</div>
//         <div class="box">Atharva Rai</div>
//         <div class="box">Atharva Rai</div>
//         <div class="box">Atharva Rai</div>
//     </div>
//     <script src="DOM2.js"></script>
// </body>
// </html>

// js code //


console.log("some more about DOM")

//////////////////////////////
// the DOM property we are using below and previously we can only apply styling if the method we apply doesnt returns a HTML Collection , NodeList, etc. i.e. we get a particular element 
//////////////////////////////

// let a = document.getElementsByClassName("box")
// console.log(a)

// a[2].style.color = "red"
// a[3].style.backgroundColor = "red"

// document.getElementById("col").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "#797872ff" // this only targets the first found element satisfying the query

// document.querySelectorAll(".box").forEach(e => { // since this return a NodeList of elements we have to run a for loop to do operation we want to
//     e.style.backgroundColor = "green"
// });

// console.log(document.getElementsByTagName("div")) 

// we can use getElementsByName when we have certain tags that have name attribute to them like a radio button, input, etc.

// let's learn about matches, closest & contains

let  e = document.getElementsByTagName("div")
// console.log(e)
// console.log(e[0].matches("#col"))// gives false since container doesnt have id col
// console.log(e[1].matches("#col")) // gives true since the first box has id col

// .closest first checks on the element itself then parent then the parent's parent and so on until it finds the element satisfying the query
// console.log(e[1].closest("html"))
// console.log(e[1].closest(".container"))
// console.log(e[0].closest("#red"))

// .contains checks and returns true if the element b is inside element a or element b == element a else it returns false otherwise

// console.log(document.querySelector(".container").contains(document.querySelector("body")))// this will give false
// console.log(document.querySelector(".container").contains(e[0]))// this will give true as it contains itself
// console.log(document.querySelector(".container").contains(e[1]))// this will give true as it contains the div of class box

