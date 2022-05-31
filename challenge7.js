function weirdMultiply(sentence){
    var numArr = Array.from(String(sentence), Number)
    let total = 1
    if(numArr.length == 1){
        return numArr[0]
    } else {
        for(let i=0; i<numArr.length; i++){
        total *= numArr[i]
        //console.log(total)
        } return weirdMultiply(total)
    }
}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))