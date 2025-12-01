let a = Number(prompt("Enter the first number : "));
let b = Number(prompt("Enter the second number here : "));
let c = prompt('Enter the operation you want to perform : ');


function faultyCalc(a, b, c){
    let condition = Math.random() < 0.1;

    if(c == '+'){
        return condition ? a+b:a-b;
    }
    else if(c == '*'){
        return condition ? a*b : a+b;
    }
    else if(c == '-'){
        return condition ? a-b : a/b;
    }
    else if(c == '/'){
        return condition ? a / b : a**b;
    }else{
        console.log("wrong operator used")
    }
}

console.log(faultyCalc(a,b,c));