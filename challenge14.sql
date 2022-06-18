create table jurusan(
    kodejurusan varchar(5) primary key not null, 
    namajurusan varchar(50) not null
    );

insert into jurusan(kodejurusan, namajurusan) values 
    ('J0001', 'Informatika'), 
    ('J0002', 'PBA'); 

create table mahasiswa(
    nim varchar(5) primary key not null, 
    nama varchar(50) not null, 
    umur integer not null,
    alamat text, 
    kodejurusan varchar(5) not null, 
    foreign key (kodejurusan) references jurusan(kodejurusan)
    );

insert into mahasiswa(nim, nama, umur, alamat, kodejurusan) values 
('NIM01','Alam',20,'Binong','J0002'),
('NIM02','Bagja',19,'Garut','J0001'),
('NIM03','Nurul',21,'Margahayu','J0002'),
('NIM04','Muhamad',18,'Batununggal','J0001');

create table matakuliah(
    kodematkul varchar(5) primary key not null, 
    nama varchar(50) not null, 
    sks integer not null
    );

insert into matakuliah(kodematkul, nama, sks) values 
('M0001', 'Nahwu', 20),
('M0002', 'OOP', 8),
('M0003'. 'Data Mining', 9);

create table dosen(
    nidn varchar(5) primary key not null, 
    namadosen varchar(50) not null
    );

insert into dosen(nidn, namadosen) values 
('DOS01','abu abdillaah'),
('DOS02','Rubi');

create table kontrak(
    id integer primary key autoincrement, 
    nim varchar(5) not null, 
    kodematkul varchar(5) not null, 
    nidn varchar(5) not null, 
    nilai varchar(2), 
    foreign key (nim) references mahasiswa(nim)
    foreign key (kodematkul) references matakuliah(kodematkul)
    foreign key (nidn) references dosen(nidn));

insert into kontrak(nim, kodematkul, nidn, nilai) values 
('NIM01', 'M0001', 'DOS01', 'A'),
('NIM02', 'M0002', 'DOS02', 'F'),
('NIM03', 'M0003', 'DOS02', 'C'),
('NIM04', 'M0003', 'DOS02', 'C');