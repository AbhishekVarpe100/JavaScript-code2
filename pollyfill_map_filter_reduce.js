//   // filter pollyfill
// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i]);
//     }
//     return temp;
// }
// let a=[5,7,3]
// let b=a.filter((num)=>{
//     return num>4;
// })
// console.log(b)


// // map pollyfill
// Array.prototype.myMap=function(cb){
//         let temp=[];
//         for(let i=0;i<this.length;i++){
//             temp.push(cb(this[i],i,this));
//         }
//         return temp;
//     }
//     let a=[5,7,3]
//     let b=a.myMap((num)=>{
//         return num*2;
//     })
//     console.log(b)


// reduce pollyfill
Array.prototype.myReduce=function(cb, initialValue){
        let accumulator=initialValue;
        for(let i=0;i<this.length;i++){
            accumulator=accumulator? cb(accumulator,this[i],i,this):this[i];
        }
        return accumulator;
    }
    let a=[5,7,3]
    let b=a.myReduce((acc,curr)=>{
        return acc+curr;
    },0)
    console.log(b)