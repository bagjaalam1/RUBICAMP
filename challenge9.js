function spiral(param1) {
    let hasil = []
    let counter = 0

    for (let i = 0; i < param1; i++) {
        hasil[i] = []
        for (let j = 0; j < param1; j++) {
            hasil[i][j] = counter
            counter++
        }
    }
    let x = 0
    let y = 0
    let result = []
    let batas = 0
    let length = param1 * param1
    while (result.length < length) {

        //ke kanan
        for (; y < param1; y++) {
            result.push(hasil[x][y])
        }
        x++
        y--

        //ke bawah
        for (; x < param1; x++) {
            result.push(hasil[x][y])
        }
        x--
        y--

        //ke kiri
        for (; y >= batas; y--) {
            result.push(hasil[x][y])
        }
        x--
        y++

        //ke atas
        for (; x > batas; x--) {
            result.push(hasil[x][y])
        }
        x++
        y++
        batas++
        param1--
    }
    console.log(result)
}
spiral(5)
spiral(6) 
spiral(7)