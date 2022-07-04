import Main, { rl } from '../main.js'
import Table from 'cli-table'
import Dosen from '../models/Dosen.js'
import DosenView from '../views/DosenView.js'
import IndexView from '../views/IndexView.js'

export default class DosenController {

    static menuDosen() {
        DosenView.menu()
        IndexView.line();
        rl.question('Masukkan salah satu no. dari opsi di atas : ', (opsi) => {
            switch (opsi) {
                case '1':
                    DosenController.daftarDosen()
                    break;
                case '2':
                    DosenController.cariDosen()
                    break;
                case '3':
                    DosenController.tambahDosen()
                    break;
                case '4':
                    DosenController.hapusDosen()
                    break;
                case '5':
                    Main.menuUtama()
                    break;
                default :
                    console.log('Opsi tidak tersedia')
                    DosenController.menuDosen()
            }
        })
    }

    static daftarDosen(callback) {
        Dosen.read(function (err, data) {
            if (err) {
                console.log('gagal ambil dosen', err)
                process.exit(1)
            }
            const tableDosen = new Table({
                head: ['NIP', 'Nama Dosen']
                , colWidths: [20, 50]
            });
            data.forEach(item => {
                tableDosen.push([item.nip, item.nama])
            })
            console.log(tableDosen.toString())
            if (callback) {
                callback()
            } else {
                DosenController.menuDosen()
            }
        })
    }

    static cariDosen() {
        rl.question('Masukkan NIP : ', (kode) => {
            Dosen.search(kode, (err, data) => {
                if (err) {
                    console.log('gagal ambil dosen', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    DosenController.menuDosen()
                } else {
                    DosenView.detail(kode, data[0])
                    DosenController.menuDosen()
                }
            })
        })
    }

    static tambahDosen() {
        rl.question('Masukkan Kode Dosen : ', (kode) => {
            rl.question('Masukkan Nama Dosen : ', (nama) => {
                Dosen.add(kode, nama, (err) => {
                    if (err) {
                        console.log('gagal tambah dosen', err)
                        DosenController.tambahDosen()
                    } else {
                        console.log('dosen telah ditambahkan')
                        DosenController.daftarDosen()
                    }
                })
            })
        })
    }

    static hapusDosen() {
        rl.question('Masukkan Kode Dosen : ', (kode) => {
            Dosen.remove(kode, (err) => {
                if (err) {
                    console.log('gagal hapus dosen', err)
                    DosenController.menuDosen()
                } else {
                    console.log(`dosen dengan kode : ${kode} telah dihapus`)
                    DosenController.daftarDosen()
                }
            })
        })
    }

}

