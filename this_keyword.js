this.a=5;
let obj={
    a:4,
    func1:function(){
        console.log(this.a)  // In normal function this keyworrd refers to the current 
                             // object
    },
    func2:()=>{
        console.log(this.a)  // In arrow function this keyword refers to the global/window object
    }
}

obj.func1()
obj.func2()