export default class KontrakView {
    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Kembali
        `);
    }

    static detail(kode, kontrak) {
        console.log(`
Hasil Pencarian kontrak dengan kode kontrak '${kode}' :
id              : ${kontrak.id}
nim             : ${kontrak.nim}
nip             : ${kontrak.nip}
Kode Matakuliah : ${kontrak.kode_mk}
nilai           : ${kontrak.nilai}
                `);
    }
}