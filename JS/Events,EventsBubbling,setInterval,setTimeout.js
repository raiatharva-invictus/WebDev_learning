// html code
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
    <style>
        .child{
            background-color: aliceblue;
            border: 2px solid black;
            padding: 14px;
            margin: 14px;
            cursor: pointer;
        }
        .childContainer{
            background-color: red;
            padding: 14px;
            margin: 14px;
        }
        .container{
            background-color: blue;
            border: 2px solid black;
            padding: 14px;
            margin: 14px;
        }
    </style>
</head>
<body>
    <!--//for understanding Events//-->
    <!-- <div class="container">
        <div class="box">this is your boy, box</div>
    </div>
    <button id="btn">Change</button>
    <script src="Events,EventsBubbling,setInterval,setTimeout.js"></script> -->

    <!-- for understanding EventsBubbling -->
     <div class="container">
        <section class="childContainer">
            <div class="child">I am a child</div>
        </section>
     </div>
     <!-- <script>
        document.querySelector(".child").addEventListener("click", (e)=>{
            e.stopPropagation()// we are stopping the bubbling 
            alert('child was clicked')
        })
        document.querySelector(".childContainer").addEventListener("click", (e)=>{
            e.stopPropagation()// we are stopping the bubbling 
            alert('childContainer was clicked')
        })
        document.querySelector(".container").addEventListener("click", (e)=>{
            alert('container was clicked')
        })
     </script> -->


     <script src="Events,EventsBubbling,setInterval,setTimeout.js"></script>
</body>
</html>
*/

let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     // alert('the button was clicked')
//     document.querySelector(".box").innerHTML = "This div was <b>clicked</b>"
// })

// their are various types of listener 

//below is double click listener
// button.addEventListener("dblclick", ()=>{
//     // alert('the button was clicked')
//     document.querySelector(".box").innerHTML = "This div was <b>clicked</b>"
// })

//below is contextmenu listener
// button.addEventListener("contextmenu", () => {
//     alert('beware you are hacking a hacker')
// })

// // keydown listener
// button.addEventListener("keydown", (e) => {
//     // console.log(e)
//     console.log(e.key)
// })


//we can also do things like give onclick attribute to html element or in javascript elem.onClick = function(){}

////////////////////////////////////////////////////////////////////////////
//EVENTS BUBBLING//
// document.querySelector(".child").addEventListener("click", (e) => {
//     e.stopPropagation()// we are stopping the bubbling 
//     alert('child was clicked')
// })
// document.querySelector(".childContainer").addEventListener("click", (e) => {
//     e.stopPropagation()// we are stopping the bubbling 
//     alert('childContainer was clicked')
// })
// document.querySelector(".container").addEventListener("click", (e) => {
//     alert('container was clicked')
// })\

//we have more and more propert and methods to listen act all of which we can access from mdn documentation//
// we have similarly removeEventsListner(event, handler) to remove the event//
/////////////////////////////////////////////////////
// setInterval//

//we are using setinterval to give child a random background color every 3 sec
//random color generator
function generateRandomColor(){
    let a = Math.ceil(0 + Math.random() * 255)
    let b = Math.ceil(0 + Math.random() * 255)
    let c = Math.ceil(0 + Math.random() * 255)
    return `rgb(${a}, ${b}, ${c})`
}
// setInterval(() => {
//     document.querySelector(".childContainer").style.background = generateRandomColor();
// }, 100);

// if we want to stop this interval  we can do so by assigning the number returned by setinterval when give it to a variable , to clear interval as shown


// let a = setInterval(() => {
//     document.querySelector(".childContainer").style.background = generateRandomColor();
// }, 100);
// console.log(a) // this will give a integer it is not fixed what it will give
// //place that integer in the clearInterval
// clearInterval(2)

//setTimeout//
//setTimeout will run only once after a certain timeout we have assigned
// setTimeout(() => {
//     document.querySelector(".childContainer").style.background = generateRandomColor();
// }, 5000);
//we can stop it before it happens using clearTimeout()
let d = setTimeout(() => {
    document.querySelector(".childContainer").style.background = generateRandomColor();
}, 5000);
console.log(d)
clearTimeout(1) // note : it is not fixed what numbe it will give you can only know it at the browser time
