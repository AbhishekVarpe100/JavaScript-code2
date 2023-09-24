function checkType(...args){
    for(arg of args){
        console.log(typeof arg)
    }
}

checkType(11,'11',[],{},true,undefined, function(){})

