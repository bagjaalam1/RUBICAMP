const { readFile } = require("fs");
const readline = require('readline');

readFile('./data.json', 'utf-8', (err, baca) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Tebakan: '
    });
    let index = 0
    let simpanan = JSON.parse(baca)
    console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n')
    console.log(`Pertanyaan: ${simpanan[index].definition}`)
    rl.prompt()
    rl.on('line',
        (answer) => {
            let jawaban = answer.trim()
            if (jawaban.toLowerCase() == simpanan[index].term) {
                console.log('Selamat Anda Benar!\n')
                index++
                if (index == simpanan.length) {
                    console.log('Hore Anda Menang!\n')
                    rl.close()
                } else {
                    console.log(`Pertanyaan: ${simpanan[index].definition}`)
                }
            } else {
                console.log('Wkwkwkwk, Anda Kurang Beruntung!\n')
            }
            rl.prompt()
        })
    rl.on('close', () => {
        process.exit(0)
    });
})