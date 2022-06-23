import MesinHitung from "./mesinHitung.js";
var mh = new MesinHitung()
mh.tambah(10).kurang(5).result()
mh.tambah(3).kali(4).bagi(6).result()
mh.x = 7
console.log(`nilai sekarang : ${mh.x}`)
let Pi = 22/7
mh.kali(2).kali(Pi).result()
mh.x = 7 
mh.square().kali(Pi).result()
mh.x = 4
mh.exponent(3).result()
mh.squareRoot().result()