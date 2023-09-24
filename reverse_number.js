function number(num){
let stringNum=num.toString();
console.log(typeof (stringNum.split("").reverse().join(""))+" "+(stringNum.split("").reverse().join(""))) // default it is a string number in reverse format

console.log(typeof Number(stringNum.split("").reverse().join(""))+" "+Number(stringNum.split("").reverse().join(""))) // convert it to a number and reverse
}
number(12345)

//or

function reverseNumber(num){
    let rev=0;
        while(num!=0){
            let rem=num%10;  // remiander
            rev=rev*10+rem;
            num=Math.floor(num/10)    // finding quotient/floor 
        }
        console.log(rev)
}

reverseNumber(24345)