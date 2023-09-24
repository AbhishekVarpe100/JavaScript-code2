function duplicate(arr){
    let newArray=arr;
    return [...newArray,...arr]

}

console.log(duplicate([1,2,3]))

//or 

function duplicate1(arr){
    return arr.concat(arr)

}

console.log(duplicate1([1,2,3]))