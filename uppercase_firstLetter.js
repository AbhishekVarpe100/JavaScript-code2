function uppercaseFirst(str){

    let upper=str.split(" ");  // making array of string
    console.log(upper)
    let uppercaseLetter=upper.map((ele)=>{
        return ele[0].toUpperCase()+ele.slice(1)  // uppercase each word first element
    })

    return uppercaseLetter.join(" ")

    // return str[0].toUpperCase()+str.slice(1);
}
console.log(uppercaseFirst("abhishek is a good boy"))