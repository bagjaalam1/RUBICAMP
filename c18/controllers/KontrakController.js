import Main, { rl } from '../main.js'
import Table from 'cli-table'
import IndexView from '../views/IndexView.js'
import KontrakView from '../views/KontrakView.js'
import Kontrak from '../models/Kontrak.js'

export default class KontrakController {

    static menuKontrak() {
        KontrakView.menu()
        IndexView.line();
        rl.question('Masukkan salah satu no. dari opsi di atas : ', (opsi) => {
            switch (opsi) {
                case '1':
                    KontrakController.daftarKontrak()
                    break;
                case '2':
                    KontrakController.cariKontrak()
                    break;
                case '3':
                    KontrakController.tambahKontrak()
                    break;
                case '4':
                    KontrakController.hapusKontrak()
                    break;
                case '5':
                    Main.menuUtama()
                    break;
                default:
                    console.log('Opsi tidak tersedia')
                    KontrakController.menuKontrak()
            }
        })
    }

    static daftarKontrak(callback) {
        Kontrak.read(function (err, data) {
            if (err) {
                console.log('gagal ambil kontrak', err)
                process.exit(1)
            }
            const tableKontrak = new Table({
                head: ['ID', 'NIM', 'NIP', 'Kode_MK', 'Nilai']
                , colWidths: [20, 20, 20, 20, 20]
            });
            data.forEach(item => {
                tableKontrak.push([item.id, item.nim, item.nip, item.kode_mk, item.nilai])
            })
            console.log(tableKontrak.toString())
            if (callback) {
                callback()
            } else {
                KontrakController.menuKontrak()
            }
        })
    }

    static cariKontrak() {
        rl.question('Masukkan ID Kontrak : ', (kode) => {
            Kontrak.search(kode, (err, data) => {
                if (err) {
                    console.log('gagal ambil kontrak', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    KontrakController.menuKontrak()
                } else {
                    KontrakView.detail(kode, data[0])
                    KontrakController.menuKontrak()
                }
            })
        })
    }

    static tambahKontrak() {

        rl.question('Masukkan ID :', (id) => {
            rl.question('Masukkan NIM :', (nim) => {
                rl.question('Masukkan NIP :', (nip) => {
                    rl.question('Masukkan Kode Matakuliah :', (kode) => {
                        rl.question('Masukkan Nilai :', (nilai) => {
                            Kontrak.add(id, nim, nip, kode, nilai, (err) => {
                                if (err) {
                                    console.log('gagal tambah kontrak', err)
                                    KontrakController.tambahKontrak()
                                } else {
                                    console.log('kontrak telah ditambahkan')
                                    KontrakController.daftarKontrak()
                                }
                            })
                        })
                    })
                })
            })
        })
    }

    static hapusKontrak() {
        rl.question('Masukkan ID Kontrak : ', (kode) => {
            Kontrak.remove(kode, (err) => {
                if (err) {
                    console.log('gagal hapus kontrak', err)
                    KontrakController.menuKontrak()
                } else {
                    console.log(`kontrak dengan kode : ${kode} telah dihapus`)
                    KontrakController.daftarKontrak()
                }
            })
        })
    }

}

