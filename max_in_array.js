let arr=[3,6,2,7,21,43,5,];
let max=arr[0];
arr.forEach((ele)=>{
    if(ele>max){               // iterating each element of an array to find maximum in it
        max=ele
    }
})

console.log(`Maximum element in array is ${max}`)