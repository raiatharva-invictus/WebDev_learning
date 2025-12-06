// html code used
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>JavaScript-1</title>
    //     <style>
    //         .box{
    //             width: 45px;
    //             height: 56px;
    //             border: 2px solid black;
    //             margin: 5px;
    //             padding: 5px;
    //         }

    //     </style>
    // </head>
    // <body>
    //     <div class="container">
    //         <div class="box">This is BOX1</div>
    //         <div class="box">This is BOX2</div>
    //         <div class="box">This is BOX3</div>
    //         <div class="box">This is BOX4</div>
    //         <div class="box">This is BOX5</div>
    //     </div>
        
    //     <script src="dom.js"></script>
    // </body>
    // </html>


// js code used

console.log("Hello")
console.log(document.body.childNodes) // gives the child nodes of body we can access like index from 0 to n
console.log(document.body.childNodes[1])// accessing the childnodes
console.log(document.body.childNodes[1].childNodes)// accessing child within child

let container = document.body.childNodes[1];
// console.log(container.firstChild)
// console.log(container.lastChild)

// above one will also give the text node but if we want first child which is element than we use

console.log(container.firstElementChild)

//we can also apply styles using the same
// container.firstElementChild.style.color = "red"
// container.lastElementChild.style.color = "red"


console.log(container.lastElementChild.parentNode) // to access parent element 
console.log(container.lastElementChild.parentElement) // to access parent element 

console.log(document.body.firstElementChild.childNodes) // this give all types of child be it text child, comment child, element child

console.log(document.body.firstElementChild.children) // this give only element children 
console.log(document.body.firstElementChild.children[0]) // accessing element children

console.log(document.body.firstElementChild.children[0].parentElement)

// some sibling ways

console.log(document.body.firstElementChild.children[2].previousSibling)
console.log(document.body.firstElementChild.children[2].previousElementSibling)
console.log(document.body.firstElementChild.children[2].nextElementSibling)

console.log(table.rows)





