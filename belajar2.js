class cat {
    constructor(name){
        this.name = name
    }
    
    constructor(){ //polymorphism

    }

    speak(){
        console.log(`${this.name} make a noise`)
    }

    speak(){

    }
}

class lion extends cat{

}

class lion extends cat{
    //override
    speak(){
        super.speak() // untuk mengambil method yang cat
    }
}


const l = new lion('fuzzy')