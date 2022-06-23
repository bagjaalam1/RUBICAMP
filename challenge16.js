class Tyre {
    constructor(size, brand) {
        this.size = size
        this.brand = brand
    }
}

class Car {
    constructor(tyre, seat, door, type, year, warranty) {
        this.tyre = tyre
        this.seat = seat
        this.door = door
        this.type = type
        this.engineNumber = Car.generateNumber()
        this.year = year
        this.warranty = warranty
    }
    static generateNumber() {
        //return engine number
        function create_UUID() {
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        } return create_UUID();
    }

    garansi(simulationYears) {
        let umurMobil = simulationYears - this.year
        if (umurMobil > this.warranty) {
            return false
        } else {
            return true
        }
    }

    topSpeed(max) {
        console.log(`mobil ini memiliki top speed ${max} KM/H`)
    }
}

class BMW extends Car {
    constructor(year) {
        super(new Tyre(18, 'Dunloop'), 5, 4, "BMW", year, 3)
    }
}

class Mercy extends Car {
    constructor(year) {
        super(new Tyre(17, 'bigstone'), 5, 4, "mercy", year, 1)
    }
}

class Factory {
    constructor(name) {
        this.name = name
        this.cars = []
    }

    produce(year) {
        let production = Math.floor(Math.random() * 10)
        //produksi mercy
        for (let i = 0; i < production; i++) {
            this.cars.push(new Mercy(year))
        }

        //produksi BMW
        for (let i = 0; i < production; i++) {
            this.cars.push(new BMW(year))
        }
        console.log(this.cars)
    }

    warrantySimulation(simulationYear) {
        for (let i = 0; i < this.cars.length; i++) {
            console.log(`${this.cars[i].engineNumber}, ${this.cars[i].type} status garansi: ${this.cars[i].garansi(simulationYear) ? 'aktif' : 'expire'}`)
        }
    }
}

const factory = new Factory('Car\'s Factory')
factory.produce(2020)
factory.produce(2022)
factory.warrantySimulation(2025)