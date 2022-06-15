function indexPrime(par){

    var counter = 0 //function gaboleh ngambil ariable dari luar scopenya dia
    function checkPrime(param1){
        
        for(var i=2; i <= Math.sqrt(param1); i++){
            if(param1 % i === 0){
                return false
            } 
        }
                return true
        }

    for(var i=2; i<Infinity; i++){
        if (checkPrime(i)){
            console.log(checkPrime(i))
            counter++
        }
        if (par == counter){
        break}
    } return i
    
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))