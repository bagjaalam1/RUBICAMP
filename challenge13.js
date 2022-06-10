const { writeFileSync, readFileSync } = require('fs')
const args = process.argv
let bacaData = readFileSync('./list.json', 'utf-8')
let data = JSON.parse(bacaData)
let semua = args.slice(3)
let bersatu = semua.join(' ')

switch (args[2]) {

    case 'add':

        if (semua == '') {
            console.log('Masukkan data yang akan ditambahkan!')
        } else {
            let lengkap = '[ ] ' + bersatu
            data.push({ "kerjaan": lengkap, "tag": [] })
            let masukJSON = JSON.stringify(data)
            writeFileSync('./list.json', masukJSON)
            console.log(`"${bersatu}" telah ditambahkan.`)
        }
        break;

    case 'list':
        console.log('Daftar Pekerjaan')
        let counter = 0
        let number = 1
        while (counter < data.length) {
            console.log(`${number}. ${data[counter].kerjaan}.`)
            number++
            counter++
        }
        break;

    case 'list:outstanding':

        console.log('Daftar Pekerjaan')
        let counterOut = 0
        let numberOut = 1
        while (counterOut < data.length) {
            if (data[counterOut].kerjaan.slice(1, 2) == ' ') {
                console.log(`${numberOut}. ${data[counterOut].kerjaan}`)
                numberOut++
                counterOut++
            } else {
                data.splice(counterOut, 1)
            }
        }
        break;

    case 'completed':

        console.log('Daftar Pekerjaan')
        let counterPain = 0
        let numberPain = 1
        while (counterPain < data.length) {
            if (data[counterPain].kerjaan.slice(1, 2) == 'x') {
                console.log(`${numberPain}. ${data[counterPain].kerjaan}`)
                numberPain++
                counterPain++
            } else {
                data.splice(counterPain, 1)
            }
        }
        break;

    case 'delete':

        if (semua == '') {
            console.log('Masukkan data yang akan dihapus!')
        } else {
            semua--
            console.log(`'${data[semua].kerjaan.slice(4)}' telah dihapus dari daftar`)
            data.splice(semua, 1)
            let masukJSON = JSON.stringify(data)
            writeFileSync('./list.json', masukJSON)
        }
        break;

    case 'complete':

        semua--
        let pekerjaanCom = data[semua].kerjaan
        let checkList = pekerjaanCom.replace(' ', 'x')
        data[semua].kerjaan = checkList
        masukJSON = JSON.stringify(data)
        writeFileSync('./list.json', masukJSON)
        console.log(`"${checkList.slice(4)}" telah selesai.`)
        break;

    case 'uncomplete':
        semua--
        let pekerjaanUnCom = data[semua].kerjaan
        let unCheckList = pekerjaanUnCom.replace('x', ' ') //kurangnya
        data[semua].kerjaan = unCheckList
        masukJSON = JSON.stringify(data)
        writeFileSync('./list.json', masukJSON)
        console.log(`"${unCheckList.slice(4)}" status selesai dibatalkan.`)
        break;

    case 'tag':

        args[3]--
        let tagBergabung = semua.slice(1).join(' ')
        let yangAkandiMunculkan = semua.slice(1).join()
        data[args[3]].tag.push(tagBergabung)
        masukJSON = JSON.stringify(data)
        console.log(`'${yangAkandiMunculkan}' telah ditambahkan ke daftar ${data[args[3]].kerjaan.slice(4)}`)
        writeFileSync('./list.json', masukJSON)
        break;

    case `filter:${args[2].slice(7)}`:

        for (let f = 0; f < data.length; f++) {
            if (data[f].tag.join().indexOf(args[2].slice(7)) >= 0) {
                let numberFilter = 1
                console.log(`${numberFilter}. ${data[f].kerjaan}`)
                numberFilter++
            }
        }
        break;

    case 'help':

        console.log('>>> JS TODO <<<')
        console.log('$ node todo.js <command>')
        console.log('$ node todo.js list')
        console.log('$ node todo.js task <task_id>')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id')
        console.log('$ node todo.js uncomplete <task_id')
        console.log('$ node todo.js list:outstanding asc|desc')
        console.log('$ node todo.js list:completed asc|desc')
        console.log('$ node todo.js tag <task_id> <tag_name_1> ... <tag_name_N>')
        console.log('$ node todo.js filter:<tag_name>')
        break;

    default:

        console.log('Masukkan perintah yang benar! Ketik help untuk melihat command yang tersedia')
}