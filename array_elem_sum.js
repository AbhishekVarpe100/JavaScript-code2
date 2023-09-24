let arr=[3,6,7,2]
// let sum=0;
// arr.forEach((ele)=>{
//     sum+=ele;
// })
// console.log(sum);

// or

let sum=arr.reduce((sumBefore,ele)=>{
    return sumBefore+ele;
},0)
console.log(sum);