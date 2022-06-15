/*
pascal case TanggalLahir untuk class

camel case tanggalLahir untuk variable dan function

snake case tanggal-lahir untuk css dan HTML 
snake case tanggal_lahir untuk sql

*/

class Car{ //ini adalah cetakan
    constructor(d,e,f){ // ini adalah property
        this.doors = d // this ini untuk pointer atau menunjuk ke Car, kalo gapake nanti undefined
        this.windows = e
        this.merk = f
    }
    jalan(){ // ini adalah method(function)
        console.log('mobil ngebut')
    }
    mogok(){ //method ini menjelaskan untuk class car ini bisa ngapain aja

    }
}

const mobil1= new Car(5, 7, 'avanza') //parameter 5 masuk //ini instansiansi

//bisa bikin banyak mobil(objek) dari satu cetakan(class)

const mobil2 = new Car(8, 10,'mercy') // ini instansiansi
console.log(mobil2)
//instansiansi mirip invoke
//