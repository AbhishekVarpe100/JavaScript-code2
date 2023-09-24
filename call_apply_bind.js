function demo(a,b){
    console.log(this,a,b);    // in this function this will become object in this case 
}

let obj={name:'abhi'}
demo.call(obj,1,2)     // call is use to tell which value is to pass or store in this   
                       // we can also pass parameters using call method

let obj1={name:'abhi'}
demo.apply(obj1,[1,2])   // we can pass parameters in apply method using array

let obj2={name:'abhi'}
let bindFunc=demo.bind(obj2,1,2)    // bind provide a function to call it
bindFunc()

