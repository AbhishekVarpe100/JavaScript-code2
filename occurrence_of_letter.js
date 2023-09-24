function occurrences(str){
    var occur={};
    str.split("").map((ele)=>{
        if(occur.hasOwnProperty(ele)===false){
            occur[ele]=1;
        }
        else{
            occur[ele]+=1;
        }
    })
    return occur;
}
console.log(occurrences("aaaabb"));