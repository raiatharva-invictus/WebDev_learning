// variables(vars)

// we have certain rules for naming of variables like variable name can only start with letter, _ or a $ symbol
// we can't use reserved words
// in javascript variables are case sensitive

// // var a = 5;
// var b = 12;
// var c = "Hello this is Atharva";
// // console.log(a + b)
// // console.log(c)
// // console.log(typeof a, typeof b, typeof c)

// // use of var is not recommended as var makes a variable global so for modern js writing we will use only let and const since they are only accessible in whichever block they are defined , they can be global too

// let a = 5; // globally available
// {
//     let b = 7; // local to this block only
//     // console.log(a)
//     // console.log(b)
//     var z = 6; // this is global even though it is defined inside a block
// }
// console.log(a)
// console.log(b)
// console.log(z)


//////////////////////////////////////////////////////////////////////////////

// JS has 7 primitive datatypes namely : null, Number, string, Symbol, undefined, Boolean, BigInt
let x = "Atharva Rai";
let y = 24;
let z = 3.35;
const p = true;
let q = null; // when we look a typof q it shows object not null due to a mistake done long time ago which couldn't be changed due to large codebase relying of it
let r = undefined;
console.log(x,y,z,p,q,r)
console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let t = {
    name : "Atharva",
    "job role" : "Senio SDE",
    "is_engineer" : true,   
}
console.log(t);
t.salary = "500crores";
console.log(t);