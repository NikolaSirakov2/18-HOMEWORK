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

