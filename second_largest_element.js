let a=[3,5,7,2,6]

let max=a[0];
let ind=0;
a.forEach((ele,index)=>{
    if(ele>max){
        max=ele;
        ind=index;
    }
})
console.log("First largest element "+max)
a.splice(ind,1)
let max2=a[0];
a.forEach((ele)=>{
    if(ele>max2){
        max2=ele;
    }
})

console.log("Second largest element "+max2)
