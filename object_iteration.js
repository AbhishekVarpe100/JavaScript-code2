let obj={
    name:"abhi",
    age:21
}

Object.values(obj).forEach((val)=>{
    console.log(val);
})

//or

for(key in obj){
    console.log(obj[key])         // extracting key from the object
}