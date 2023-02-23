person = {
  name: "Nik",
    sayName () {
        console.log(this.name);
  }
}

person.sayName();
let local = person.sayName;
person.local();