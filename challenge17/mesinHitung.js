export default class MesinHitung {
    constructor() {
        this.x = 1
    }

    tambah(num) {
        this.x += num
        return this
    }

    kurang(num) {
        this.x -= num
        return this
    }

    kali(num) {
        this.x *= num
        return this
    }

    bagi(num) {
        this.x /= num
        return this
    }

    square() {
        this.x *= this.x
        return this
    }

    exponent(num) {
        this.x = Math.pow(this.x, num)
        return this
    }

    squareRoot() {
        this.x = Math.sqrt(this.x)
        return this
    }

    result() {
        console.log(this.x)
    }
}