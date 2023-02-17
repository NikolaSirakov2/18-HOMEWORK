class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

Animal.prototype.bite = function () {
    return `This animal can bite!`;
}

class Dog extends Animal {

    constructor (name, color){
        super(name);
        this.color = color;
    }
}

Dog.prototype.run = function () {
    return `Can run!`
}

let rex = new Dog ("Rex", "brown");

console.log(rex.__proto__);
console.log(rex.__proto__.__proto__);
