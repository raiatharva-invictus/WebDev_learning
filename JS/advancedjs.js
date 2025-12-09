/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced JS</title>
</head>
<body>
    <script src="advancedjs.js"></script>
</body>
</html>
*/

// async function sleep(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);    })
// }

// the concept of iife is that it is a function that is executed as soon as it is defined, it is used to avoid polluting the global namespace , execute an async-await,etc.
// we write it as below
// (async function main(){
//     let a = await sleep()
//     console.log(a);
//     let b = await sleep()
//     console.log(b);
// })()



//concept of destructuring
// let [x,y] = [7,10]
// console.log(x,y);

// let [x,y,...remaining] = [1,2,3,4,5,6,7,8,9] // this is callled destructuring
// console.log(x,y,remaining);

// similarly we can destructure an object
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b} = obj // this pulls(not removes) out the variable from the object for usage instead of entire object it is useful in practice often when we require using one or two variables or properties from an object
// console.log(a,b);


//usage of spread operator
// let sum be a function
// function sum(a,b,c){
//     return a + b + c;
// }
// let arr = [1,2,3]
// console.log(sum(arr[0], arr[1], arr[2])); // this is equivalent in result(answer) to below but if no_of_elements increase the usage of spread remain that simple syntac instead of manually passing 
// console.log(sum(...arr)); // this is the usages of spread operator it opens the array and then those values are passed to the sum function


// we know the concept of block scope, local scope and global scope

// the concept of hoisting in it basically a process in which compiler moves the declaration part to the top of the scope it is in before execution ie variables can be referenced before they are declared in javascript

{ // this is applicable for all types of scope this is just for illustration
 // imp info hoisting is only for var not let and const as they are modern and avoids the confusion of hoisting

 // below declaration is added by javascript but console.log gives error since we are logging before initialization 
 // var a;
 // var b;
console.log(a); // this gives undefined 
console.log(b); // this gives undefined 
console.log(a+b); // this gives undefined Nan since (undef. + undef.) 
    var b = 6;
    var a = 6;

}

// on the other hand function hoisting is something that is very useful i mean not all types of function like { let func  = function somefunc(){}}, {arrow function}, but for below type of function ,
// somefunc()
// function somefunc(){

// }