//Understanding on javascript functions

//Function without parameters and without return type

// let, var and const
// let and const are block scoped
{
    let x=10; //local variable
    const y=20;
    console.log(x); //ReferenceError: x is not defined
    console.log(y); //ReferenceError: y is not defined
}

//var is function scoped
{
    var z=30; //global variable
}
console.log(z); //30
// console.log(x); //ReferenceError: x is not defined
// console.log(y); //ReferenceError: y is not defined
function subtract(){ //Function Declaration

    let m = 10; //local variable
    console.log(m);
    var a=20;
    var b=10;
    var sub=a-b;
    console.log("The subtraction of a and b is: "+sub);
}
subtract(); //Function Call or Function Invocation

function add(){
    var a=10;
    var b=20;
    var sum=a+b;
    console.log("The sum of a and b is: "+sum);
}
add();

function divide(){
    var a=20;
    var b=10;
    var div=a/b;
    return div; //return statement      
}
var result=divide(); //Function Call or Function Invocation
console.log("The division of a and b is: "+result);

//Function with parameters and without return type
function multiply(a,b,c,d,e){
    var mul=a*b*c*d;
    var demo = e;
    console.log("The value of e is: "+demo);
    console.log("The multiplication of a and b is: "+mul);
}

multiply(10,20,3,2,"true");
multiply(5,6,1,1,"false");

//Function with parameters and with return type  
//Different way to define a function

const addition = function(a,b){
    var sum=a+b;
    return sum;
}
console.log(addition(10,20));

var divide = function(a,b,c,d){
    return true;
}
console.log(divide(10,20,30,40));
//var result1=addition(10,20);
//console.log("The sum of a and b is: "+result1);

//Arrow function
const sub = (a,b) => {
    var sub= a-b;
    console.log("The subtraction of a and b is: "+sub);
    return a-b;
}
console.log(sub(20,10));




// Different way to write arrow function
const sub1 = (a,b) => a-b;
console.log(sub1(50,20));




const mul = (a,b) => a*b;
console.log(mul(10,20));

//Function Expression
//Anonymous function
var demo = function(a,b){
    return a+b;
}
console.log(demo(10,20));

//Named function
var demo1 = function add(a,b){
    return a+b;
}
console.log(demo1(20,30));

//Immediately Invoked Function Expression(IIFE)
(function(a,b){
    var sum=a+b;
    console.log("The sum of a and b is: "+sum);
})(10,20);