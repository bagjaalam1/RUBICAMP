function weirdMultiply(sentence){
    var numArr = Array.from(String(sentence), Number)
    
    if (numArr.length == 1){
        return numArr[0]
    } 
    else if (numArr.length == 2) {
        
        return weirdMultiply(numArr[0] * numArr[1])
    } 
    else if (numArr.length == 3){
        return weirdMultiply(numArr[0] * numArr[1] * numArr[2])
    }
} 

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))