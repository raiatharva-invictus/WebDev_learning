console.log("Hello world")

let a = 18;

// normal if-else
// if(a > 18){
//     console.log("you are eligible to drive");
// }else{
//     console.log("you cannot drive");
// }

// if ,else if, else ladder
    if(a > 18){
        console.log("you are eligible to drive");
    }
    else if(a == 18){
        console.log("What to say")
    }
    else{
        console.log("you cannot drive");
    }


    // use of ternary operator
    let aa = (a > 18) ? "eligible" : (a != 18) ? "not eligible" : "what to say";
    console.log(aa);

// some operators in JS are , arithmetic -> + , -, *, /, **, %, ++, --
// some operators in JS are , assignment -> =, += , -=, *=, /=, **=, %=
// some operators in JS are , comparison -> ==(equal to), != , ===(equal value and type), !==(not equal value or not equal type), >, <, >=, <=, ?(ternary)
// some operators in JS are, logical -> &&, ||, !

// sinlge line comment
/*
multi line comment
*/
