// let arr = [1,2,3,4,5,6];
// console.log(arr);
// console.log(arr.length)
// console.log(typeof arr); // it gives object as type

// console.log(arr[0]);
// console.log(arr[4]);
// arr[0] = 0;
// console.log(arr[0]);
// console.log(arr[4]);

// console.log(arr.toString());
// console.log(arr.join(" and "))

// arr.pop(); // returns the popped element from the array from back
// console.log(arr);
// arr.push("Atharva");
// console.log(arr);

// arr.shift(); // returns Element that it has removed from the array fron front
// console.log(arr);
// arr.unshift("Atharva"); // adds the element at front of the array
// console.log(arr);

// delete arr[4]; // memory allocated is still their but value shows empty 
// console.log(arr);


// let arr2 = [7,8,9];
// let arr3 = [10,11,12];
// console.log(arr.concat(arr2, arr3)); // it does not changes the original array but rather returns the concatenated array

// let arr4 = [2,1,90,23,3,-2,0,4];
// console.log(arr4)
// arr4.sort(); // modifies the original array by sorting it
// console.log(arr4);

// console.log(arr4.reverse()); // returnds reversed array does not modif original array

// let arr5 = [1,2,3,4,5,6];
// console.log(arr5);
// arr5.splice(1,3); // modifies the original array it returns and removes the range of elements from the array
// console.log(arr5);
// arr5.splice(1,3,4,10); // removes a certain range as mentioned and param after range are added to the original array
// console.log(arr5);

// console.log(arr5.slice(2)); // returns a new array which has given range of elements from applied array
// console.log(arr5.slice(2,4)); // returns a new array which has given range of elements from applied array


let arr6 = [1,2,2,4,0,12,9];

// for (let index = 0; index < arr6.length; index++) {
//     const element = arr6[index];
//     console.log(element)
// }

// arr6.forEach((value, index, arr) => {
//     console.log(value,index,arr)
// })

//understanding for in loop
// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(element)
    
// }

// using for of loop on arrays
// for (const value of arr6) {
//     console.log(value);
// }

// console.log(arr6)
// let newArr = arr6.map((x)=>{ // instead of using a for loop to derive out a array to a newArr we use map instead
//     return x**2;
// })    
// console.log(newArr)

// const greaterThanSeven = (e) => {
//     if(e > 7) return true;
//     return false;
// }
// console.log(newArr.filter(greaterThanSeven))

// let arr8 = [1,2,3,4,5,6];
// const fac = (a, b) => {
//     return a*b
// }
// console.log(arr8.reduce(fac))

// console.log(Array.from("Atharva Rai"));



