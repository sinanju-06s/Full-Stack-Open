class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const adma = new Person('Adam Ondra',35)
adma.greet()

const janja = new Person('Janja Garnbret',22)
janja.greet()

