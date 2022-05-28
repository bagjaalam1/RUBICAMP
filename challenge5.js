function stringManipulation(word){
    switch (word[0]) {
        case 'a':
            console.log('ayam')
            break;
        case 'i':
            console.log('ayam')
            break;
        case 'u':
            console.log('ayam')
            break;
        case 'e':
            console.log('ayam')
            break;
        case 'o':
            console.log('ayam')
            break;
        default:
            let hewanKonsonan = word.split('')
            
            hewanKonsonan.splice(0,1)
            
            hewanKonsonan.splice(4,0,'bnyo')
            
            let hewanBaru = hewanKonsonan.join('')
            console.log(hewanBaru)
    }
}

stringManipulation('ayam')
stringManipulation('bebek')