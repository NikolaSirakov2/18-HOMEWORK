class Person {
  constructor(name) {
    this.name = name;
  }

  run = () => {
    console.log(`${this.name} is runing!`);
  }
}

let human = new Person("Mad");

human.run();
