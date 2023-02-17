class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

Animal.prototype.bite = function () {
    return `This animal can bite!`;
}

let dog = new Animal ("Rex", 10);

console.log(Animal.__proto__.__proto__);