const person = {
  name: "Nik",
  sayName: function(){
    return this.name;
  }
}

console.log(person.sayName());
let name = "Bil";

let globalFunc = person.sayName;

globalFunc();