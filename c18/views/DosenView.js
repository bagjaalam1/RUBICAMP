export default class DosenView {
    static menu() {
        console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
        `);
    }

    static detail(kode, dosen) {
        console.log(`
Hasil Pencarian dosen dengan kode dosen '${kode}' :
Kode Dosen    : ${dosen.nip}
Nama Dosen    : ${dosen.nama}
                `);
    }
}