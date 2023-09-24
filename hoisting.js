// hoisting is the java script behaviour of moving all the function and variable declarations at the top of their respective scopes during the compilation phase

//only var can be hoisted let and const cannot be hoisted
// also only declaration can be hoisted not values or definition
// function also can be hoisted
func();
function func(){
    console.log("Hello");
}


console.log(a);
var a;          // output : undefined

// console.log(b);
// let b;         // output : will give error let cannot be hoisted

// console.log(c);
// const c=3.14;  // output : will give error const cannot be hoisted