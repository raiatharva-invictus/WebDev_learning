// some basic javascript uses

alert("hello world");
console.log("Printing to console")

var a = prompt("Enter you number")

console.log("The number entered by you is " + a )

var b = confirm("Are you sure you want to exit the website ? ")
if(b){
    console.log("Thank you for visiting")
}else{
    console.log("let's learn some more cool stuff")
}

document.title = "Let's learn javascript"
document.body.style.backgroundColor = "lightgray"