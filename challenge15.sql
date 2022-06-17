select mahasiswa.nim, mahasiswa.nama, mahasiswa.umur, mahasiswa.alamat, jurusan.namajurusan from mahasiswa join jurusan on mahasiswa.kodejurusan = jurusan.kodejurusan;

select mahasiswa.nama, mahasiswa.umur from mahasiswa where mahasiswa.umur < 20;

select mahasiswa.nama, kontrak.nilai from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim where not kontrak.nilai = 'C' and kontrak.nilai != 'B' and kontrak.nilai != 'D' and kontrak.nilai != 'F';

select mahasiswa.nama, matakuliah.sks from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim join matakuliah on matakuliah.kodematkul = kontrak.kodematkul where matakuliah.sks > 10;

