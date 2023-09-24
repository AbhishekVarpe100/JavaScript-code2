// first way by destructuring object
let obj={
    "name":"xyz",
    "age":21
}

// let obj2={...obj}         // destructuring object
// let obj2=Object.assign({},obj)   // assigning value of first object to the second object
let obj2=JSON.parse(JSON.stringify(obj))
obj2['name']='abhishek';
console.log(obj,obj2)
