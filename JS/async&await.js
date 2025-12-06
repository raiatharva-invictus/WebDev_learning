// html code used
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async & Awaits</title>
</head>
<body>

    <script src="async&await.js"></script>
</body>
</html>
*/

// function getData(){
// we are simulating getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     }
//     )
// }

// console.log('Loading modules');

// console.log('Doing something');

// // console.log('Load data');
// // let data = getData()
// // console.log(data) // this will log pending since we have set the timeout to 3.5 sec so dont freak out why it is pending
// // console.log('process data'); // this will run even though above data is still being fetched


// console.log('Load data');
// let data = getData()
// data.then((v) => { // this is scenario when you want to wait for the data and then do further thing but this is just like previous callback approach that when this happens do this since we are giving then a function to eexcute after promise is fulfilled
//     console.log(data);
//     console.log(v);
//     console.log('process data'); 
// }
// )


// we have better ways to do this using async and await async basically tells that this funciton is going to run in background and further script will excute while the function is executing in background. when we use await we are saying that okay let's wait while this is being done although their are various ways to use await but for now we need to just know that we can use it inside an async function only below is demonstration of same and the reason is same that we wrapped all code in async function named main

// async function getData(){
    // we are simulating getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     }
//     )
// }

//Imp concept : 
// settle in promise means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

// async function getData(){
//     // we are simulating getting data from a server

//     // below is the syntax of fetch api which returns two promises that's why we have two awaits like in original syntax we have two .then(), one await is for getting that data and second is for parsing that data
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // let data = await x.text()
//     let data = await x.json()
//     return data;
    
// }

// async function main(){

// console.log('Loading modules');

// console.log('Doing something');

// console.log('Load data');
// let data = await getData() 
//     console.log(data);
//     console.log('process data'); 
// }
// main()








