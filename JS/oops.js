/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOPS</title>
</head>
<body>
    <script src="oops.js"></script>
</body>
</html>
*/


// let obj = {
//     a : 1,
//     b : 2
// }

// console.log(obj);
//  every javascript has a prototype property which contains shared methods and properties for all instances created by that function
// example of prototype

// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal

//we can leverage the prototype chain that comes with using prototype and use prototype inheritance like we just used in the example above
// in simple words prototype is the way of adding some addn properties to an object
// but if it comes to real oop prototype is not enough  


// JavaScript enforces the rule that a class can have only one constructor method because the language does not support constructor overloading, a feature found in some other object-oriented languages like C++ or Java.
// class Animal { // a class can only have one constructor
//     // constructor() { // this can be empty as it is by default we just have explicity wrote it to show that constructor was called by logging onto the console
//     //     console.log('Object is being created.....');
//     // }
//     constructor(name) { // or we can even have arguments we have seen this plently of times in programming
//         this.name = name
//         console.log('Object is being created..... and this is an argument constructor');
//     }
//     eats() {
//         console.log("mai abhi khana kha rha hoon")
//     }
//     drinks() {
//         console.log("mai abhi pani pi rha hoon")
//     }

// }

// let a = new Animal;
// console.log(a)
// //we can call the methods(functions) of our class for its object
// a.eats()
// a.drinks()

// let a = new Animal('Phoenix')
// console.log(a)
// console.log(a.name)

// let say we create a new class
// class Lion extends Animal {
//     constructor(name) {
//         super(name)
//         // this.name = name // you can do this but this in unnecessary since super is going to call the parent constructor which is going to do this so we will not use it to increase reusablity of our code and respect the purpose of it
//         console.log('Object is being created..... and this is an argument constructor and it is a lion');
//     }

//     //Method Overriding we are overriding the parent eats() method here 
//     eats() {
//         super.eats() // calling above(parent) class eats method
//         console.log("mai abhi khana kha rha hoon roar")
//     }

//     //understandin static methods
//     static hello(){
//         console.log('hello this is a static method welcome to our class Lion')
//     }

// }

// let a = new Lion("Sheru")
// a.eats()


//static methods are used to implement the function that belong to class as a whole and not to  any particular object we can call them directly via class name
// a.hello() // will throw an error
// Lion.hello() // will work



class User{
    constructor(name){
        console.log('Object is being created.....');
        
        this.name = name
    }
    get name(){
        console.log('you called me to get the name');   
        return this._name
    }
    set name(value){
        // we can also add condn to set the name using simple if else
        if (value.length < 4){
            console.log('The length of the name is too short');
            return;
        }
        this._name = value;
        console.log('you called me to set the name');
        
    }
}

let user = new User("Atharva") // will call the constructor and then the setter to set the name
console.log(user.name) // will give name atharva, will call the getter 
user.name = "Atharva Rai" // will call the setter 
console.log(user.name); // will call the getter

let user1 = new User("") // will call the constructor and then setter which will log to the console that name is too short

// the instanceof operator
// console.log(user instanceof User);
// <obj> instanceof <class> // syntax
// in simple words instanceof will give true to the class from which it is created using new word plus if it is an object of a child class it will also give true to theh parent class but the object created from parent class will not give true to the child classes

