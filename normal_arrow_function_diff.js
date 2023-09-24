// 1. syntax

function demo(){
    console.log("Hello")          // normal function
}

let arrow=()=>{
    console.log("Hello")          // arrow function
}

// 2.return statement

function demo1(){
    return  "Hello";               // return keyword required
}

let arrow1=()=>"Hello"             // single statement for return value


// 3.arguments keyword

function demo2() {
    console.log(arguments)           // arguments keyword work in normal function
}
demo2(3,6,5)

let arrow2=()=>{
    console.log(arguments)            // arguments keyword does not work in arrow function
}
// arrow2(5,7,3)


// 4. this keyword
let obj={
    username:"coders life",
    fun1:()=>{
        console.log("Username is "+this.username)  // arrow function refers to global
                                                   // object
    },
    fun2(){
        console.log("Username is "+this.username)  // normal function refers to current 
    },                                             // object
};

obj.fun1()
obj.fun2()