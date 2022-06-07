const { readFile } = require('fs')
const readline = require('readline')
const args = process.argv

if (args[2] == null) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya')
    console.log('Misalnya \'node solution.js data.json\'')
} else {
    readFile(args[2], 'utf-8', (err, baca) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'Jawaban: '
        });
        let index = 0
        let jumlahSalah = 0
        let simpanan = JSON.parse(baca)
        console.log('Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini \'data.json\'.')
        console.log('Untuk bermain, jawablah dengan jawaban yang sesuai.')
        console.log('Gunakan \'skip\' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan di tanyakan lagi.\n')
        console.log(`Pertanyaan: ${simpanan[index].definition}`)
        rl.prompt()
        rl.on('line',
            (answer) => {
                let jawaban = answer.trim()
                if (jawaban.toLowerCase() == simpanan[index].term) {
                    console.log('\nAnda Beruntung!')
                    index++
                    if (index == simpanan.length) {
                        console.log('\nAnda Berhasil!\n')
                        rl.close()
                    } else {
                        console.log(`\nPertanyaan: ${simpanan[index].definition}`)
                    }
                } else {
                    if (jawaban == 'skip') {
                        simpanan.push(simpanan[index])
                        simpanan.splice(index,1)
                        console.log(`\nPertanyaan: ${simpanan[index].definition}`)
                        jumlahSalah = 0
                    } else {
                        jumlahSalah++
                        console.log(`\nAnda kurang beruntung! anda telah salah ${jumlahSalah} kali, silahkan coba lagi.`)
                    }

                }
                rl.prompt()
            })
        rl.on('close', () => {
            process.exit(0)
        });
    })
}
