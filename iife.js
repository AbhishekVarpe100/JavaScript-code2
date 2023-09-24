
// iief => immediately invoked function expression

// we can make variables private using iife

let ans=(function private(){
    var privateVal=23;
    return {
        getter:function(){
            console.log(privateVal)
        },
        setter:function(val){
            privateVal=val;
        }
    }

})()
ans.setter(5)
ans.getter();