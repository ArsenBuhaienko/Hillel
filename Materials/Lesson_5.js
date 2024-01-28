class Car{
    #privateField = "smt" // приватное поле
    constructor(age){
        this.age = age
    }
    setType(newType){
        this.type = newType
    }
    getType(){
        return this.type
    }
    printType(){
        console.log(this.type)
    }
}

class BMW extends Car{
    constructor(mark){
        super(6)
        this.mark = mark
    }
}

let bmv = new BMW("car")
console.log(bmv)

// Getters and Setters
let car = new Car("smt")
car.printType

readonly // analog of private

