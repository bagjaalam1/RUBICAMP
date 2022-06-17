select mahasiswa.nim, mahasiswa.nama, mahasiswa.umur, mahasiswa.alamat, jurusan.namajurusan from mahasiswa join jurusan on mahasiswa.kodejurusan = jurusan.kodejurusan;

select mahasiswa.nama, mahasiswa.umur from mahasiswa where mahasiswa.umur < 20;

select mahasiswa.nama, kontrak.nilai from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim where kontrak.nilai = 'A';

select mahasiswa.nama, matakuliah.sks from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim join matakuliah on matakuliah.kodematkul = kontrak.kodematkul where matakuliah.sks > 10;

select mahasiswa.nama, matakuliah.nama from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim join matakuliah on matakuliah.kodematkul = kontrak.kodematkul where matakuliah.kodematkul = 'M0003';

select count(mahasiswa.nama), dosen.namadosen from mahasiswa join kontrak on mahasiswa.nim = kontrak.nim join dosen on dosen.nidn = kontrak.nidn group by dosen.nidn;

select nama, umur from mahasiswa order by umur asc;

select kontrak.id, kontrak.nim, kontrak.kodematkul, kontrak.nilai from kontrak where kontrak.nilai = 'D' or kontrak.nilai = 'E';

select mahasiswa.nama, mahasiswa.nim, mahasiswa.alamat, jurusan.namajurusan, jurusan.kodejurusan, kontrak.nilai, dosen.namadosen, dosen.nidn from mahasiswa join jurusan on jurusan.kodejurusan = mahasiswa.kodejurusan join kontrak on mahasiswa.nim = kontrak.nim join dosen on dosen.nidn = kontrak.nidn;