// let inp = Number(prompt("Enter the number you want to calculate factorial of : "));

// easy approach
// let mul = 1;
// for (let index = 1; index <= inp; index++) {
//     mul *= index;
    
// }
// alert(mul)

// using reduce
// let arr = []
// for (let index = 1; index <= inp; index++) {
//     arr[index] = index;
    
// }
// let fac = (a, b)=>{
//     return a*b;
// }
// console.log(arr.reduce(fac))    


// one more way harry bhaiya told to make a array
let a = 6;
function fac(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a*b
    })
    console.log(c)
}
fac(a);