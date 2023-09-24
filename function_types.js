console.log(function(a,b){
    return a*b;
}(2,4));                          // anonymous function it doesnt have any name 


let func=function(){
    console.log("function expression");  // function expression
}
func()   
                         
let func2=function hello(){
    console.log("named function expression");
}
func2()                            // named function expression


let func3=(a,b)=> a+b;
console.log(func3(2,5));          // arrow function

function callBack(a,callFunction){
    callFunction();
}

function print(){
    console.log("Callback function");
}
callBack(3,print)


//
function square(num){
    return num*num;
}

function displaySquare(fn,arg){
    console.log("Square is "+fn(arg))   // first class function example with parameter as 
}                                       // a function

displaySquare(square,5)
//



//higher order function are those functions which having parameter as a function/functions