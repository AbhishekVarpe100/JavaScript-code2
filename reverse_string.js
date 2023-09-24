let string="saare jaha se accha";
let a=string.split(" ").map((ele)=>{
    return(ele.split("").reverse().join(""));
})
console.log(a.join(" "))