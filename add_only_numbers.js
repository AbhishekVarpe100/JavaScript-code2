let a=[3,65,'k','modi',4,'pm']

let sum=0;
a.forEach((ele)=>{
    if((typeof ele)==='number'){
        sum+=ele;
    }
    return sum
})
console.log(sum)
