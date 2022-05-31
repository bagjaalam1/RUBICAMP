

function pola(str) {
    var bagian = str.split('=')
    var firstStr = bagian[0].toString()
    var secStr  = bagian[1].toString()
    var toArr = []
    
    for (i=0; i<10; i++){
        var ganti = firstStr.replace('#',i)
        var hasil = eval(ganti)
        
        for (let j=0; j<10; j++){
            let ganti2 = secStr.replace('#',j)
            if(hasil == ganti2){
                toArr.push(i)
                toArr.push(j)
            }
        } 
    } return toArr
}

console.log(pola("42#3 * 188 = 80#204")) // result [8, 5]
console.log(pola("8#61 * 895 = 78410#5"))// result [7, 9]