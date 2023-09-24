function checkArrayOrObject(ele){
    return Array.isArray(ele)
}

console.log(checkArrayOrObject([]))
console.log(checkArrayOrObject({}))
console.log(checkArrayOrObject(1))