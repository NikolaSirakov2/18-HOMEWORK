let arr = [
    {name: "Nik", age: 30, isActive: true},
    
    {name: "Kory", age: 20, isActive: false},
    
    {name: "Aron", age: 15, isActive: false},
    
    {name: "Zakary", age: 40, isActive: true},
];

// let test = arr.filter(e => e.isActive === true && e.age > 37 && e.name.length > 4);

let test = arr.slice().pop();

console.log(arr);

console.log(test);