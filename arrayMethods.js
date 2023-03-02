let arr = [
    {name: "Nik", age: 30, gender: "male", isActive: true},
    
    {name: "Kory", age: 20, gender: "female", isActive: false},
    
    {name: "Aron", age: 15, gender: "male", isActive: false},
    
    {name: "Zakary", age: 40, gender: "male", isActive: true},
];

// let test = arr.slice(2,4);
// let test1 = arr.concat(test);
let test = arr.map(e => ([
    e.name, 
    e.age
]));

console.log(arr);
console.log(test);