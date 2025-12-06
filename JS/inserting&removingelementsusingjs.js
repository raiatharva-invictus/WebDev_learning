/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
    <style>
        /* this style example is used for undestanding toggle concept 
        .yellow{
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div class="container yellow someotherclass">
        <div class="box" style="background-color: red;" data-createdby="Atharva">This is a Box</div>
        <div class="box">This is a Box</div>
        <div class="box">This is a Box</div>
    </div>

    <script src="inserting&removingelementsusingjs.js"></script>
</body>
</html>

*/

// innerHTML basically gives the html code present inside the Element
// innerText basically gives the Text Content present inside the Element
// outerHTML basically gives the html code present inside the Element plus the element itself

// console.log(document.querySelector(".box").innerHTML)
// console.log(document.querySelector(".container").innerHTML)
// console.log(document.querySelector(".box").innerText)
// console.log(document.querySelector(".container").innerText)
// console.log(document.querySelector(".box").outerHTML)
// console.log(document.querySelector(".container").outerHTML)

// console.log(document.querySelector(".container").tagName) // it gives only element
// console.log(document.querySelector(".container").nodeName) // it gives any node be it element node, comment node , text node


// console.log(document.querySelector(".container").textContent)

// document.querySelector(".box").innerHTML = "Hey I am Box" // since query selector gives first element that satisfy the condition 
// console.log(document.querySelector(".container").textContent)

// console.log(document.querySelector(".box").attributes)
// console.log(document.querySelector(".box").hasAttribute("style"))
// console.log(document.querySelector(".box").getAttribute("style"))

// document.querySelector(".box").setAttribute("style", "display:inline")

// console.log(document.querySelector(".box").getAttribute("style"))
// document.querySelector(".box").removeAttribute("style")
// console.log(document.querySelector(".box").getAttribute("style"))


// // we can change nay page on our broser by doing
// document.designMode = "on"

// //accessing custom attributes
// console.log(document.querySelector(".box").dataset)


////////////Inserting element in HTML /////////////
// let div = document.createElement("div")
// div.innerHTML = "This element was inserted by <b>Atharva</b>"
// document.querySelector(".container").append(div)
// document.querySelector(".container").prepend(div)
// document.querySelector(".container").before(div)
    
// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "This is div inserted using <b>insertAdjacentHTML</b>")
// cont.insertAdjacentHTML("afterbegin", "This is div inserted using <b>insertAdjacentHTML</b>")

// document.querySelector(".box").remove() // since query selector gives first found .remove() will remove it
// document.querySelector(".box").remove()
// document.querySelector(".box").remove() // since their are only 3 boxes all boxes will be removed 

// console.log(document.querySelector(".container").classList)
// console.log(document.querySelector(".container").className)

// //adding a class
// document.querySelector(".container").classList.add("added_class")// it only adds the class if it is not present in the class list
// console.log(document.querySelector(".container").classList)

// //removing a class
// document.querySelector(".container").classList.remove("added_class")
// console.log(document.querySelector(".container").classList)

// //toggling a class
// document.querySelector(".container").classList.toggle("yellow")// this does simple thing if the class yellow is present it removes it & if it is not present then it adds it to the classList