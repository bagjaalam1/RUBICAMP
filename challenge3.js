function romawi(n){
    const tabelRomawi = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let text = ''

    for(const key in tabelRomawi){
        const angka = tabelRomawi[key]
        while (angka <= n){
            n -= angka
            text += key
        }
    } return text
}
console.log("Script Testing untuk Konversi Romawi/n")
console.log("input | expected | result")
console.log("------|----------|-------")
console.log("4     | IV       |", romawi(4))
console.log("9     | IX       |", romawi(9))
console.log("9     | XIII     |", romawi(13))
console.log("9     | MCDLIII  |", romawi(1453))
console.log("9     | MDCXLVI  |", romawi(1646))
