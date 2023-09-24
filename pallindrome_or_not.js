function pallindrome(str){
    let reverseString=str.split("").reverse().join("");
    // if(str===reverseString){
    //     console.log("pallindrome")
    // }
    // else{
    //     console.log("Not pallindrome")
    // }
    return reverseString===str;
}
// pallindrome('loop')
console.log(pallindrome("lool"))