/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>try catch & error handling</title>
</head>
<body>
    <script src="try catch & error handling.js"></script>
</body>
</html>
*/

let a = prompt("enter first number")
let b = prompt("enter second number")

// if(isNaN(a) || isNaN(b)){ 
//     throw SyntaxError("Sorry but the input is not allowed") // this is custom error handling that is we dont want our user to enter something that we dont desire
// }

let sum = parseInt(a) + parseInt(b)
// console.log("The sum is ",sum);

// try {
//     console.log("The sum is ",sum*x);
// } catch (error) {
//     // console.log(error); // this will log in the console the error that is thrown by javascript
//     // we are logging the 'error' as we know which is an object so we can indvidually print error.name, error.message, error.stack
//     console.log("Error agya bhaiya!!") // this is custom erroy msg (not custom error throw) we are printing
// }

// try catch is an synchronous function so we if use async function in try the script will die ie catch wont work like if setTimeout is used in try 


//understanding the finally , we can understand the real importance or meaning of finally via a function
let x = 5;
function main(){
    try {
        console.log("The sum is ",sum*x);
        return true
    } catch (error) {
        console.log("Error agya bhaiya!!")
        return false
    }
    finally{
        console.log("files are being closed and db connection is also being closed")
    }
}
main()