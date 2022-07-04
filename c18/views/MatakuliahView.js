export default class MatakuliahView {
    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Matakuliah
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Kembali
        `);
    }

    static detail(kode, matakuliah) {
        console.log(`
Hasil Pencarian matakuliah dengan kode matakuliah '${kode}' :
Kode Matakuliah    : ${matakuliah.kode_mk}
Nama Matakuliah    : ${matakuliah.nama_mk}
                `);
    }
}