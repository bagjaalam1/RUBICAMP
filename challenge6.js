function sentencesManipulation (sentence){
    
    let pisah1 = sentence.split(' ')
    let hasil = []
    
    for(var i=0; i<pisah1.length; i++){
        var pisah2 = pisah1[i][0]
        //console.log(pisah2)
        switch (pisah2) {
            case 'a':
                hasil.push(pisah1[i])
                break;
            case 'i':
                hasil.push(pisah1[i])
                break;
            case 'u':
                hasil.push(pisah1[i])
                break;
            case 'e':
                hasil.push(pisah1[i])
                break;
            case 'o':
                hasil.push(pisah1[i])
                break;
            default:
                let konsonan = pisah1[i].split('')
                let awalHapus = konsonan.splice(0,1)
                hasil.push(konsonan.join('') + awalHapus + 'nyo')
        } 
    } 
    console.log(hasil.join(' '))
}
sentencesManipulation('ibu pergi ke pasar bersama aku')