let a=[3,8,2];
let mapResult=a.map((ele,i,arr)=>{  // map function return the new array
    return ele+2;                  // we can also chain the functions with map
}).filter((ele)=> ele%2!=0);

let forEachResult=a.forEach((ele,i)=>{   // forEach does not return any new array
    a[i]=ele+3                           // but we can modify the original array using it
})                                       // we cannot chain functions with forEach

console.log(mapResult)
console.log(forEachResult)
console.log(a)