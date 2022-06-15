function stringManipulation(word){
    switch (word[0].toLowerCase()) {
        case 'a':
            console.log(word)
            break;
        case 'i':
            console.log(word)
            break;
        case 'u':
            console.log(word)
            break;
        case 'e':
            console.log(word)
            break;
        case 'o':
            console.log(word)
            break;
        default:
      
            let pisah = word.split('')
            pisah.splice(0,1)
            console.log(pisah.join('') + word[0] + 'nyo')
    }
}
stringManipulation('ayam')
stringManipulation('bebek')