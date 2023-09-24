let objArr=[{name:"kiran",gender:'male'},{name:"sonali",gender:'female'},{name:"sanket",gender:'male'},{name:"sakshi",gender:'female'}]

let maleArray=objArr.filter((ele)=>{
   
    return ele.gender=='male';
})
console.log(maleArray)