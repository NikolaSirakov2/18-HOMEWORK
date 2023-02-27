// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   run = () => {
//     console.log(`${this.name} is runing!`);
//   }
// }

// let human = new Person("Mad");

// human.run();

let old = {
  value: 9
}

const change = (num) => {
  
  return {
    ...num, 
    namez: "Nik"}
}

let newN = change(old);

console.log(old);
console.log(newN);

console.log(JSON.stringify(newN));

console.log(newN);
