var name = "Nik";

class Person  {

  constructor(name){
  this.name = name;
  }

  stop = () => this.name;
  
  

  run = function () {
    this.name;
  }
}

var human = new Person("Mad")

console.log(human.stop());
console.log(run());