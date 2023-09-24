function clone(arr){

    // let newArr=[...arr]; //spread operator

//or

    // let newArr=[];
    // arr.forEach((ele)=>{
    //     newArr.push(ele)
    // })

// or

    let newArr=arr.map((ele)=>{             // map function
        return ele;
    })
    
    return newArr;
}
let a=[4,7,23];
console.log(clone(a))