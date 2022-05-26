function deretKaskus(n){
    let c = []
    for(i=1; i<10; i++){
        let tiga = i * 3

        if(tiga % 5 == 0 && tiga % 6 == 0){
            c.push('KASKUS')
        } else if(tiga % 5 == 0){
            c.push('KAS')
        } else if(tiga % 6 == 0){
            c.push('KUS')
        } else {
            c.push(tiga)}
        }
        console.log(c)
    }
    
    
    

console.log(deretKaskus(10))