// console.log("he is a hacker")
// console.log("he is a hecker")

// setTimeout(() => {
//     console.log("i am inside settimeout")
// }, 0);

// console.log("this is end") // to your surprise timeout console is executed at last even though it is set to 0 ms

////////////////////////
// const callback = (arg) => {
//   console.log(arg)
// }

// const loadscript = (src, callback) => {
//   let sc = document.createElement("script")
//   sc.src = src
//   sc.onload = callback("atharva")
//   document.head.append(sc)
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// above is demonstration of callbackfunciton we can instead of when calling loadscript give directly callback function syntax that is an arrow fuction which then calls another callback function which calls another this becomes a callback hell also known as pyramid of doom since we ofcourse need to call functions but managing them this way is very challengin as named pyramid of doom or callback hell


// Intro to promises//
// console.log('This is promises');

// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a < 0.5){
//         reject("got rejected")
//     }
//     else{
//         setTimeout(() => {
//             console.log('This is settimeout');
//             resolve("Atharva")

//         }, 3000);
//     }
// })

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err) => {
//   console.log(err);
// }
// )

// // we can define mutlitple .then for a promise and give handler like above and arrow function all handlers are independent of each other and will run independently
// // we can also do promise chaining that is returning a promises from a .then of a promise and then attaching .then for the return promise and so on

//// understanding different promise apis/////

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("got rejected by 1")
    }
    else {
        setTimeout(() => {
            console.log('This is settimeout of 1');
            resolve("Atharva 1")

        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("got rejected by 2")
    }
    else {
        setTimeout(() => {
            console.log('This is settimeout of 2');
            resolve("Atharva 2")

        }, 3000);
    }
})

// //Promise.all()
// let p3 = Promise.all([prom1, prom2])
// p3.then((a) => {
//     console.log(a);

// }
// ).catch((e) => {
//     console.log(e);

// }
// )

// //Promise.allSettled()
// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//     console.log(a);

// }
// ).catch((e) => {
//     console.log(e);

// }
// )

// //Promise.race()
// let p3 = Promise.race([prom1, prom2])
// p3.then((a) => {
//     console.log(a);

// }
// ).catch((e) => {
//     console.log(e);

// }
// )

//Promise.any()
let p3 = Promise.any([prom1, prom2])
p3.then((a) => {
    console.log(a);

}
).catch((e) => {
    console.log(e);

}
)

