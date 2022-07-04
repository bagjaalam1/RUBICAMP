import Main, { rl } from '../main.js'
import Table from 'cli-table'

import IndexView from '../views/IndexView.js'
import MatakuliahView from '../views/MatakuliahView.js'
import Matakuliah from '../models/Matakuliah.js'


export default class MatakuliahController {

    static menuMatakuliah() {
        MatakuliahView.menu()
        IndexView.line();
        rl.question('Masukkan salah satu no. dari opsi di atas : ', (opsi) => {
            switch (opsi) {
                case '1':
                    MatakuliahController.daftarMatakuliah()
                    break;
                case '2':
                    MatakuliahController.cariMatakuliah()
                    break;
                case '3':
                    MatakuliahController.tambahMatakuliah()
                    break;
                case '4':
                    MatakuliahController.hapusMatakuliah()
                    break;
                case '5':
                    Main.menuUtama()
                    break;
                default :
                    console.log('Opsi tidak tersedia')
                    MatakuliahController.menuMatakuliah()
            }
        })
    }

    static daftarMatakuliah(callback) {
        Matakuliah.read(function (err, data) {
            if (err) {
                console.log('gagal ambil matakuliah', err)
                process.exit(1)
            }
            const tableMatakuliah = new Table({
                head: ['Kode Matakuliah', 'Nama Matakuliah', 'sks']
                , colWidths: [20, 50, 20]
            });
            data.forEach(item => {
                tableMatakuliah.push([item.kode_mk, item.nama_mk, item.sks])
            })
            console.log(tableMatakuliah.toString())
            if (callback) {
                callback()
            } else {
                MatakuliahController.menuMatakuliah()
            }
        })
    }

    static cariMatakuliah() {
        rl.question('Masukkan Kode Matakuliah : ', (kode) => {
            Matakuliah.search(kode, (err, data) => {
                if (err) {
                    console.log('gagal ambil matakuliah', err)
                    process.exit(1)
                }
                if (data.length == 0) {
                    console.log('data tidak ditemukan')
                    MatakuliahController.menuMatakuliah()
                } else {
                    MatakuliahView.detail(kode, data[0])
                    MatakuliahController.menuMatakuliah()
                }
            })
        })
    }

    static tambahMatakuliah() {
        rl.question('Masukkan Kode Matakuliah : ', (kode) => {
            rl.question('Masukkan Nama Matakuliah : ', (nama) => {
                rl.question('Masukkan SKS : ', (sks) => {
                    Matakuliah.add(kode, nama, sks, (err) => {
                        if (err) {
                            console.log('gagal tambah matakuliah', err)
                            MatakuliahController.tambahMatakuliah()
                        } else {
                            console.log('matakuliah telah ditambahkan')
                            MatakuliahController.daftarMatakuliah()
                        }
                    })
                })
            })
        })
    }

    static hapusMatakuliah() {
        rl.question('Masukkan Kode Matakuliah : ', (kode) => {
            Matakuliah.remove(kode, (err) => {
                if (err) {
                    console.log('gagal hapus matakuliah', err)
                    MatakuliahController.menuMatakuliah()
                } else {
                    console.log(`matakuliah dengan kode : ${kode} telah dihapus`)
                    MatakuliahController.daftarMatakuliah()
                }
            })
        })
    }

}

